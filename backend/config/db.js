const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('framework1', 'root', '', {
  host: 'localhost',
  port: 3308,
  dialect: 'mysql',
});

module.exports = sequelize;
