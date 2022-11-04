const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/", async (req, res, next) => {
    const funkos = await prisma.funko.findMany() // SELECT (MYQSL)
    res.send({ data: funkos})
});

router.get("/:id", async (req, res, next) => {
    const funko = await prisma.funko.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    })
    res.send({ data: funko})
});

router.post("/", async (req, res, next) => {
    const newFunko = await prisma.funko.create({ // INSERT
        data: req.body
      })

    res.status(201).json(newFunko)
    
});

router.patch("/:id", async (req, res, next) => {
    const updateFunko = await prisma.funko.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
      });

    res.status(200).json(updateFunko)
});

router.delete("/:id", async (req, res, next) => {
    const deleteFunko = await prisma.funko.delete({
        where: {
            id: parseInt(req.params.id),
        },
      });

    res.status(200).json(deleteFunko)
});

module.exports = router;