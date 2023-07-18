const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const todoRouter = require("./routes/todo");
const { catchErrors } = require("./controller/errorHandel");
const { notFoundPage } = require("./routes/notFound");

const app = express();

app.use(cors());

//mongodb://127.0.0.1:27017/todo-App
mongoose
  .connect(
    "mongodb+srv://aliho3einde:n8f5Wn8yTMJHoSC3@cluster-02.s7fdfbt.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/todo", todoRouter);
app.use("/users", usersRouter);
app.use("*", notFoundPage);

app.use(catchErrors);

module.exports = app;
