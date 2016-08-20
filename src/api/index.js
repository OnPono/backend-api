const express = require('express')
const users = require('./users')

const router = express.Router()

router.use('/users', users)
router.get('/', (req, res) => {
	res.send('API is up')
})

module.exports = router
