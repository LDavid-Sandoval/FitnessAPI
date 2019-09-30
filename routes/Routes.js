const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

router.get('/', async (req, res) => {
    const Excercises = await Exercise.find();
    console.log(Excercises);
    res.json(Excercises);
});
router.get('/:id', async (req, res) => {
    exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
});

router.post('/', async (req, res) => {
    const { title, description, img, leftColor, rightColor } = req.body;
    const exercise = new Exercise( {title, description, img, leftColor, rightColor });
    await exercise.save();
    res.json({ status: 'Ejercicio Guardado'});
})

router.put('/:id', async (req,res) => { 
    const { title, description, img, leftColor, rightColor } = req.body;
    const newExercise = { title, description, img, leftColor, rightColor };
    await Exercise.findByIdAndUpdate(req.params.id, newExercise);
    res.json({ status: 'Ejercicio actualizado'});
})

router.delete('/:id', async (req,res) => { 
    await Exercise.findByIdAndRemove(req.params.id);
    res.json({ status: 'Ejercicio Eliminado'});
})

module.exports = router;
