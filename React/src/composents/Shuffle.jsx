import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Base_URL } from "../config_front/API.js";

const Shuffle = () => {
	const [teste, setTeste] = React.useState("");

	React.useEffect(() => {
		axios
			.get(`${Base_URL}/Shuffle`)
			.then((res) => {
				// si tout ce passe bien :
				setTeste(res.data.teste);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<h1>{teste}</h1>
		</>
	);
};
export default Shuffle;
