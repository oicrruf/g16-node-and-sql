var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const package = require("./package.json");
const {timeStamp} = require('./src/middleware')

require("dotenv").config();

// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

var indexRouter = require("./routes/index");

var categoryRouter = require("./routes/categories");

var productRouter = require("./routes/products");
var product_typeRouter = require("./routes/product_types");

var exclusivityRouter = require("./routes/exclusivities");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/", indexRouter);

app.use("/api/v1/category", categoryRouter);

app.use("/api/v1/product", productRouter);
app.use("/api/v1/product_type", product_typeRouter);

app.use("/api/v1/exclusivity", exclusivityRouter);

app.use("/health", timeStamp,(req, res, next) => {
  let healthInfo = {
    status: "OK",
    name: package.name,
    version: package.version,
  };

  if (req.query.environment === "true") {
    healthInfo = { ...healthInfo, environment: process.env.ENVIRONMENT };
  }

  res.send(healthInfo);
});

app.use(
  "*",
  timeStamp,
  (req, res, next) => res.status(404).send({ message: "Not found" })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
