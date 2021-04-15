const { validationResult,check } = require("express-validator");

exports.registerValidation = () => [
  check("name", "name is required").not().isEmpty(),
  check("email", "enter a valid email").isEmail(),
  check("passeword", "enter a valid passeword").isLength({ min: 6 }),
  check("phone", "phone is required").not().isEmpty(),
];
exports.Loginvalidation = () => [
  check("email", "email is required").not().isEmpty(),
  check("email", "enter a valid email").isEmail(),
  check("passeword", "enter a valid passeword").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
