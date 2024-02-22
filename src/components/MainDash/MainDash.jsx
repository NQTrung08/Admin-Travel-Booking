import React from "react";
import { Container, Row, Col } from "reactstrap";
import Cards from "../Cards/Cards.jsx";
import SideBar from "../SideBar/SideBar.jsx";

const MainDash = () => {
  return (
    <>
      <Col lg={9}>
        <div>
          <h1>Dashboard</h1>
          <Cards />
        </div>
      </Col>
    </>
  );
};

export default MainDash;
