var express = require("express");
var app = express();

app.get("/:num", (req, res, next) => {
    res.json( {
        sum: Number(req.params.num) + 10 }
    );
});
app.listen(3000, () => {
    console.log("Running on plexpi.net:4000");
});