import express from 'express';
import { register, login, logout } from '../controllers/auth.js';

export const router = express.Router();

router.get('/login', login);
router.post('/register', register);
router.post('/logout', logout);
