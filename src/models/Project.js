const mongoose = require('mongoose');
const Task = require('./Task').schema;

const ProjectSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    tasks : [{ 
        type: Task, 
        unique: true
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('Project',ProjectSchema);