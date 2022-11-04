const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const products = await prisma.product.findMany(); // SELECT
  res.send({ data: products });
});

router.get("/:id", async (req, res, next) => {
  const product = await prisma.product.findUnique({
      where: {
          id: parseInt(req.params.id),
      },
  })
  res.send({ data: product})
});

router.post("/", async (req, res, next) => {
  const newProduct = await prisma.product.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newProduct);
});

router.patch("/:id", async (req, res, next) => {
  const updateProduct = await prisma.product.update({
      where: {
          id: parseInt(req.params.id),
      },
      data: req.body,
    });

  res.status(200).json(updateProduct)
});

router.delete("/:id", async (req, res, next) => {
  const deleteProduct = await prisma.product.delete({
      where: {
          id: parseInt(req.params.id),
      },
    });

  res.status(200).json(deleteProduct)
});

module.exports = router;