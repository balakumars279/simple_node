const Sequelize = require('sequelize')
const { dbConfig } = require('./../startup')
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

let models = {};

models.User = sequelize.import('./user')

models.User.sync({});

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models;