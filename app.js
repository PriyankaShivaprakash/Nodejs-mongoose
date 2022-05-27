const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const Bcrypt = require("bcryptjs");
const user =require("./routes/userRoutes")
const role = require("./routes/roleRoutes")

 

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));

Mongoose.connect("mongodb://localhost:27017/sample");
app.use('/api/users',user)
app.use('/api/roles',role)


app.listen(3000, () => {
    console.log("Listening at :3000...");
});