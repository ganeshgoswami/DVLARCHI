const mongoose = require('mongoose');
const uri = "mongodb+srv://funbeautyfeet:Lokeshprajapat@cluster0.bxmbsif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Import packages
const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
const path = require("path");



// Connect to MongoDB with Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB via Mongoose"))
.catch((err) => console.error("❌ MongoDB connection error:", err));



// Import API routes
const ApiRouter = require("./Routers/router");
const multer = require('multer');

// CORS configuration
// const corsOptions = {
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
// };
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount API router
app.use("/", ApiRouter);
app.use("/images/uploads", express.static(path.join(__dirname, "images/uploads")));
app.use("/images", express.static(path.join(__dirname, "images")));



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
