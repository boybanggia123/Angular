const express = require('express');
const cors = require('cors');
const router = express.Router();
const modelTasks = require('../models/modelTasks');
const modelEmployees = require('../models/modelEmployees');
const modelProjects = require('../models/modelProjects'); 
router.use(cors());

router.get('/', async (req, res) => {
    try{
        const employees = await modelEmployees.findAll();
        const projects = await modelProjects.findAll();
        const tasks = await modelTasks.findAll({
            order:[['createdAt','DESC']],
        });
        res.json(tasks,employees,projects);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không hiện employees' });
    }
    
});
// chi tiết task
router.get('/:taskId' ,async (req,res)=>{
    try{
        const taskId = req.params.taskId;
        const task = await modelTasks.findByPk(taskId);
        res.json(task);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không hiện task' });
    }
});
// task lấy theo idproject
router.get('/task/project/:taskId',async(req,res)=>{
    try{
        const taskId = req.params;
        const task = await modelTasks.findAll({
            where:{
                projectId:taskId
            },order: [['createdAt', 'DESC']],
        });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không hiện task' });
    }
})
// thêm sản phẩm 
router.post('/addtask',async (req, res) => {
    try {
        const { name_task, projectId, assignedTo, status } = req.body;
        const addtask = await modelTasks.create({
            name_task, projectId, assignedTo, status
        });
        res.status(201).json({ message: 'Thêm task thành công' }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể thêm task' });
    }
});
// xóa task
router.delete('/delete/:taskId', async (req, res) => {
    try{
        const { taskId } = req.params;
        await modelTasks.destroy({
            where: {
                id: taskId
            }
        });
        res.status(201).json({ message: 'Xóa task thành công' });

    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể xóa task' }); 
    }
});
// sửa task 
router.get('/edittask/:taskId', async (req, res) => {
    try{
        const taskId = req.params.taskId;
        const task = await modelTasks.findByPk(taskId);
        res.json(task);
        
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể sửa task' });
    }
});

router.post('/edittask/:taskId', async (req, res) => {
    try{
        const taskId = req.params.taskId
        const { name_task, projectId, assignedTo, status } = req.body;
        const [update] = await modelTasks.update({
            name_task, projectId, assignedTo, status
        },{
            where: {
                id: taskId
            }
        });
        if(update){
            const updateTask = await modelTasks.findByPk(taskId);
            res.status(200).json({message: 'Task updated successfully'})
        }else{
            res.status(500).json({message: 'Task not updated'})
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể sửa task' });
    }
});



module.exports = router;