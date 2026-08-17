
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/") {

        fs.readFile("./pages/home.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.statusCode = 200
            res.end(data)
        })

    }
    else if (req.url == "/about") {

        fs.readFile("./pages/about.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.statusCode = 200
            res.end(data)
        })

    }
    else if (req.url == "/contact") {
        fs.readFile("./pages/contact.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.statusCode = 200
            res.end(data)
        })
    }
    else {
        res.statusCode = 404
        res.end("page not found")
    }
})


server.listen(3000, () => console.log("server is running http://localhost:3000"))