import express from "express";
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Use POST for signup and login
router.post("/signup", signup);
router.post("/login", login);

// You can use GET or POST for logout depending on your implementation
router.post("/logout", logout);

export default router;
