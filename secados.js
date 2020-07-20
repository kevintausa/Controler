const express = require('express')
const router = express.Router()
const secadoServices = require('../../services/secadoServices')

router.post('/fincas/:id/secados', async (req, res, next) => {
    try {
        const secado = await secadoServices.create({ idFinca: req.params.id, secado: req.body })
        res.status(200).json(secado)
    } catch (err) {
        next(err)
    }
})


module.exports = router