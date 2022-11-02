const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const exclusivities = await prisma.exclusivity.findMany(); // SELECT
  res.send({ data: exclusivities });
});

router.get("/:id", async (req, res, next) => {
  const exclusivity = await prisma.exclusivity.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  }); // SELECT
  res.send({ data: exclusivity });
});

router.post("/", async (req, res, next) => {
  const newExclusivity = await prisma.exclusivity.create({ 
    // INSERT
    data: req.body,
  });

  res.status(201).json(newExclusivity);
});

router.patch("/:id", async (req, res, next) => {
  const updateExclusivity = await prisma.exclusivity.update({
    // UPDATE
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });

  res.status(200).json(updateExclusivity);
});

router.delete("/:id", async (req, res, next) => {
  const deleteExclusivity = await prisma.exclusivity.delete({
    // DELETE
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json(deleteExclusivity);
});

module.exports = router;