const mongoose = require('mongoose');
const uuid = require('node-uuid');

const TaskSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        default: uuid.v4
    },
    description: {
        type: String,
        required: true
    },
    owner : {
        type: String,
        required: true,
    },
    dueDate : {
        type: Date
    }

})

module.exports = mongoose.model('Task', TaskSchema);