import PostRepository from "../repositories/postRepository.js";

class PostController {
  // Lấy danh sách tất cả các post
  async getAllPosts(req, res) {
    try {
      const posts = await PostRepository.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving posts", error });
    }
  }

  // Tạo mới một post
  async createPost(req, res) {
    try {
      const newPost = await PostRepository.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: "Error creating post", error });
    }
  }

  // Lấy thông tin của một post theo ID
  async getPostById(req, res) {
    try {
      const post = await PostRepository.getPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving post", error });
    }
  }

  // Cập nhật thông tin một post
  async updatePost(req, res) {
    try {
      const updatedPost = await PostRepository.updatePost(req.params.id, req.body);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: "Error updating post", error });
    }
  }

  // Xóa một post
  async deletePost(req, res) {
    try {
      const deletedPost = await PostRepository.deletePost(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting post", error });
    }
  }

  // Tăng lượt thích của post
  async likePost(req, res) {
    try {
      const updatedPost = await PostRepository.likePost(req.params.id);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Error liking post", error });
    }
  }

  // Tăng lượt xem của post
  async viewPost(req, res) {
    try {
      const updatedPost = await PostRepository.viewPost(req.params.id);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Error viewing post", error });
    }
  }

  // Tăng số câu trả lời của post
  async answerPost(req, res) {
    try {
      const updatedPost = await PostRepository.answerPost(req.params.id);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Error answering post", error });
    }
  }
}

export default new PostController();
