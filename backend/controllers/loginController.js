const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailCheck = await User.findOne({ email: email });

    if (emailCheck) {
      const passwordCheck = await bcrypt.compare(password, emailCheck.password);

      if (passwordCheck) {
        return res.json({
          success: true,
          message: "Giriş Başarılı",
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

module.exports = {
  login,
  register,
};
