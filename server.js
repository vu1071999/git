 const express = require("express");
        const app = express();
        const mongoose = require("mongoose");
        const bodyParser = require("body-parser");


        app.use(bodyParser.urlencoded({ extended: true }));

        mongoose.connect("mongodb+srv://vu123:123123v@cluster0.guxr5ez.mongodb.net/Vu2");

        const userSchema = {
            username: String,
            password: String
        }
        const User = mongoose.model("User", userSchema);

        app.get("/", function (req, res) {
            res.sendFile(__dirname + "/index.html")
        })
        app.post("/", function (req, res) {
            let newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            newUser.save();
            res.redirect('/');
        })
        app.listen(3000, function () {
            console.log("server is running on 3000");
        })

        