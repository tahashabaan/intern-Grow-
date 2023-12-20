const path = require("path");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDb = require("./util/database");

const postRoutes = require("./routes/postRoute");
const authRoutes = require("./routes/authRoute");
const commentRoutes = require('./routes/commentRoute');
const categoryRoutes = require('./routes/categoryRoute');

dotenv.config({path:'./config.env'});

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(authRoutes);
app.use(postRoutes);
app.use(commentRoutes);
app.use(categoryRoutes);



app.use((err,req, res, next ) => {
res.status(404).json({
  
})
});

connectDb()
  .then((res) => {
    const server = app.listen(3000, "127.0.0.1", (port) =>
      console.log("connected database" + 4000)
    );

    const io = require("socket.io")(server);

    //  io.on('connection', (socket) =>{
    //     console.log('user is connect..');
    //     socket.on('message', (msg) => {
    //         console.log('user send message')
    //     })

    //     socket.on('disconnect', () => {
    //      console.log('user disconnected');
    //     })

    //  }) // io connect
  })
  .catch((err) => console.log(err));
