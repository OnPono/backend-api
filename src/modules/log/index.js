const winston = require('winston')
const config = require('config')
const fs = require('fs')

const transports = []

if (config.logging.winston.file) {
	try {
		fs.accessSync(`${config.logging.winston.file.dirname}`)
	} catch (e) {
		fs.mkdirSync(config.logging.winston.file.dirname)
	}
	transports.push(new winston.transports.File(config.logging.winston.file))
}
if (config.logging.winston.console) {
	transports.push(new winston.transports.Console(config.logging.winston.console))
}

module.exports = new winston.Logger({ transports })
