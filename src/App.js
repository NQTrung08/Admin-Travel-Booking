import "./App.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import MyTable from "./components/Table/Table";
import SideBar from "./components/SideBar/SideBar";
function App() {
	return (
		<>
    <Container>
      <Row>
			  <SideBar />
        
        <Col lg={9}>
          <MyTable />
        </Col>
          
      </Row>
    </Container>
		</>
	);
}

export default App;
