// "npm run dev" in order to run the backend

// import express
const express = require("express");
const app = express();
// import cors
const cors = require("cors");
// import mongoose
const mongoose = require("mongoose");
// import the model
const model = require("./user.model");
// import bcrypt
const bcrypt = require("bcrypt");
// import jwt
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// /usercollection specifies in which collection we will store our users in mongoDB
mongoose.connect("mongodb://localhost:27017/usercollection");

app.post("/api/register", async (req, res) => {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const user = await model.create({
        name: req.body.name,
        password: newPassword,
        });
        res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "error" });
    }
});


app.post("/api/login", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    let isPasswordValid = false
    // find the user with the above name and password
    const user = await model.findOne({ name: name });
    
    // this if exists in case the value of the user variable is null
    if (user) {
        isPasswordValid = await bcrypt.compare(password, user.password);
    } else {
        console.log("No user found");
    }
    
    if (isPasswordValid) {
        // if the password is valid we want to generate a token for our user
        const token = await jwt.sign(
        { name: user.name },
        "secret123"
        );
        // send the token to the frontend
        res.json({ status: "ok", token: token });
    } else {
        res.json({ status: "Wrong Name or Password" });
    }
});

// app.post("/api/dashboard", async (req, res) => {
//   const token = req.headers["x-access-token"];
//   const goal = req.body.tempGoal;

//   const isTokenValid = await jwt.verify(token, "secret123");
//   const email = isTokenValid.email;

//   if (isTokenValid) {
//     await model.updateOne({ email: email }, { $set: { goal: goal } });

//     res.json({ status: "ok" });
//   } else {
//     res.json({ status: "Invalid Token" });
//   }
// });

// app.get("/api/dashboard", async (req, res) => {
//   const token = req.headers["x-access-token"];
//   const isValidToken = await jwt.verify(token, "secret123");

//   if (isValidToken) {
//     const email = isValidToken.email;
//     const user = await model.findOne({ email: email });
//     res.json({ status: "ok", goal: user.goal });
//   } else {
//     res.json("Invalid Token");
//   }
// });

// to start our server
app.listen("1337", () => console.log("Server started on port 1337"));

















