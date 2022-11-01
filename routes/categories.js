const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const categories = await prisma.category.findMany(); // SELECT
  res.send({ data: categories });
});

router.post("/", async (req, res, next) => {
  const newCategory = await prisma.category.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newCategory);
});

module.exports = router;
