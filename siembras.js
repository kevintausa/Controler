const express = require('express')
const router = express.Router()
const siembrasServices = require('../../services/siembrasServices')


router.post('/fincas/:id/siembras', async (req, res, next) => {
    try {
        const siembra = await siembrasServices.create({ idFinca: req.params.id, siembra: req.body })
        res.status(200).json(siembra)
    } catch (err) {
        next(err)
    }
})


module.exports = router