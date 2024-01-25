import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainDash from "../components/MainDash/MainDash.jsx";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to='/mainDash' />} />
			<Route path="/mainDash" element={<MainDash />} />
			
		</Routes>
	);
};

export default Routers;
