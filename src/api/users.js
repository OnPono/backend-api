const express = require('express')
const userService = require('../modules/users')
const log = require('../modules/log')

let middleware
const router = express.Router()

router
.get('/:id', middleware.findById)
.get('/', middleware.find)
.post('/', middleware.create)
.patch('/:id', middleware.update)
.delete('/:id', middleware.remove)

module.exports = router


middleware = {
	create,
}

function create(req, res) {
	return userService.create(req.body)
	.then(user => {
		res.set('Location', `users/${user.id}`)
		res.status(201).send(user)
	})
	.catch(err => {
		log.error(err)
		if (err.message === 'User validation failed') {
			if (err.errors.email) {
				const msg = err.errors.email
				res.boom.conflict(msg)
			}
			res.boom.badRequest(err.message)
		} else {
			res.boom.badImplementation()
		}
	})
}


module.exports = middleware
