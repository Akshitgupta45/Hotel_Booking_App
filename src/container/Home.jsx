import React from "react";
import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
	const [hotels, setHotels] = useState([]);
	const location = useLocation();
	console.log(location);
	useEffect(() => {
		axios
			.get("https://hotels-api-4ltr.onrender.com/api/hotels")
			.then((response) => {
				console.log(response.data);
				setHotels(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<>
			<Container maxWidth="lg" sx={{ marginTop: 10 }}>
				<Typography variant="h4">
					Welcome {location?.state?.userName}
				</Typography>
				<Grid container spacing={4}>
					{hotels.map((hotel) => {
						return (
							<Grid key={hotel.id} item xs={4}>
								<HotelCard hotel={hotel} />
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</>
	);
};

export default Home;
