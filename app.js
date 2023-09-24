// 1) file structure
// 2) coba terrapin middleware
// 3) kita nerapin morgan
// 4) validasi yg sama spt live coding
// 5) response api nya json data specification

// THIRD PARTY MODULE
const express = require("express");
const morgan = require("morgan");

// LOCAL MODULE
const tourRouter = require(`${__dirname}/routes/tourRoutes`);
const userRouter = require(`${__dirname}/routes/userRoutes`);

const app = express();

// middleware dari express
// memodifikasi incoming request/request body ke api kita
app.use(express.json());
app.use(morgan("dev"));

// our own middleware
app.use((req, res, next) => {
    console.log("helo fsw 2");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// middleware auth
// app.use((req, res, next) => {
//     if (req.body.role !== "admin")
//         return res.status(400).json({
//             message: "tidak diizinkan!",
//     });
//     next()
// });

// ROUTING

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
