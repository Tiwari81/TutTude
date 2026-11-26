const validateTask = (req, res, next) => {
    const { title, description, completed } = req.body;

    // Validate title
    if (
        typeof title !== "string" ||
        title.trim() === ""
    ) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    // Validate description
    if (
        description !== undefined &&
        typeof description !== "string"
    ) {
        return res.status(400).json({
            message: "Description must be a string"
        });
    }

    // Validate completed
    if (
        completed !== undefined &&
        typeof completed !== "boolean"
    ) {
        return res.status(400).json({
            message: "Completed must be true or false"
        });
    }

    next();
};

module.exports = validateTask;
