const taskService = require("../services/taskService");

// Get all tasks
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks();

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

// Get one task
exports.getTask = async (req, res, next) => {
    try {
        const task = await taskService.getTaskById(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

// Create a task
exports.createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);

        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

// Update a task
exports.updateTask = async (req, res, next) => {
    try {
        const task = await taskService.updateTask(
            req.params.id,
            req.body
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

// Delete a task
exports.deleteTask = async (req, res, next) => {
    try {
        const task = await taskService.deleteTask(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};
