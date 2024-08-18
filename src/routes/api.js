import express from "express";
import apiController from "../controllers/apiController";

const router = express.Router();

const initApiRoutes = (app) => {
  //rest api
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.handleRegister)

  return app.use("/api/v1", router);
};

export default initApiRoutes;
