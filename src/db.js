const mongoose = require('mongoose')

module.exports = {

	connectToMongoDb: (mongoConfig) => {
		return new Promise((resolve, reject) => {
			mongoose.Promise = global.Promise
			mongoose.connect(mongoConfig.host, err => {
				if (err) {
					console.error(`db.js: Failed to connect to MongoDB at ${mongoConfig.host}`, err)
					reject(err)
				} else {
					console.log(`db.js: Successfully connected to MongoDB at ${mongoConfig.host}`)
					resolve(mongoose)
				}
			})
		})
	},

}
