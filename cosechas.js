const express = require('express')
const router = express.Router()
const cosechaServices = require('../../services/cosechasServices')

router.post('/fincas/:id/cosechas', async (req, res, next) => {
    try {
        const cosecha = await cosechaServices.create({ idFinca: req.params.id, cosecha: req.body })
        res.status(200).json(cosecha)
    } catch (err) {
        next(err)
    }
})


module.exports = router