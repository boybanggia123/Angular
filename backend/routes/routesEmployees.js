const express = require('express');
const cors = require('cors');
const router = express.Router();
const modelEmployees = require('../models/modelEmployees');

router.use(cors());

router.get('/', async (req, res) => {
    try{
        const employees = await modelEmployees.findAll({
            order:[['createdAt','DESC']],
        });
        res.json(employees);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không hiện employees' });
    }
    
});

// chi tiết employee

router.get('/:employeeId', async (req, res) =>{
    try {
        const { employeeId } = req.params;
        const employee = await modelEmployees.findByPk(employeeId);
        res.json(employee);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không tìm thấy chi tiết employee' });
    }
});

// thêm employee
router.post('/addemployee', async (req, res) => {
    try {
        const { name_employee, position, department } = req.body;
        const addemployee = await modelEmployees.create({
            name_employee, position, department
        });
        res.status(201).json({ message: 'Thêm dự án thành công' }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể thêm project' });
    }
});
// xóa employee
router.delete('/delete/:employeeId', async (req, res) => {
    try{
        const {employeeId} = req.params;
        await modelEmployees.destroy({
            where: {
                id: employeeId
            }
        });
        res.status(201).json({ message: 'Xóa employee thành công' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể xóa employee' });
    }
});

// sửa employee
router.get('/editemployee/:employeeId', async(req, res) =>{
    try{
        const employeeId = req.params.employeeId;
        const employee = await modelEmployees.findByPk(employeeId);
        res.json(employee);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể sửa employee' });
    }
});

router.post('/editemployee/:emloyeeId', async(req, res) =>{
    try{
        const employeeId = req.params.emloyeeId;
        const { name_employee, position, department } = req.body;
        const [update]= await modelEmployees.update({
            name_employee, position, department
        },{
            where: {
                id: employeeId
            }
        });
        if(update){
            const updateEmployee = await modelEmployees.findByPk(employeeId);
            res.status(200).json({message: 'Employees updated successfully'})
        }else{
            res.status(500).json({ message: ' Employee not foud' });
        }
       
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không thể sửa employee' });
    }
});

module.exports = router;