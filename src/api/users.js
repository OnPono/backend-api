const express = require('express')
const log = require('../modules/log')
const userService = require('../modules/users')


module.exports = express.Router()
	.post('/', create)

function create(req, res, next) {
	userService.create(req.body)
	.then(user => {
		res.set('Location', `users/${user.id}`)
		res.status(201).send(user)
		next()
	})
	.catch(err => {
		log.error(err)
		res.boom.badRequest(err.message)
		next(err)
	})
}
