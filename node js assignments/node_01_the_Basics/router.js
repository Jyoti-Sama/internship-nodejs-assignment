import fs from "fs";

export const requestHandler = (req, res) => {

    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");

        res.write('<html>');
        res.write('<head><title>home page</title></head>');
        res.write('<body>');

        res.write('<h2>Welcome to the Home Page</h2>');
        res.write('<div>Add a new user</div>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" placeholder="user name"></input><button type="submit">submit</button></form>');

        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (req.url === "/user") {
        res.setHeader("Content-Type", "text/html");

        res.write('<html>');
        res.write('<head><title>user page</title></head>');
        res.write('<body>');

        res.write('<ul>')

        res.write('<li>Iron man</li>')
        res.write('<li>Thor</li>')
        res.write('<li>Hulk</li>')
        res.write('<li>Captain America</li>')

        res.write('</ul>')

        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url === "/create-user" && req.method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();

            const username = parseBody.split("=")[1];
            console.log(username)

            // saving user name to user.txt 
            fs.writeFileSync("user.txt", username); 

            //re-direct to '/' page
            res.statusCode = 302;
            res.setHeader('Location', '/')

            return res.end();
        })

    }


    res.setHeader("Content-Type", "text/html");
    res.write('<html>')
    res.write('<head>404</head>')
    res.write('<body> page not available </body>')
    res.write('</html>')
    res.end();
}
