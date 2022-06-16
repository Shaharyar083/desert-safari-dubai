import React from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const GuideModal = ({ children, id, data, objectKey, fetchData }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const [input, setInput] = React.useState("");

  const onAssign = async () => {
    if (input !== "") {
      let body = { ...data, [objectKey]: { ...data[objectKey], guide: input } };
      await axios.put(`http://localhost:5000/booking/editbooking/${id}`, body);
      modalClose();
      fetchData();
    }
  };

  const modalClose = () => {
    setModalShow(false);
    setInput("");
  };

  return (
    <>
      <div className="assignGuide" onClick={() => setModalShow(true)}>
        {children}
      </div>
      <Modal show={modalShow} onHide={modalClose} centered>
        <Modal.Body>
          <h4>Assign Guide</h4>
          <input
            placeholder="assign guide here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalClose}>Close</Button>
          <Button onClick={onAssign}>Assign</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuideModal;
