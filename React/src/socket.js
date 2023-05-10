import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:8080";

// const io = new Server({
// 	cors: {
// 		origin: "http://localhost:3000",
// 	},
// });

// io.listen(8080);

export const socket = io(URL, {
	autoConnect: false,
});
