const jwt = require("jsonwebtoken");
const user = require("../Models/user");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    const founduser = await user.findOne({ _id: decoded.id });
  console.log(founduser);
    if (!founduser) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    req.user=founduser;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
};
module.exports=isAuth;