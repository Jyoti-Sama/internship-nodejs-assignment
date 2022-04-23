import { validationResult } from 'express-validator'
import UserModel from '../models/userModel.js';

//get

export const getLoginPage = (req, res) => {
    req.session.isLoggedIn = false;
    res.render("login.ejs", {
        pageUrl: "/login",
        pageTitle: "Login",
        errorMessage: "",
        isAuthenticated: req.session.isLoggedIn
    })
}

export const getRegisterPage = (req, res) => {
    req.session.isLoggedIn = false;
    res.render("register.ejs",
        {
            pageUrl: "/register",
            pageTitle: "Register",
            errorMessage: "",
            isAuthenticated: req.session.isLoggedIn
        })
}

export const logoutAdmin = (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect("/login");
}

//post
export const loginFunction = async (req, res) => {
    req.session.isLoggedIn = false;
    const { email, password } = req.body;
    // response on wrong email validation
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        console.log("inside", errors)
        return res.status(422).render("login.ejs",
            {
                pageUrl: "/login",
                pageTitle: "Login",
                errorMessage: errors[0].msg,
                isAuthenticated: req.session.isLoggedIn
            })
    }

    // cheeking is user exist or not
    const isUserValid = await UserModel.find({ email });

    if (!isUserValid[0]) {
        return res.status(422).render("login.ejs",
            {
                pageUrl: "/login",
                pageTitle: "login",
                errorMessage: "user dose not exist. please register!",
                isAuthenticated: req.session.isLoggedIn
            })
    }

    // TODO write right status code for wrong password

    // response login on password length
    if (!(password.length > 4)) {
        return res.status(422).render("login.ejs",
            {
                pageUrl: "/login",
                pageTitle: "Login",
                errorMessage: "password must be atleast 5 character long!",
                isAuthenticated: req.session.isLoggedIn
            })
    }

    //response logic on password match
    if (!(password === isUserValid[0].password)) {
        return res.status(422).render("login.ejs",
            {
                pageUrl: "/login",
                pageTitle: "Login",
                errorMessage: "wrong password!",
                isAuthenticated: req.session.isLoggedIn
            })
    }

    console.log(req.body)
    req.session.isLoggedIn = true;
    return res.redirect("/admin")
}

export const registerFunction = async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // email validation check
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(422).render("register.ejs",
            {
                pageUrl: "/register",
                pageTitle: "Register",
                errorMessage: errors[0].msg,
                isAuthenticated: req.session.isLoggedIn
            })
    }

    // cheeking is user exist or not
    const isUserValid = await UserModel.find({ email });

    if (isUserValid[0]) {
        return res.status(422).render("register.ejs",
            {
                pageUrl: "/register",
                pageTitle: "Register",
                errorMessage: "user already exist. please login!",
                isAuthenticated: req.session.isLoggedIn
            })
    }

    // TODO write right status code for wrong password
    // response login on password length
    if (!(password.length > 4)) {
        return res.status(422).render("register.ejs",
            {
                pageUrl: "/register",
                pageTitle: "Register",
                errorMessage: "password must be atleast 5 character long!",
                isAuthenticated: req.session.isLoggedIn
            })
    }

    if (!(password === confirmPassword)) {
        return res.status(422).render("register.ejs",
            {
                pageUrl: "/register",
                pageTitle: "Register",
                errorMessage: "password and confirm password should be same!",
                isAuthenticated: req.session.isLoggedIn
            })
    }


    // creating user model and saving it to database
    const newUser = new UserModel({ email, password })
    console.log(newUser);

    try {
        await newUser.save();
        req.session.isLoggedIn = true;
        return res.redirect("/admin")

    } catch (error) {
        console.log(error)
        return res.status(500).render("register.ejs",
            {
                pageUrl: "/register",
                pageTitle: "Register",
                errorMessage: "faild to register user. server error!",
                isAuthenticated: req.session.isLoggedIn
            })
    }
}