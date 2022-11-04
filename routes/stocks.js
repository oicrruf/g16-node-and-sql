const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/", async (req, res, next) => {
    const stocks = await prisma.stock.findMany() // SELECT (MYQSL)
    res.send({ data: stocks})
});

router.get("/:id", async (req, res, next) => {
    const stock = await prisma.stock.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    })
    res.send({ data: stock})
});

router.post("/", async (req, res, next) => {
    const newStock = await prisma.stock.create({ // INSERT
        data: req.body
      })

    res.status(201).json(newStock)
    
});

router.patch("/:id", async (req, res, next) => {
    const updateStock = await prisma.stock.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
      });

    res.status(200).json(updateStock)
});

router.delete("/:id", async (req, res, next) => {
    const deleteStock = await prisma.stock.delete({
        where: {
            id: parseInt(req.params.id),
        },
      });

    res.status(200).json(deleteStock)
});

module.exports = router;