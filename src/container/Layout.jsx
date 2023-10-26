import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Layout = ({ children }) => {
	const navigate = useNavigate();
	console.log(children);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			// console.log(user);
			if (!user) {
				// alert("Please Login first");
				navigate("/");
			}
		});
	}, []);
	return (
		<div>
			<Navbar />

			{children}
		</div>
	);
};

export default Layout;
