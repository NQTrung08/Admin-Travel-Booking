import React from "react";
import Routers from "../../Router/Routers";
import { Container, Row, Col } from "reactstrap";
import SideBar from "../SideBar/SideBar";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Container>
          <Row className="layoutGlass">
            <SideBar />
            <Routers />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Layout;
