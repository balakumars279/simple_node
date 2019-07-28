var express = require('express')
const router = express.Router()
const authCheckMiddleware = require('./../middleware/auth')

router.use('/user', require('./user'))

// router.use('/user', authCheckMiddleware, require('./user'))

 
module.exports = router;
