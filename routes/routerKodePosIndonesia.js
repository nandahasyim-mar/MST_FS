const router = require('express').Router()
const kodePostController = require('../controllers/kodePosController')
const authentication = require('../middleware/authentication')

router.get('/', kodePostController.fetchKodePos)
router.post('/', kodePostController.createKodePos)

module.exports = router