const user = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, passeword, phone ,role} = req.body;
    const Founduser = await user.findOne({ email });
    

    if (Founduser) {
      return res.status(400).send({
        errors: [{ msg: "email should be unique, please try again" }],
      });
    }
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(passeword, saltRounds);
    const newuser = new user({
      ...req.body,
    });
    newuser.passeword = hashedpassword;

    const token = jwt.sign(
      {
        id: newuser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    await newuser.save();

    res.status(200).send({ msg: "signup", user: newuser, token });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "cannot register" }] });
  }
  console.log(error);
};
exports.signin = async (req, res) => {
  try {
    const { email, passeword } = req.body;
    const Founduser = await user.findOne({ email });
    //    console.log(Founduser);
    if (!Founduser) {
      return res.status(400).send({ errors: [{ msg: "badcredential" }] });
    }

    const chekcpassword = await bcrypt.compare(passeword, Founduser.passeword);
    // console.log(chekcpassword);
    if (!chekcpassword) {
      return res.status(400).send({ errors: [{ msg: "badcredential" }] });
    }

    // token
    const token = jwt.sign(
      {
        id: Founduser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    res.status(200).send({ msg: "login success", user: Founduser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "signup" }] });
  }
};
