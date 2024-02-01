import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainDash from "../components/MainDash/MainDash.jsx";
import Customer from "../components/Customer/Customer.jsx";
import Tours from "../components/Tours/Tours.jsx";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to='/mainDash' />} />
			<Route path="/mainDash" element={<MainDash />} />
			<Route path="/customers" element={<Customer />} />
			<Route path="/tours" element={<Tours/>}/>
		</Routes>
	);
};

export default Routers;
