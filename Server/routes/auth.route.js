import express from 'express';
import { register, login, logout, getCurrentUser } from '../controllers/auth.js';
import { authenticateUser } from '../middleware/user.middleware.js';

export const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/user', authenticateUser ,  getCurrentUser)
