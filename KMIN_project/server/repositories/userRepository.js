import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserRepository {
  async getUsers() {
    return await User.find({});
  }

  async createUser(body) {
    const {  user_name, user_password, user_email } = body;

    // Validation (ví dụ đơn giản)
    if ( !user_name || !user_password || !user_email) {
      throw new Error("All fields are required");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user_password, saltRounds);

    const newUser = new User({
      user_name,
      user_password: hashedPassword,
      user_email,
    });

    return await newUser.save();
  }

  async loginUser(body) {
    const {  user_name, user_password } = body;
  
    const user = await User.findOne({ user_name });
    if (!user) {
      throw new Error("User not found");
    }

    // So sánh mật khẩu đã mã hoá với mật khẩu người dùng nhập
    const isMatch = await bcrypt.compare(user_password, user.user_password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { userId: user._id, user_name: user.user_name },
      process.env.SECRET_KEY,
      { expiresIn: "1h" } // Token hết hạn sau 1 giờ
    );

    return {user,token };
  }
}

export default new UserRepository();
