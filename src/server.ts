import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});