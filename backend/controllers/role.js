const Role = require("../models/role");

const register = async (req, res) => { 
    if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  let existingRole = await Role.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send("The role already exists");

  let role = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await role.save();
  if (!result) return res.status(400).send("Failed to register role");
  return res.status(200).send({ result });
};
const list = async (req, res) => {

    let role = await Role.find();
  if (!role || role.length === 0)
    return res.status(400).send("Empty role list");
  return res.status(200).send({ role });
 };

module.exports = { register, list };