import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.get('/api/users', UserController.getAllUsers);
router.post('/api/register', UserController.createUser);
router.post('/api/login', UserController.loginUser)

export default router;