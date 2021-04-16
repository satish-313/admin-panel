import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CButton,
  CRow,
} from "@coreui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";

const fields = ["status", "createdAt", "Edit", "Delete"];

const Breadcrumbs = () => {
  const [statusList, setStatusList] = useState([]);
  const [editing, setEditing] = useState({ status: false, id: "" });
  const [statusSubmit, setStatusSubmit] = useState("");
  let url = "https://notion-press.herokuapp.com/api/admin"

  const getStatus = async () => {
    const res = await fetch(
      `${url}/get-status`
    );
    const data = await res.json();
    data.allstatus.map((l) => {
      l.createdAt = moment(l.createdAt).add(10, "days").calendar();
    });
    setStatusList(data.allstatus);
  };

  const postStatus = async (e) => {
    e.preventDefault();
    if (editing.status) {
      try {
        const res = await fetch(`${url}/edit-status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: statusSubmit, id: editing.id }),
        });
        const data = await res.json();
        console.log(data);
        setEditing({ status: false, id: "" });
        setStatusSubmit("");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fetch(`${url}/add-status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: statusSubmit }),
        });
        const data = await res.json();
        setStatusSubmit("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showEditing = (id) => {
    const item = statusList.find((l) => l._id === id);
    setStatusSubmit(item.status);
    setEditing({ status: true, id: id });
  };

  const deleteStatus = async (id) => {
    try {
      const res = await fetch(`${url}/delete-status`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStatus();
  }, [postStatus, deleteStatus]);

  return (
    <CRow>
      <CCol xs="12">
        <CCardBody>
          <CRow>
            <CCol>
            <CForm onSubmit={postStatus} autoComplete="off">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput
                        type="text"
                        value={statusSubmit}
                        onChange={(e) => setStatusSubmit(e.target.value)}
                        placeholder="status"
                      />
                      <CInputGroupAppend>
                        <CButton type="submit" color="primary">
                          Submit
                        </CButton>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
              <CCard>
                <CCardHeader>Status List</CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={statusList}
                    fields={fields}
                    hover
                    striped
                    bordered
                    size="sm"
                    itemsPerPage={10}
                    pagination
                    scopedSlots={{
                      Edit: (item) => (
                        <td>
                          <button
                            className="btn btn-dark "
                            onClick={() => showEditing(item._id)}
                          >
                            edit
                          </button>
                        </td>
                      ),
                      Delete: (item) => (
                        <td>
                          <button
                            className="btn btn-danger "
                            onClick={() => deleteStatus(item._id)}
                          >
                            delete
                          </button>
                        </td>
                      ),
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCol>
    </CRow>
  );
};

export default Breadcrumbs;
