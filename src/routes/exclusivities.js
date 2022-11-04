const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  const exclusivities = await prisma.exclusivity.findMany(); // SELECT
  res.send({ data: exclusivities });
});

router.post("/", async (req, res, next) => {
  const newExclusivity = await prisma.exclusivity.create({ // INSERT
    data: req.body,
  });

  res.status(201).json(newExclusivity);
});

module.exports = router;