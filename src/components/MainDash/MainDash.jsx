import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideBar from "../SideBar/SideBar.jsx";
import MyTable from "../Table/Table.jsx";
const MainDash = () => {
	return (
		<>
			<Col lg={9}>
				<MyTable />
			</Col>

		</>
	);
};

export default MainDash;
