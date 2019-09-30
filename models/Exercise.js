const mongoose = require('mongoose')
const { Schema } = mongoose;

const Exercises = new Schema({
    title: {type: String, required:true}, 
    description: {type: String, required:true}, 
    img: {type: String, required:true}, 
    leftColor:{type: String, required:true}, 
    rightColor: {type: String, required:true}
});

module.exports = mongoose.model('Exercise', Exercises);