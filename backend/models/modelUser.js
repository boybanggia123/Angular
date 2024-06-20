const sequelize = require('../config/db');
const {Sequelize} =  require('sequelize');
const modelUsers = sequelize.define('users',{
    name_user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
      }
     
     
});

module.exports = modelUsers;