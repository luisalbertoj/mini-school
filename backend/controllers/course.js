const Course = require("../models/course");

const register = async (req, res) => {
    let validId = mongoose.Types.ObjectId.isValid(req.body.matterId);
    if (!validId) return res.status(400).send("Invalid matter");
    if (!req.body.titulo || !req.body.quantity || !req.body.dateIni ||
        !req.body.dateFin || !req.body.matterId)
        return res.status(400).send('Incomplete data');
    const course = new Course({
        titulo: req.body.titulo,
        quantity: req.body.quantity,
        dateIni: req.body.dateIni,
        dateFin: req.body.dateFin,
        matterId: req.body.matterId
    });
    const result = await course.save();
    if(!result) return res.status(400).send('Failed at create course');
    res.status(200).send({message: 'Course created', data: course});
};

const list = async (req, res) => {};

module.exports = {register, list};