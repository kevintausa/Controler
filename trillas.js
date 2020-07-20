const express = require('express')
const router = express.Router()
const trillasServices = require('../../services/trillasServices')

router.post('/fincas/:id/trillas', async (req, res, next) => {
    try {
        const trilla = await trillasServices.create({ idFinca: req.params.id, trilla: req.body })
        res.status(200).json(trilla)
    } catch (err) {
        next(err)
    }
})


module.exports = router