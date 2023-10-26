import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	function handleLogin() {
		console.log(email, password);
		if (email === "abcd@email.com" && password === "12345") {
			navigate("/home");
		} else {
			alert("Invalid username or password");
		}
	}
	function onLoginClick() {
		// console.log("button clicked");
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log("result", result);
				const userName = result.user.displayName;
				// console.log(userName);
				navigate("/home", {
					state: {
						userName,
					},
				});
			})
			.catch((error) => {
				console.log("error", error);
			});
	}
	return (
		<div>
			<Container sx={{ mt: "100px" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					// sx={{ height: "100vh" }}
				>
					<Grid item>
						<TextField
							required
							id="outlined-required"
							label="Username"
							// defaultValue="Hello World"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<br />
						<br />
						<TextField
							required
							id="outlined-password-input"
							label="Password"
							type="password"
							// autoComplete="current-password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<br />
						<br />
						<Button
							// style={{ alignItems: "center" }}
							variant="contained"
							startIcon={<LoginIcon />}
							onClick={handleLogin}
						>
							Login
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					sx={{ height: "40vh" }}
				>
					<Grid item>
						<button
							onClick={onLoginClick}
							style={{
								padding: "5px",
								backgroundColor: "#1976d2",
								color: "#fff",
								border: "none",
								fontSize: "25px",
								height: "40px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<GoogleIcon sx={{ mr: "10px" }} />
							Signin with Google
						</button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
