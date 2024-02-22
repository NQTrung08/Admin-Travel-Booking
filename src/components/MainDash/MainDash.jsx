import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideBar from "../SideBar/SideBar.jsx";
import MyTable from "../Table/Table.jsx";
import "./MainDash.css";
import Cards from "../Cards/Cards.jsx";
const MainDash = () => {
  return (
    <>
      <Col lg={9}>
        <div className="MainDash">
          <h1>Dashboard</h1>
        </div>
        <MyTable />
      </Col>
    </>
  );
};

export default MainDash;
