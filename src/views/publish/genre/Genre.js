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

const fields = ["genre", "createdAt", "Edit", "Delete"];

const Breadcrumbs = () => {
  const [genreList, setGenreList] = useState([]);
  const [editing, setEditing] = useState({ status: false, id: "" });
  const [genreSubmit, setGenreSubmit] = useState("");
  let url = "https://notion-press.herokuapp.com/api/admin";

  const getGenre = async () => {
    const res = await fetch(`${url}/get-genre`);
    const data = await res.json();
    data.allgenre.map((l) => {
      l.createdAt = moment(l.createdAt).add(10, "days").calendar();
    });
    setGenreList(data.allgenre);
  };

  const postGenre = async (e) => {
    e.preventDefault();
    if (editing.status) {
      try {
        const res = await fetch(`${url}/edit-genre`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ genre: genreSubmit, id: editing.id }),
        });
        const data = await res.json();
        console.log(data);
        setEditing({ status: false, id: "" });
        setGenreSubmit("");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fetch(`${url}/add-genre`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ genre: genreSubmit }),
        });
        const data = await res.json();
        console.log(data);
        setGenreSubmit("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showEditing = (id) => {
    const item = genreList.find((l) => l._id === id);
    setGenreSubmit(item.genre);
    setEditing({ status: true, id: id });
  };

  const deleteGenre = async (id) => {
    try {
      const res = await fetch(`${url}/delete-genre`, {
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
    getGenre();
  });

  return (
    <CRow>
      <CCol xs="12">
        <CCardBody>
          <CRow>
            <CCol>
              <CForm onSubmit={postGenre} autoComplete="off">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput
                        type="text"
                        value={genreSubmit}
                        onChange={(e) => setGenreSubmit(e.target.value)}
                        placeholder="genre"
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
                <CCardHeader>Genre List</CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={genreList}
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
                            onClick={() => deleteGenre(item._id)}
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
