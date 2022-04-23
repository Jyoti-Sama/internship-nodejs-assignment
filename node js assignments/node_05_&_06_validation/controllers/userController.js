
export const getHomePage = (req, res) => {
    res.render("index.ejs", {
        pageUrl: "/",
        pageTitle: "Home",
        isAuthenticated: req.session.isLoggedIn
    })
}
