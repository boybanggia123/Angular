const sequelize = require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');
const Employee = require('../models/modelEmployees'); // Import mô hình Employee
const Project = require('../models/modelProjects'); // Import mô hình Project

const Task = sequelize.define('tasks', {
  name_task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'projects',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  assignedTo: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'employees',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});


// Task.belongsTo(Employee, {
//   foreignKey: 'assignedTo',
//   as: 'employee'
// });


// Task.belongsTo(Project, {
//   foreignKey: 'projectId',
//   as: 'project'
// });

module.exports = Task;
