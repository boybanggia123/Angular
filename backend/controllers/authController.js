const modelUser = require('../models/modelUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = '@147'; // Đảm bảo rằng SECRET_KEY là một chuỗi phức tạp và bảo mật
const expiresIn = '1h';

// Tạo mã thông báo từ payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Xác minh mã thông báo
function verifyToken(token, callback) {
  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) return callback(err);
    return callback(null, decode);
  });
}

exports.register = async (req, res) => {
  try {
    const { name_user, password, email, phone, role } = req.body; // Include role in the request body
    const existingUser = await modelUser.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: 'Email đã tồn tại' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await modelUser.create({
      name_user,
      phone,
      email,
      password: hashedPassword,
      role: role !== undefined ? role:0  // Use role from request body or default to 0 if not provided
    });

    const token = createToken({ id: newUser.id, email: newUser.email, name_user: newUser.name_user, phone: newUser.phone });
    res.status(201).json({ access_token: token });
  } catch (error) {
    console.error('Error in register:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await modelUser.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Email không tồn tại' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    const token = createToken({ id: user.id, email: user.email, name_user: user.name_user, phone: user.phone, role: user.role  });
    res.status(200).json({ access_token: token });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};


