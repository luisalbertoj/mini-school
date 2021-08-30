const User = require("../models/user");

const register = async (req, res) => {
 
    if (!req.body.name || !req.body.email || !req.body.password ||
        !req.body.roleId)
        return res.status(400).send('Incomplete data');
    const user = new User({
        name: req.body.titulo,
        email: req.body.quantity,
        password: req.body.dateIni,
        roleId: req.body.roleId,
        dbStatus: true,
    
    });
    const result = await user.save();
    if(!result) return res.status(400).send('Failed at create user');
    res.status(200).send({message: 'User created', data: course});
 };
const list = async (req, res) => { 
    let users = await User.find({ name: new RegExp(req.params["name"], "i") })
    .populate("roleId")
    .exec();
  if (!users || users.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ users });
};

module.exports = { register, list };