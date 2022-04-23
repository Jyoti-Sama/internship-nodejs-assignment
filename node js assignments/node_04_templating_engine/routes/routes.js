import express from 'express';


const router = express.Router();

//user data array
export const userList = [];

// home page route
router.get("/", (req, res) => {
    res.render("index.ejs", { pageUrl: "/", pageTitle: "Home" })
})

//route for saving user name
router.post("/", (req, res) => {
    const { username } = req.body;

    if (username) {
        userList.push(username) // adding name to this array
        return res.redirect('/')
    }
    res.redirect('/')
})


//route for show user names
router.get("/user", (req, res) => {
    res.render("user.ejs", { pageUrl: "/user", pageTitle: "user", userList })
})


export default router;