const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const product_types = await prisma.product_type.findMany(); // SELECT
  res.send({ data: product_types });
});

router.post("/", async (req, res, next) => {
  const newProduct_type = await prisma.product_type.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newProduct_type);
});

module.exports = router;