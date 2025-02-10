import PostTagRepository from '../repositories/post_tagRepository.js';

class PostTagController {
  // Lấy danh sách tất cả các PostTags
  async getAllPostTags(req, res) {
    try {
      const postTags = await PostTagRepository.getPostTags();
      res.status(200).json(postTags);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Tạo mới một PostTag
  async createPostTag(req, res) {
    try {
      const newPostTag = await PostTagRepository.createPostTag(req.body);
      res.status(201).json(newPostTag);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Lấy thông tin một PostTag theo ID
  async getPostTagById(req, res) {
    try {
      const postTag = await PostTagRepository.getPostTagById(req.params.id);
      res.status(200).json(postTag);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  // Cập nhật thông tin một PostTag
  async updatePostTag(req, res) {
    try {
      const updatedPostTag = await PostTagRepository.updatePostTag(req.params.id, req.body);
      res.status(200).json(updatedPostTag);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  // Xóa một PostTag
  async deletePostTag(req, res) {
    try {
      const deletedPostTag = await PostTagRepository.deletePostTag(req.params.id);
      res.status(200).json(deletedPostTag);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new PostTagController();
