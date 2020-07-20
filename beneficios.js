const express = require('express')
const router = express.Router()
const beneficioServices = require('../../services/beneficioServices')


router.post('/fincas/:id/beneficios', async (req, res, next) => {
    try {
        const beneficio = await beneficioServices.create({ idFinca: req.params.id, beneficio: req.body })
        res.status(200).json(beneficio)
    } catch (err) {
        next(err)
    }
})


module.exports = router