import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideBar from "../SideBar/SideBar.jsx";
import MyTable from "../Table/Table.jsx";
const MainDash = () => {
	return (
		<div>
			<Container>
				<Row>
					<SideBar />

					<Col lg={9}>
						<MyTable />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MainDash;
