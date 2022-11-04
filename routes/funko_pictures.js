const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/", async (req, res, next) => {
    const funkoPictures = await prisma.funko_picture.findMany() // SELECT (MYQSL)
    res.send({ data: funkoPictures})
});

router.get("/:id", async (req, res, next) => {
    const funkoPicture = await prisma.funko_picture.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    })
    res.send({ data: funkoPicture})
});

router.post("/", async (req, res, next) => {
    const newFunkoPicture = await prisma.funko_picture.create({ // INSERT
        data: req.body
      })

    res.status(201).json(newFunkoPicture)
    
});

router.patch("/:id", async (req, res, next) => {
    const updateFunkoPicture = await prisma.funko_picture.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
      });

    res.status(200).json(updateFunkoPicture)
});

router.delete("/:id", async (req, res, next) => {
    const deleteFunkoPicture = await prisma.funko_picture.delete({
        where: {
            id: parseInt(req.params.id),
        },
      });

    res.status(200).json(deleteFunkoPicture)
});

module.exports = router;