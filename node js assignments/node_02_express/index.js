import express from 'express';

const app = express();

// * assignment 2.1 : request through two middleware 

// app.use((req ,res, next)=> {
//     console.log('first middleware');
//     next();
// })

// app.use((req ,res, next)=> {
//     console.log('second middleware');
//     res.send('<h3>second middleware</h3>')
// })

// * assignment 2.2 : handel request to '/' and '/user' routes

app.use('/user', (req, res, next) => {
    console.log("hits /user middleware")
    res.send('<h2>content serving by "/user" middleware</h2>')
})

app.use('/', (req, res, next) => {
    console.log("hits / middleware")
    res.send('<h2>content serving by "/" middleware</h2>')
})


app.listen(3000, ()=> console.log("listening...."));