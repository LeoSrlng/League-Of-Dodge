import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useContext, useEffect } from "react";
import axios from "axios";
import { Base_URL } from "../config_front/API.js";
import socketIO from "socket.io-client";

const Navbar = () => {
	const [id, setId] = React.useState();

	const navigate = useNavigate();

	const toAmong = () => {
		axios
			.get(`${Base_URL}/nav`)
			.then((res) => {
				setId(res.data.id);
				console.log("id dans la nav = " + res.data.id);
			})
			.catch((err) => {
				console.log(err);
			})
			.then((res) => {
				navigate(`/among/${res.data.id}`);
				const socket = socketIO.connect(`http://localhost:${res.data.id}`);
			});
	};

	return (
		<>
			<NavLink aria-label="btn-among" onClick={toAmong}>
				Among Legends
			</NavLink>
			<br />
			<NavLink aria-label="btn-shuffle" to="/Shuffle">
				Shuffle
			</NavLink>
			<br />
			<NavLink aria-label="btn-home" to="/">
				Acceuil
			</NavLink>
		</>
	);
};

export default Navbar;
