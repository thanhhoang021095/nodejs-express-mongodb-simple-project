const express = require("express");
const router = express.Router();
const Users = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const userList = await Users.find();
    res.json(userList);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const newUser = new Users({
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
  });
  try {
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
