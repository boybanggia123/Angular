const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {authenticateToken, authorizeRoles} = require('../controllers/authMiddleware')

router.post('/register', authController.register, (req,res) => {
    res.status(200).json({
        message: 'Đã đăng kí thành công'
    });
});

router.post('/login', authController.login, (req,res) => {
    res.status(200).json({
        message: 'Đã đăng nhập thành công'
    });
});

// Route chỉ dành cho người dùng đã đăng nhập
router.get('/project', authenticateToken, (req, res) => {
    res.send(`Welcome, ${req.user.name_user}`);
});

// Route chỉ dành cho admin
router.get('/admin', authenticateToken, authorizeRoles(1), (req, res) => {
    res.send('Welcome, Admin!');
});


module.exports = router;
