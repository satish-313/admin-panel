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

const fields = ["mode", "createdAt", "Edit", "Delete"];

const Breadcrumbs = () => {
  const [modeList, setModeList] = useState([]);
  const [editing, setEditing] = useState({ status: false, id: "" });
  const [modeSubmit, setModeSubmit] = useState("");
  let url = "https://notion-press.herokuapp.com/api/admin"

  const getMode = async () => {
    const res = await fetch(
      `${url}/get-mode`
    );
    const data = await res.json();
    data.allmode.map((l) => {
      l.createdAt = moment(l.createdAt).add(10, "days").calendar();
    });
    setModeList(data.allmode);
  };

  const postMode = async (e) => {
    e.preventDefault();
    if (editing.status) {
      try {
        const res = await fetch(`${url}/edit-mode`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mode: modeSubmit, id: editing.id }),
        });
        const data = await res.json();
        console.log(data);
        setEditing({ status: false, id: "" });
        setModeSubmit("");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fetch(`${url}/add-mode`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mode: modeSubmit }),
        });
        const data = await res.json();
        setModeSubmit("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showEditing = (id) => {
    const item = modeList.find((l) => l._id === id);
    setModeSubmit(item.mode);
    setEditing({ status: true, id: id });
  };

  const deleteMode = async (id) => {
    try {
      const res = await fetch(`${url}/delete-mode`, {
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
    getMode();
  }, [postMode, deleteMode]);

  return (
    <CRow>
      <CCol xs="12">
        <CCardBody>
          <CRow>
            <CCol>
              <CForm onSubmit={postMode} autoComplete="off">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput
                        type="text"
                        value={modeSubmit}
                        onChange={(e) => setModeSubmit(e.target.value)}
                        placeholder="mode"
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
                <CCardHeader>Mode List</CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={modeList}
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
                            onClick={() => deleteMode(item._id)}
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
