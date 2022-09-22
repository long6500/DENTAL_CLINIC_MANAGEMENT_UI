import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>Phương pháp</Heading>
            <FooterLink href="#">Làm răng sứ</FooterLink>
            <FooterLink href="#">Bọc răng sứ</FooterLink>
            <FooterLink href="#">Niềng răng</FooterLink>
            
          </Column>
          <Column>
            <Heading>Dịch vụ</Heading>
            <FooterLink href="#">Thẩm mỹ răng sứ</FooterLink>
            <FooterLink href="#">Trồng răng Implants</FooterLink>
            <FooterLink href="#">Chỉnh nha - Niềng răng 3D</FooterLink>
            <FooterLink href="#">Các dịch vụ khác</FooterLink>
          </Column>

          <Column>
            <Heading>Liên hệ</Heading>
            <FooterLink href="#">Hotline - 0763.29.6666</FooterLink>
			<FooterLink href="#">
              Địa chỉ: 265 Tôn Đức Thắng, Đống Đa, Hà Nội, Việt Nam{" "}
            </FooterLink>
          </Column>
          <Column>
            <Heading>Chính sách</Heading>
            <FooterLink href="#">Khách Hàng thân thiết</FooterLink>
            <FooterLink href="#">Bảo hành</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
