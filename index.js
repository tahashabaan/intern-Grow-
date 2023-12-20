import path from "path";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectSql } from "./util/database.js";
import authRoute from "./controller/authController.js";
import postRoute from "./controller/postController.js";
import userRoute from "./controller/userController.js";
// import categoryRoute from "./routes/categoryRoute.js";
// import commentRoute from "./routes/commentRoute.js";
// import intial_routes from "./routes/index.js";
// import sql from "mssql";
// import {routes} from './routes/';

dotenv.config({ path: "./config.env" });

const app = express();
app.set("view engine", "ejs");

// read static file
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.static(path.join(process.cwd(), "uploads")));

// read body handle it json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors
app.use(cors());

// intial_routes(app);
app.use("/v2", authRoute);
app.use("/v2", postRoute);
app.use("/v2", userRoute);

// app.use(commentRoute);
// app.use(categoryRoute);

// hnadle global middleware error
app.use((err, req, res, next) => {
  res.status(404).json({
    statusCode: err.statusCode ? err.statusCode : 500,
    message: err.message ? err.message : " ",
  });
});

// connectSql().then((res) => {
//   sql.query('select * from Blog', (err, result) => {
//   if (err) console.log(err);
//   console.log(result.recordset);
//   // res.send(result);
// })
// });

connectSql()
  .then((res) => {
    // import io from "socket.io";
    const port = process.env.PORT || 7000;
    const server = app.listen(port, "127.0.0.1", (p) =>
      console.log("connected on database && listen on port:::" + port)
    );

    // io.on("connection", (socket) => {
    //   console.log("user is connect..");
    //   socket.on("message", (msg) => {
    //     console.log("user send message");
    //   });

    //   socket.on("disconnect", () => {
    //     console.log("user disconnected");
    //   });
    // }); // io connect
  })
  .catch((err) => console.log(err));
