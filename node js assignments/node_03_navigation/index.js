import path from 'path';
const __dirname = path.resolve(); 
// console.log(__dirname)

import express from 'express';
import router from './routes/routes.js';


const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

app.listen(3000, () => console.log("listening on port 3000......"))