import express from "express";
import apiController from "../controllers/apiController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import roleController from "../controllers/roleController";

import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const initApiRoutes = (app) => {
  //rest api
  router.all("*", checkUserJWT, checkUserPermission);
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);
  router.get("/account", userController.getUserAccount);

  // user routes
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // roles routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);

  // group routes
  router.get("/group/read", groupController.readFunc);

  return app.use("/api/v1", router);
};

export default initApiRoutes;
