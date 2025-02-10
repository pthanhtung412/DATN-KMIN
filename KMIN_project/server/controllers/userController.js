import UserRepository from "../repositories/userRepository.js";

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserRepository.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users", error });
    }
  }

  async createUser(req, res) {
    try {
      const newUser = await UserRepository.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: "Error creating user", error });
    }
  }

  async loginUser(req, res) {
    try {
  
      // Kiểm tra người dùng trong cơ sở dữ liệu
      const { user, token } = await UserRepository.loginUser(req.body);
  
      // Nếu đăng nhập thành công, trả về người dùng và mã trạng thái 200
      res.status(200).json({
        message: "Login successful",
        user: {
          id: user._id,
          user_name: user.user_name,
          user_email: user.user_email,
        },
        token: token,
      });
    } catch (error) {
      // Nếu không tìm thấy tài khoản
      if (error.message === "User not found") {
        res.status(404).json({ message: "User not found" });
      }
      // Nếu mật khẩu không khớp
      else if (error.message === "Invalid password") {
        res.status(401).json({ message: "Invalid password" });
      }
      // Lỗi hệ thống khác
      else {
        res.status(500).json({ message: "Server error", error });
      }
    }
  }
  
}

export default new UserController();
