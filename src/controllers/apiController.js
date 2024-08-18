import * as loginRegisterService from "../service/loginRegisterService";

const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters", // error message
        EC: "1", // error code
        DT: "", //date
      });
    }
    if(req.body.password && req.body.password.length < 4) {
      return res.status(200).json({
        EM: "Your password must have more than 3 letters", // error message
        EC: "1", // error code
        DT: "", //date
      })
    }

    // service: create user
    let data = await loginRegisterService.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: "", //date
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //date
    });
  }
};

module.exports = {
  testApi,
  handleRegister,
};
