import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HotelCard = (props) => {
	const navigate = useNavigate();
	// console.log(props.hotel);
	const hotelDetails = props.hotel;
	const onCardClick = () => {
		console.log("card clicked", hotelDetails);
		// console.log(hotelDetails.slug);
		navigate(`/hotel-details/${hotelDetails.slug}`);
	};
	return (
		<Card onClick={onCardClick} sx={{ maxWidth: 300, marginBottom: 5 }}>
			<CardMedia
				sx={{ height: 150 }}
				image={hotelDetails.thumbnail}
				title={hotelDetails.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{hotelDetails.address}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					${hotelDetails.pricePerNight}
				</Typography>
				<Rating
					name="read-only"
					value={Math.floor(hotelDetails.rating)}
					readOnly
				/>
				{/* <Typography component="legend">Read only</Typography> */}
			</CardContent>
			{/* <CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
};

export default HotelCard;
