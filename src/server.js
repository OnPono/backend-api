const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')

const db = require('./db')
const api = require('./api')

const app = express()
app.use(cors({
	origin: true,
	credentials: true,
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

db.connectToMongoDb(config.db.mongo)
.then(startServer)
.catch(err => console.error(err))


module.exports = app

// helpers
function startServer() {
	app.listen('1337', () => { console.log('Backend API is running on port 1337') })
}
