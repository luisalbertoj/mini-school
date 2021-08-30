const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.post("/register", User.register);
router.get("/list", User.list);

module.exports = router;