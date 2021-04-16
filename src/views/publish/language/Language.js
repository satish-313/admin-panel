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

const fields = ["language", "createdAt", "Edit", "Delete"];

const Breadcrumbs = () => {
  const [languageList, setlanguageList] = useState([]);
  const [editing, setEditing] = useState({ status: false, id: "" });
  const [languageSubmit, setLanguageSubmit] = useState("");
  let url = "https://notion-press.herokuapp.com/api/admin"

  const getLanguage = async () => {
    const res = await fetch(
      `${url}/get-language`
    );
    const data = await res.json();
    data.alllanguage.map((l) => {
      l.createdAt = moment(l.createdAt).add(10, "days").calendar();
    });
    setlanguageList(data.alllanguage);
  };

  const postLanguage = async (e) => {
    e.preventDefault();
    if (editing.status) {
      try {
        const res = await fetch(
          `${url}/edit-language`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ language: languageSubmit, id: editing.id }),
          }
        );
        const data = await res.json();
        console.log(data);
        setEditing({ status: false, id: "" });
        setLanguageSubmit("");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fetch(
          `${url}/add-language`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ language: languageSubmit }),
          }
        );
        const data = await res.json();
        setLanguageSubmit("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showEditing = (id) => {
    const item = languageList.find((l) => l._id === id);
    setLanguageSubmit(item.language);
    setEditing({ status: true, id: id });
  };

  const deleteLanguage = async (id) => {
    try {
      const res = await fetch(
        `${url}/delete-language`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLanguage();
  });

  return (
    <CRow>
      <CCol xs="12">
        <CCardBody>
          <CRow>
            <CCol>
            <CForm onSubmit={postLanguage} autoComplete="off">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput
                        type="text"
                        value={languageSubmit}
                        onChange={(e) => setLanguageSubmit(e.target.value)}
                        placeholder="language"
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
                <CCardHeader>Language List</CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={languageList}
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
                            onClick={() => deleteLanguage(item._id)}
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
