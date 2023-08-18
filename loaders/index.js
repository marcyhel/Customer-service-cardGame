const expressLoader = require('./express');
// const cacheLoader = require('./cache');
const sequelizeLoader = require('./sequelize')

// const mqttLoader = require('./mqtt');
// const logger = require('./logger');
// const errors = require('./errors');

module.exports = async function (app) {

	await sequelizeLoader();
    await expressLoader(app.expressApp);
	// await errors(app.expressApp);
}
