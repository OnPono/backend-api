const mongoose = require('mongoose')
const serviceUtils = require('node-service-utils')

function userModel(db) {
	const schema = {
			firstName: { type: String, required: true },
			lastName: { type: String, required: true },
			password: { type: String, required: true },
	}

	const modelFactory = new serviceUtils.ModelFactory(db)
	const model = modelFactory.create('User', schema)

	return model
}

class UserService extends serviceUtils.BaseService {
	// ... custom CRUD methods
}


module.exports = new UserService(userModel(mongoose))
