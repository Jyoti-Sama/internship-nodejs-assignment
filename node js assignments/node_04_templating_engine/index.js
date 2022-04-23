import path from 'path';
import express from 'express';

import router from './routes/routes.js';

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public'))); //static files
app.set("view engine", "ejs"); //ejs 
app.use(router) // routes
app.use((req, res) => res.render("404.ejs")) //404 page

app.listen(3000, () => console.log("listening on port 3000....."))