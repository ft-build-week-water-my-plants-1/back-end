const authRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./auth-model");
const buildToken = require("./token-builder");
const {
  checkUsernameFree,
  checkUsernameExists,
  checkPhoneNumberFree,
  validateUser,
} = require("./auth-middleware");

authRouter.post(
  "/register",
  validateUser,
  checkUsernameFree,
  checkPhoneNumberFree,
  async (req, res, next) => {
    try {
      const newUser = await Users.insertUser(req.user);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

// authRouter.post(
//   "/login",
//   validateUser,
//   checkUsernameExists,
//   (req, res, next) => {
//     const { password } = req.body;
//     if (bcrypt.compareSync(password, res.user.password)) {
//       const token = buildToken(res.user);
//       res.status(200).json({
//         message: `welcome, ${res.user.username}`,
//         token,
//       });
//     } else {
//       next({ status: 401, message: "invalid credentials" });
//     }
//   }
// );

module.exports = authRouter;