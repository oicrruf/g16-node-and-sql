const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {timeStamp, userIsValid} = require('../middleware')

router.get("/", timeStamp, userIsValid, async (req, res, next) => {
  const products = await prisma.product.findMany(); // SELECT
  res.send({ data: products });
});

router.post("/", async (req, res, next) => {
  const newProduct = await prisma.product.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newProduct);
});

module.exports = router;