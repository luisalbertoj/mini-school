const express = require("express");
const router = express.Router();
const Course = require("../controllers/course");

router.post("/register", Course.register);
router.get("/list", Course.list);

module.exports = router;
