import express from "express";
import apiController from "../controllers/apiController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const testMiddleware = (req, res, next) => {
  console.log("calling a middleware");
  if (true) {
    return res.send("reject middleware");
  }
  next();
};

// const checkUserLogin = (req, res, next) => {
//   const nonSecurePaths = ["/", "/register", "/login"];
//   if (nonSecurePaths.includes(req.path)) return next();

//   if(user) {
//     next()
//   } else {

//   }
// };

const initApiRoutes = (app) => {
  //rest api
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  router.get("/user/read", checkUserJWT, checkUserPermission, userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  router.get("/group/read", groupController.readFunc);

  return app.use("/api/v1", router);
};

export default initApiRoutes;
