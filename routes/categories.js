const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const categories = await prisma.category.findMany(); // SELECT
  res.send({ data: categories });
});

router.get("/:id", async (req, res, next) => {
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  }); // SELECT
  res.send({ data: category });
});

router.post("/", async (req, res, next) => {
  const newCategory = await prisma.category.create({
    // INSERT
    data: req.body,
  });

  res.status(201).json(newCategory);
});

router.patch("/:id", async (req, res, next) => {
  const updateCategory = await prisma.category.update({
    // UPDATE
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });

  res.status(200).json(updateCategory);
});

router.delete("/:id", async (req, res, next) => {
  const deleteCategory = await prisma.category.delete({
    // DELETE
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json(deleteCategory);
});

module.exports = router;
