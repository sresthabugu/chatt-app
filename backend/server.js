import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
//import bcrypt from "bcryptjs";

const PORT = process.env.PORT || 5000;


dotenv.config();

// Middleware to parse JSON request bodiesimport express from "express";
//import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();


export default router;
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);




server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
