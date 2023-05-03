import React from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [liste, setListe] = React.useState("");

	React.useEffect(() => {
		axios
			.get("http://localhost:8080/")
			.then((response) => {
				// Traitez la réponse ici
				setListe(response.data.teste);
			})
			.catch((error) => {
				// Traitez l'erreur ici
			});
	}, []);

	return (
		<>
			<h1>{liste}</h1>
		</>
	);
}

export default App;
