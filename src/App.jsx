import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./container/HotelDetails";
import Login from "./container/Login";
import Layout from "./container/Layout";

function App() {
	return (
		<div className="">
			{/* <Navbar /> */}
			<h1>Hotel Booking App</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/home"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route path="/hotel-details/:slug" element={<HotelDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
