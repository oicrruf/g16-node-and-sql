const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/", async (req, res, next) => {
    const licenses = await prisma.license.findMany() // SELECT (MYQSL)
    res.send({ data: licenses})
});

router.get("/:id", async (req, res, next) => {
    const license = await prisma.license.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    })
    res.send({ data: license})
});

router.post("/", async (req, res, next) => {
    const newLicense = await prisma.license.create({ // INSERT
        data: req.body
      })

    res.status(201).json(newLicense)
    
});

router.patch("/:id", async (req, res, next) => {
    const updateLicense = await prisma.license.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
      });

    res.status(200).json(updateLicense)
});

router.delete("/:id", async (req, res, next) => {
    const deleteLicense = await prisma.license.delete({
        where: {
            id: parseInt(req.params.id),
        },
      });

    res.status(200).json(deleteLicense)
});

module.exports = router;