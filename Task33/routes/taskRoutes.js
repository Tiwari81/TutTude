const express = require("express");

const router = express.Router();

const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const validateTask = require("../middleware/taskValidation");

// GET: Get all tasks
router.get("/", getTasks);

// GET: Get one task by ID
router.get("/:id", getTask);

// POST: Create a task
router.post("/", createTask);
// PUT: Update a task
router.put("/:id", validateTask, updateTask);

// DELETE: Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
