//model
const User = require('../models/User');

const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);
  const dataTobeStored = {
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
  };
  try {
    const userData = User.create(dataTobeStored);
    res.status(201).json({ status: 'success', data: userData });
  } catch (error) {
    console.error(error);
  }
};

//login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) res.status(200).json({ status: 'failed' });

    const psw = bcrypt.compareSync(password, user.password);
    if (psw) {
      req.session.isAuth = true;
      req.session.userEmail = user.email;
      res.status(201).json({ status: 'success' });
    } else {
      res.status(200).json({ status: 'failed' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login };
