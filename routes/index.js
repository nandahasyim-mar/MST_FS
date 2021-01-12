const router = require('express').Router()
const routerKodePos = require('./routerKodePosIndonesia')
const userController = require('../controllers/userController')

// User
router.post('/login', userController.login)
router.post('/register', userController.register)

// Kode Pos
router.use('/kode-pos', routerKodePos)

module.exports = router