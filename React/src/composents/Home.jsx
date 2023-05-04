import React from "react";
import axios from "axios";
import { Base_URL } from "../config_front/API.js";

const Home = () => {
	const [teste, setTeste] = React.useState("");

	React.useEffect(() => {
		axios
			.get(`${Base_URL}/`)
			.then((res) => {
				// si tout ce passe bien :
				setTeste(res.data.teste);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>{teste}</h1>
		</div>
	);
};
export default Home;
