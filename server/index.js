const port = process.env.PORT || 9000;

const path = require("path");
const express = require("express");

const morgan = require("morgan");
const serveStatic = require("serve-static");
const proxy = require('http-proxy-middleware');

const app = express();
app.use(morgan("tiny"));
app.use(serveStatic(path.join(__dirname, "public")));

const apiProxy = proxy('/api', {
    target: process.env.JALGOARENA_API_HTTP_URL || "http://localhost:5001",
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
});
app.use('/api', apiProxy);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public"), "index.html");
});

app.listen(port, function () {
    console.log("Admin panel started at http://localhost:" + port);
});

