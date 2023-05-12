import React from "react";
import axios from "axios";
import { Base_URL } from "../config_front/API.js";
import { useParams } from "react-router-dom";

const Among = () => {
	const [teste, setTeste] = React.useState("");
	const { id } = useParams();

	React.useEffect(() => {
		axios
			.get(`${Base_URL}/Among/${id}`)
			.then((res) => {
				// si tout ce passe bien :
				setTeste(res.data.teste);
				console.log("id dans Among = " + res.data.id);
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
export default Among;
