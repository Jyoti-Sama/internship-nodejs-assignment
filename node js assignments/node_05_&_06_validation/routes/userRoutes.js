import express from 'express';
import { getHomePage, } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getHomePage);


export default router;