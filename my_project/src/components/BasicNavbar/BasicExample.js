import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ModalD from "../Modal/Modal";
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Trang chủ</Nav.Link>
            {/* <Nav.Link href="/team">Giới thiệu</Nav.Link> */}
            <NavDropdown title="Giới thiệu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/team">Đôi nét về Delia</NavDropdown.Item>

              <NavDropdown.Item href="/quytrinh">
                Quy trình dịch vụ
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/product">Sản phẩm</Nav.Link>
            <Nav.Link href="/services">Phương pháp</Nav.Link>
            {/* <Nav.Link href="/pathological1">Bệnh lý</Nav.Link> */}

            <NavDropdown title="Bệnh lý" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pathological1">
                Răng khôn
              </NavDropdown.Item>
              <NavDropdown.Item href="/rangho">Răng hô</NavDropdown.Item>
              <NavDropdown.Item href="/rangmom">Răng móm</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          {/* <Navbar.Form> */}
          <Button variant="success">Sign up</Button>
          <ModalD></ModalD>
          {/* </Navbar.Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
