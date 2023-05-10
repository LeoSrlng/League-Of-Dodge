// import { NavLink, useLocation } from "react-router-dom";
// import React from "react";
// import axios from "axios";
// import { Base_URL } from "../config_front/API.js";

// const Among = () => {
// 	const [teste, setTeste] = React.useState("");
// 	const [typingTimer, setTypingTimer] = React.useState("");
// 	const [isTyping, setIsTyping] = React.useState(false);
// 	const [spanTyping, setSpanTyping] = React.useState("");

// 	// const socket = io();

// 	React.useEffect(() => {
// 		axios
// 			.get(`${Base_URL}/Among/:id`)
// 			.then((res) => {
// 				// si tout ce passe bien :
// 				setTeste(res.data.teste);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}, []);

// 	return (
// 		<>
// 			<h1>{teste}</h1>
// 			<section>
// 				<form action="">
// 					<input id="inputLogin" type="text" placeholder="pseudo" autoFocus />
// 					<input type="submit" value="se connecter" />
// 				</form>
// 			</section>
// 			<section>
// 				<ul></ul>
// 				<ul></ul>
// 				<form method="get">
// 					<input id="inputChat" type="text" placeholder="envoyer un message" />
// 					<input type="submit" value="Envoyer" />
// 				</form>
// 			</section>
// 		</>
// 	);
// };
// export default Among;

import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import { ConnectionState } from "./teste/ConnectionState";
import { Events } from "./teste/Events";
import { ConnectionManager } from "./teste/ConnectionManager";
import { MyForm } from "./teste/MyForm";

function Among() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [fooEvents, setFooEvents] = useState([]);

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}

		function onFooEvent(value) {
			setFooEvents((previous) => [...previous, value]);
		}

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("foo", onFooEvent);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("foo", onFooEvent);
		};
	}, []);

	return (
		<div className="App">
			<ConnectionState isConnected={isConnected} />
			<Events events={fooEvents} />
			<ConnectionManager />
			<MyForm />
		</div>
	);
}
export default Among;
