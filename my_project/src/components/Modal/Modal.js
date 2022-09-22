import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalD() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button> */}
      <Button
        variant="warning"
        style={{ marginLeft: "10px" }}
        onClick={handleShow}
      >
        Đặt lịch hẹn
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tư vấn miễn phí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mt-3">
            <label>Họ tên</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Nhập tên"
            />
          </div>
          <div className="form-group mt-3">
            <label>Số điện thoại</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Đặt lịch
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalD;
