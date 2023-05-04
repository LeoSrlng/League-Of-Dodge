import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();

app.use(express.static("public"));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
