import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./noteStyles.css";
import { Link } from "react-router-dom";
import NoteModal from "../../components/NoteModal";

import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function MyNotes() {
  const [noteModal, setNoteModal] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  const ModelShow = (note) => {
    setModalShow(true);
    setNoteModal(note);
  };

  return (
    <MainScreen title="Welcome Back Piyush..">
      {console.log(notes)}
      {loading && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {notes &&
        notes.map((note) => (
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <Link
                onClick={() => ModelShow(note)}
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  alignSelf: "center",
                }}
              >
                {note.title}
              </Link>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  Created on{" "}
                  <cite title="Source Title">
                    {note.createdAt.substring(0, 10)}
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      <NoteModal
        show={modalShow}
        noteModal={noteModal}
        onHide={() => setModalShow(false)}
      />
    </MainScreen>
  );
}

export default MyNotes;
