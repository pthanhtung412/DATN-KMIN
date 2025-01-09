import PostTag from "../models/post_tag.js";
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

class PostTagRepository {
  // Lấy danh sách tất cả các PostTags
  async getPostTags() {
    try {
      return await PostTag.find().populate('tags_id').populate('posts_id');
    } catch (error) {
      throw new Error("Error retrieving post tags: " + error.message);
    }
  }

  // Tạo mới một PostTag
  async createPostTag(body) {
    try {
      const newPostTag = new PostTag({
        tags_id: body.tags_id,
        posts_id: body.posts_id
      });

      return await newPostTag.save();
    } catch (error) {
      throw new Error("Error creating post tag: " + error.message);
    }
  }

  // Lấy thông tin một PostTag theo ID
  async getPostTagById(id) {
    try {
      const postTag = await PostTag.findById(id).populate('tags_id').populate('posts_id');
      if (!postTag) {
        throw new Error("PostTag not found");
      }
      return postTag;
    } catch (error) {
      throw new Error("Error retrieving post tag by ID: " + error.message);
    }
  }

  // Cập nhật thông tin một PostTag
  async updatePostTag(id, body) {
    try {
      const updatedPostTag = await PostTag.findByIdAndUpdate(id, body, { new: true }).populate('tags_id').populate('posts_id');
      if (!updatedPostTag) {
        throw new Error("PostTag not found");
      }
      return updatedPostTag;
    } catch (error) {
      throw new Error("Error updating post tag: " + error.message);
    }
  }

  // Xóa một PostTag
  async deletePostTag(id) {
    try {
      const deletedPostTag = await PostTag.findByIdAndDelete(id);
      if (!deletedPostTag) {
        throw new Error("PostTag not found");
      }
      return deletedPostTag;
    } catch (error) {
      throw new Error("Error deleting post tag: " + error.message);
    }
  }
}

export default new PostTagRepository();
