const express = require('express');
const cors = require('cors');
const router = express.Router();
const projectsModel = require('../models/modelProjects');
const employeesModel = require('../models/modelEmployees');
const tasksModel = require('../models/modelTasks');
const usersModel = require('../models/modelUser');
const modelProjects = require('../models/modelProjects');

router.use(cors());

router.get('/', async (req, res) => {
    try {
      const projects = await projectsModel.findAll();
      const employees = await employeesModel.findAll();
      const tasks = await tasksModel.findAll();
      const users = await usersModel.findAll();
      res.json({ projects, employees, tasks,users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});
router.get('/project/user/:userId', async (req, res) => {
  try {
      const { userId } = req.params;
      const projects = await modelProjects.findAll({
          where: {
              project_to_user: userId
          },
          order: [['createdAt', 'DESC']],
      });
      res.json(projects);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Không thể lấy dự án theo user' });
  }
});

module.exports = router;
