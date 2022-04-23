import cors from 'cors';
import express from "express";
import router from './routes/post.js';
import dbConnect from './utils/db/db.js';
import bodyParser from 'body-parser'

dbConnect();
const PORT = process.env.PORT || 5000; 
const app = express();


// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());
app.use(router);



app.listen(PORT, () => console.log(`server is running on port ${PORT}...`))