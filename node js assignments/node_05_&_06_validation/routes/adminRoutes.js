import express from 'express';
import { getAdmin } from '../controllers/adminController.js';

const router = express.Router();

const authMiddleWare =(req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn;
    console.log(isLoggedIn);

    if(isLoggedIn){
        next();
    } else {
        res.redirect('/login')
    }
}

router.get("/admin", authMiddleWare,getAdmin); 


export default router; 