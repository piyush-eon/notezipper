import { Button, Modal } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function NoteModal({ show, noteModal, onHide }) {
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          {noteModal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactMarkdown>{noteModal.content}</ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NoteModal;
