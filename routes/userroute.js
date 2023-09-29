import express from 'express';
import { createUser } from '../controllers/userController.js';
const router = express.Router();


router.post('/signin',createUser);

export default router;