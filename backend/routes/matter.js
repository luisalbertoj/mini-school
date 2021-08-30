const express = require("express");
const router = express.Router();
const Matter = require("../controllers/matter");

router.post("/register", Matter.register);
router.get("/list", Matter.list);

module.exports = router;