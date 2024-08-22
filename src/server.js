import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import connectDB from "../src/config/connectDB";
import configCors from "./config/cors";
require("dotenv").config();
import { createJWT, verifyToken } from "./middleware/JWTAction";

const app = express();
const PORT = process.env.PORT || 8888;

// config cors
configCors(app);

// config view engine
configViewEngine(app);

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
connectDB();

// test jwt
createJWT();
let decodedData = verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHZkNzUiLCJhZGRyZXNzIjoiTmFtIERpbmgiLCJpYXQiOjE3MjQyOTM4OTR9.Gmc851gFsgRiswcIupUWH91fbf-sXQQDg2gWeBkmneo"
);
console.log(decodedData)

// init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
  console.log("Server start on the PORT: " + PORT);
});
