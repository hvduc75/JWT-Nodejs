import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectDB from "../src/config/connectDB"
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8888;

// config view engine
configViewEngine(app);

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
connectDB();

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Server start on the PORT: " + PORT);
});
