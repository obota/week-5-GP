const express = require('express');
const studentModel = require('./../models/students');

const router = express.Router();


router.post('/', async function (req, res) {
    const data = new studentModel({
        studentID: req.body.studentID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        course: req.body.course,
        contact: req.body.contact,
    });
    try {
        const newStudent = await data.save();
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/', async function (req, res) {
    try {
        const data = await studentModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.patch('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const data = req.body;

        const updatedData = await studentModel.findByIdAndUpdate(id, data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const deletedData = await studentModel.findByIdAndDelete(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;