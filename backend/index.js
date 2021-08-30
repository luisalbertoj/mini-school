const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Role = require("./routes/role");
const User = require("./routes/user");
const Matter = require("./routes/matter");
const Course = require("./routes/course");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/matter", Matter);
app.use("/api/course", Course);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();
