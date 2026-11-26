const Task = require("../models/Task");

// Get all tasks
exports.getAllTasks = async () => {
    return await Task.find();
};

// Get one task
exports.getTaskById = async (id) => {
    return await Task.findById(id);
};

// Create a task
exports.createTask = async (data) => {
    return await Task.create(data);
};

// Update a task
exports.updateTask = async (id, data) => {
    return await Task.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );
};

// Delete a task
exports.deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};
