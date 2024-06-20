const sequelize = require('../config/db');
const {Sequelize} =  require('sequelize');

const modelProjects = sequelize.define('projects',{
    
    name_project: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      leader: {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_to_user:{
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: 'users',
          key: 'id'
      },
    },
      day_start: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      day_end: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
});

module.exports = modelProjects;