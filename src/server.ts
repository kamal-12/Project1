import http from 'http';
import express from "express"

const app = express();
const server = http.createServer(app);

app.get("/", (request, response, next) => {

    console.log(request.headers)
    console.log(request.body)
    response.setHeader("nice", "one")
    response.json({
        message: "hello world"
    })
    console.log("catch get route")
})


server.listen(5058, () => {
    console.log('Server running at http://localhost:5058/');
})

