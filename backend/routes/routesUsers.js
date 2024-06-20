const express = require('express');
const cors = require('cors');
const router = express.Router();
const authController = require('../controllers/authController');
const modelUser = require('../models/modelUser');


router.use(cors());

router.get('/', async (req, res) => {
    try{
        const users = await modelUser.findAll({
            order:[['createdAt','DESC']],
        });
        res.json(users);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Không hiện users' });
    }
    
});


  
  
  
// // thêm employee
router.post('/adduser', async (req, res) => {
    try {
        const { name_user, password, email,phone } = req.body;
        const adduser = await modelUser.create({
            name_user, password, email,phone
        });
        res.status(201).json({ message: 'Đk thành công' }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Không thể thêm user' });
    }
});

// chi tiết employee

// router.get('/:employeeId', async (req, res) =>{
//     try {
//         const { employeeId } = req.params;
//         const employee = await modelEmployees.findByPk(employeeId);
//         res.json(employee);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Không tìm thấy chi tiết employee' });
//     }
// });


// // xóa employee
// router.delete('/delete/:employeeId', async (req, res) => {
//     try{
//         const {employeeId} = req.params;
//         await modelEmployees.destroy({
//             where: {
//                 id: employeeId
//             }
//         });
//         res.status(201).json({ message: 'Xóa employee thành công' });
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ message: 'Không thể xóa employee' });
//     }
// });

// // sửa employee
// router.get('/editemployee/:employeeId', async(req, res) =>{
//     try{
//         const employeeId = req.params.employeeId;
//         const employee = await modelEmployees.findByPk(employeeId);
//         res.json(employee);
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ message: 'Không thể sửa employee' });
//     }
// });

// router.post('/editemployee/:emloyeeId', async(req, res) =>{
//     try{
//         const employeeId = req.params.emloyeeId;
//         const { name_employee, position, department } = req.body;
//         const [update]= await modelEmployees.update({
//             name_employee, position, department
//         },{
//             where: {
//                 id: employeeId
//             }
//         });
//         if(update){
//             const updateEmployee = await modelEmployees.findByPk(employeeId);
//             res.status(200).json({message: 'Employees updated successfully'})
//         }else{
//             res.status(500).json({ message: ' Employee not foud' });
//         }
       
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ message: 'Không thể sửa employee' });
//     }
// });

module.exports = router;