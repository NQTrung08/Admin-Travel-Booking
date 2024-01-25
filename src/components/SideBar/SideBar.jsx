import React from "react";
import { Container, Col, Row } from "reactstrap";

const SideBar = () => {
	return (
		<Col lg={3} className="bg-dark link-primary">
			<ul>
				<li>Dashboard</li>
				<li>Users---</li>
				<li>Tours--</li>
				<li>Orders</li>
			</ul>
		</Col>
	);
};

export default SideBar;
