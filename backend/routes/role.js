const express = require("express");
const router = express.Router();
const Role = require("../controllers/role");

router.post("/register", Role.register);
router.get("/list", Role.list);

module.exports = router;