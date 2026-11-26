const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    // Invalid MongoDB ID
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid task ID"
        });
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: err.message
        });
    }

    // Duplicate key error
    if (err.code === 11000) {
        return res.status(409).json({
            message: "Duplicate value"
        });
    }

    // Other server errors
    res.status(500).json({
        message: "Internal Server Error"
    });
};

module.exports = errorHandler;
