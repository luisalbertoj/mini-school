const Matter = require("../models/matter");

const register = async (req, res) => {
    let validId = mongoose.Types.ObjectId.isValid(req.body.teacherId);
    if (!validId) return res.status(400).send("Invalid teacher");
    if (!req.body.titulo || !req.body.contenido || !req.body.school)
        return res.status(400).send('Incomplete data');
    const matter = new Matter({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        school: req.body.school,
        teacherId: req.body.teacherId
    });
    const result = await matter.save();
    if (!result) return res.status(400).send('Failed at create matter');
    res.status(200).send({ message: 'Matter created', data: matter });
};

const list = async (req, res) => {
    const matters = await Matter.find().populate('teacherId');
    if(matters.length) return res.status(400).send('Matters not found');
    return res.status(200).send(matters);
};

module.exports = { register, list };