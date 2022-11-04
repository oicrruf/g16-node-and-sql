const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const product_types = await prisma.product_type.findMany(); // SELECT
  res.send({ data: product_types });
});

router.get("/:id", async (req, res, next) => {
  const producType = await prisma.product_type.findUnique({
      where: {
          id: parseInt(req.params.id),
      },
  })
  res.send({ data: producType})
});

router.post("/", async (req, res, next) => {
  const newProduct_type = await prisma.product_type.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newProduct_type);
});

router.patch("/:id", async (req, res, next) => {
  const updateProductType = await prisma.product_type.update({
      where: {
          id: parseInt(req.params.id),
      },
      data: req.body,
    });

  res.status(200).json(updateProductType)
});

router.delete("/:id", async (req, res, next) => {
  const deleteProductType = await prisma.product_type.delete({
      where: {
          id: parseInt(req.params.id),
      },
    });

  res.status(200).json(deleteProductType)
});

module.exports = router;