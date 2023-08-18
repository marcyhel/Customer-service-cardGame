const { Sequelize } = require('sequelize');
const config = require('../config');

module.exports = async function () {
  if (process.connection) {
    return process.connection;
  }
  const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql',
    pool: {
      max: parseInt(config.database.pool),
      idle: parseInt(config.database.idle),
      acquire: parseInt(config.database.timeout),
    },
    
    
  });
  
  try {
    await sequelize.authenticate();
    process.connection = sequelize;
    console.log('Conectou no banco');
    //  sequelize.sync({force:true})
  } catch (error) {
    throw Error('Unable to connect to the database');
  }
};
