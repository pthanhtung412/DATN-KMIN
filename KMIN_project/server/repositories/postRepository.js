import Post from "../models/post.js";

class PostRepository {
  // Lấy danh sách tất cả các post
  async getPosts() {
    return await Post.find({});
  }

  // Tạo mới một post
  async createPost(body) {
    const { post_title, post_content, user_id } = body;

    const newPost = new Post({
      post_title,
      post_content,
      user_id,
    });

    return await newPost.save();
  }

  // Lấy thông tin của một post theo ID
  async getPostById(id) {
    return await Post.findById(id).populate("user_id", "username"); // Có thể populate thông tin người dùng nếu cần
  }

  // Cập nhật thông tin một post
  async updatePost(id, body) {
    return await Post.findByIdAndUpdate(id, body, { new: true });
  }

  // Xóa một post
  async deletePost(id) {
    return await Post.findByIdAndDelete(id);
  }

  // Tăng số lượt thích của post
  async likePost(id) {
    return await Post.findByIdAndUpdate(id, { $inc: { post_likes: 1 } }, { new: true });
  }

  // Tăng số lượt xem của post
  async viewPost(id) {
    return await Post.findByIdAndUpdate(id, { $inc: { post_views: 1 } }, { new: true });
  }

  // Tăng số câu trả lời của post
  async answerPost(id) {
    return await Post.findByIdAndUpdate(id, { $inc: { post_answers: 1 } }, { new: true });
  }
}

export default new PostRepository();
