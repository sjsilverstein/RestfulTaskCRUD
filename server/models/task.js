const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
        title: {type: String, required: [true, "Task Title is required"]},
        description: {type: String, default:""},
        completed: {type: Boolean, default: false}
        }, {timestamps: true, strict: false});

module.exports = mongoose.model('Tasks', TaskSchema);