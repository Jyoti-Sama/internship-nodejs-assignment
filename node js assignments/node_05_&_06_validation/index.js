import path from 'path';
import express from 'express';
import session from 'express-session';
import mongoDBStore from 'connect-mongodb-session';

import { dbConnect } from './utils/db/db.js';

import router from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import adminRouter from  './routes/adminRoutes.js';

dbConnect();
const app = express();
const __dirname = path.resolve();
const MongoDBStore = mongoDBStore(session);
const MONGODB_URI = "mongodb+srv://internship_guy:internship_pass@cluster0.cxfiw.mongodb.net/internship?retryWrites=true&w=majority";

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );

app.use(router);
app.use(authRouter);
app.use(adminRouter);

app.listen(4000, () => console.log("listening on port 3000......"))