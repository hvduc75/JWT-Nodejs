import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import connectDB from "../src/config/connectDB";
import configCors from "./config/cors";
require("dotenv").config();

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

// init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
  console.log("Server start on the PORT: " + PORT);
});
