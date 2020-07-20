const express = require('express')
const router = express.Router()
const lotesServices = require('../../services/lotesServices')

router.post('/fincas/:id/lotes', async (req, res, next) => {
    try {
        const lote = await lotesServices.create({ idFinca: req.params.id, lote: req.body })
        res.status(200).json(lote)
    } catch (err) {
        next(err)
    }
})


module.exports = router