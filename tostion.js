const express = require('express')
const router = express.Router()
const tostionServices = require('../../services/tostionServices')

router.post('/fincas/:id/tostiones', async (req, res, next) => {
    try {
        const tostion = await tostionServices.create({ idFinca: req.params.id, tostion: req.body })
        res.status(200).json(tostion)
    } catch (err) {
        next(err)
    }
})



router.get('/tostiones/:id', async (req, res, next) => {
    try {
        const tostion = await tostionServices.search({ id: req.params.id })
        res.status(200).json(tostion)
    } catch (err) {
        next(err)
    }
})


module.exports = router