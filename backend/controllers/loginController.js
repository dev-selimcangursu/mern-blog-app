const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailCheck = await User.findOne({ email: email });

    if (emailCheck) {
      const passwordCheck = await bcrypt.compare(password, emailCheck.password);

      if (passwordCheck) {
        const token = jwt.sign(
          {
            id: emailCheck.id,
            name: emailCheck.name,
            email: emailCheck.email,
          },
          SECRET_KEY
        );

        return res.json({
          success: true,
          message: "Giriş Başarılı",
          token: token,
        });
      } else {
        return res.json({
          success: false,
          message: "Şifre Hatalı",
        });
      }
    } else {
      return res.json({
        success: false,
        message: "E-Posta Adresi Hatalı",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Sunucu hatası" });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      is_active: 1,
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Kayıt Başarıyla Gerçekleştirildi",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;

    const updateData = { name, email };

    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "Kullanıcı bulunamadı",
      });
    }

    return res.json({
      success: true,
      message: "Kullanıcı Bilgileri Başarıyla Güncellendi",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Kullanıcı Bilgileri Güncellenemedi",
    });
  }
};

module.exports = {
  login,
  register,
  update,
};
