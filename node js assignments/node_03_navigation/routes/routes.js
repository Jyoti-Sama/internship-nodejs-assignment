import path from 'path';
const __dirname = path.resolve(); 
// console.log(__dirname) // it will give : ...../node_03_navigation ; not ...../node_03_navigation/routes

import express from 'express';

const router = express.Router();


router.get('/', ( req, res ) => {
    res.sendFile(path.join(__dirname,'views','index.html'))
})

router.get('/user', ( req, res ) => {
    res.sendFile(path.join(__dirname,'views','user.html'))
})


export default router;