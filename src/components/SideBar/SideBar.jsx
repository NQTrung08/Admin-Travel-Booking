import React from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink, Link } from 'react-router-dom';
import logo from "../../imgs/logoTravel.png";
import "./SideBar.css";

const nav_links = [
	{
		path: "/mainDash",
		display: "MainDash",
	},
	{
		path: "/customers",
		display: "Customers",
	},
	{
		path: "/tours",
		display: "Tours",
	},
	{
		path: "/orders",
		display: "Orders",
	},
];

const SideBar = () => {
	return (
		<Col lg={3} className="">
			<div className="Sidebar">
				<div className="logo">
					<img src={logo} alt="" />
				</div>

				<div className="navigation">
					<ul className="menu gap-5">
						{nav_links.map((link, index) => {
							return (
								<li className="nav__item" key={index}>
									<NavLink
										to={link.path}
										className={(navClass) => {
											return navClass.isActive ? "active__link" : "";
										}}
									>
										{link.display}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Col>
	);
};

export default SideBar;
