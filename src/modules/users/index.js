const mongoose = require('mongoose')
const ModelFactory = require('node-service-utils').ModelFactory
const BaseService = require('node-service-utils').BaseService

function userModel(db) {
	const schema = {
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		password: { type: String, required: true },
	}

	const modelFactory = new ModelFactory(db)
	const model = modelFactory.create('User', schema)

	return model
}

class UserService extends BaseService {
	// ... custom CRUD methods
	create() {
		return true
	}
}


module.exports = new UserService(userModel(mongoose))
