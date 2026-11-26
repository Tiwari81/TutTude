require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("To-Do List API is running");
});

// Register task routes
app.use("/api/tasks", taskRoutes);

// Handle requests that do not match any route
app.use((req, res) => {
    res.status(404).json({
        message: `Cannot ${req.method} ${req.originalUrl}`
    });
});

// Error-handling middleware must be after routes
app.use(errorHandler);

// Start the server
const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
