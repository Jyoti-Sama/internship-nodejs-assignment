

export const getAdmin = (req,res) => {
    res.render("admin.ejs", {
        pageUrl: "/admin",
        pageTitle: "Admin",
        isAuthenticated: req.session.isLoggedIn
    })
}


