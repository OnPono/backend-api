const express = require('express')
const boom = require('express-boom')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')
const logger = require('./modules/logger')

const db = require('./db')
const api = require('./api')

const app = express()
app.use(boom())
app.use(cors({
	origin: true,
	credentials: true,
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

db.connectToMongoDb(config.db.mongo)
.then(startServer)
.catch(err => logger.error(err))


module.exports = app

// helpers
function startServer() {
	app.listen('1337', () => { logger.log('Backend API is running on port 1337') })
}
