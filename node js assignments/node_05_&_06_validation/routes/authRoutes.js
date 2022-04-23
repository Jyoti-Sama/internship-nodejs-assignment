import express from 'express';

import { check } from 'express-validator';
import { loginFunction, registerFunction, getLoginPage, getRegisterPage, logoutAdmin } from '../controllers/authController.js';



const router = express.Router();

router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/logout', logoutAdmin);

router.post('/login', check('email').isEmail(), loginFunction);
router.post('/register', check('email').isEmail(), registerFunction);

export default router;