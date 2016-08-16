const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')

const api = require('./api')

const app = express()
app.use(cors({
	origin: true,
	credentials: true,
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)

app.listen('1337', () => {
	console.log('Backend API is running on port 1337')
})

module.exports = app
