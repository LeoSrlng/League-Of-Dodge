import express from "express";
const app = express();
app.use(express.static("public"));

import cors from "cors";
app.use(cors());

import { createServer } from "http";
const http = createServer(app);

import { Server } from "socket.io";
const socketIO = new Server(http, {
	cors: {
		origin: "http://localhost:5173",
	},
});

// import bodyParser from "body-parser";
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

let PORT = process.env.PORT || 8080;

// socketIO.on("connection", (socket) => {
// 	console.log(`⚡: A user just connected!`);
// 	socket.on("disconnect", () => {
// 		console.log("🔥: A user disconnected");
// 	});
// });

const ToAmongController = (req, res) => {
	const salonGap = [0, 999999];
	let min = Math.ceil(salonGap[0]);
	let max = Math.floor(salonGap[1]);
	let id = Math.round(Math.random() * (max - min) + min);
	PORT = id;
	console.log(PORT);
	res.json({ response: true, id });
};

import router from "./routes/routes.js";
app.use("/", router);
router.get("/nav", ToAmongController);

// export default ToAmongController;

http.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
