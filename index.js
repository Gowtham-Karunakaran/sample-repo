const express = require("express");
const app = express();
require("dotenv").config();
console.log(process.env.PORT||5000)
const port = process.env.PORT ||5000;
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const apiRouter = require("./routes/api");
app.use("/api1",jsonParser, apiRouter);
app.listen(port, () => {
  console.log("Now listening on port", port);
});
