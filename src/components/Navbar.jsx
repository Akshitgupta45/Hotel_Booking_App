import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { auth } from "../firebase";
const Nav = () => {
	function handleSignOut() {
		auth
			.signOut()
			.then((result) => {
				console.log("RESULT", result);
			})
			.catch((error) => {
				console.log("ERROR", error);
			});
	}
	return (
		<>
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						// onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						BookStay
					</Typography>
					<Button sx={{ color: "#fff" }}>Home</Button>
					<Button onClick={handleSignOut} sx={{ color: "#fff" }}>
						Logout
					</Button>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{/* {navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
								{item}
							</Button>
						))} */}
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
export default Nav;
