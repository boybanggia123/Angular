const express = require('express');
const cors = require('cors');
const router = express.Router();
const modelProjects = require('../models/modelProjects'); 
const modelUser = require('../models/modelUser');
const modelUsers = require('../models/modelUser');

router.use(cors());

router.get('/', async (req, res) => {
    try {
        const projects = await modelProjects.findAll({
            order:[['createdAt','DESC']],
        });
        
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không hiện project' });
    }
});

// chi tiết project
router.get('/:projectId', async (req, res) =>{
    try {
        const { projectId } = req.params;
        const project = await modelProjects.findByPk(projectId);
        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không tìm thấy chi tiết project' });
    }
})

// thêm project
router.get('/users', async (req, res) => {
    try {
        const users = await modelUsers.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể lấy danh sách người dùng' });
    }
});

router.post('/addproject', async (req, res) => {
    try {
        const { name_project, price, leader, day_start, day_end,project_to_user } = req.body;
        const addProject = await modelProjects.create({
            name_project, price, leader, day_start, day_end,project_to_user
        });
        res.status(201).json({ message: 'Thêm dự án thành công' }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể thêm project' });
    }
});
router.get('/addproject/user/:userId', async (req, res) => {
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

// xóa project
router.delete('/delete/:projectId', async (req, res) => {
    try{
        const { projectId } = req.params;
        await modelProjects.destroy({
            where: {
                id: projectId
            }
        });
        res.status(201).json({ message: 'Xóa project thành công' });

    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể xóa project' }); 
    }
});

// sửa project

router.get('/editproject/:projectId', async (req, res) => {
    try{
        const projectId = req.params.projectId;
        const project = await modelProjects.findByPk(projectId);
        res.json(project);

    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể sửa project' }); 
    }
});
router.post('/editproject/:projectId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { name_project, price, leader, day_start, day_end,project_to_user } = req.body;
        
        const [updated] = await modelProjects.update({
            name_project, price, leader, day_start, day_end,project_to_user
        }, {
            where: {
                id: projectId
            }
        });

        if (updated) {
            const updatedProject = await modelProjects.findByPk(projectId);
            res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});


module.exports = router;
