import Tag from "../models/tag.js";
import PostTag from "../models/post_tag.js";
import mongoose from "mongoose";

class TagRepository {
  // Lấy danh sách tất cả các tags
  async getTags() {
    return await Tag.find({});
  }

  async addSearchCountTag(body) {
    const { tag_name } = body;

    return await Tag.findOneAndUpdate(
      { tag_name }, // Tìm tag dựa trên tên
      { $inc: { tag_search_count: 1 } }, // Tăng search_count thêm 1
    );
  }

  async getTagByPostId(postId) {
    const id = new mongoose.Types.ObjectId(postId.posts_id);
    let arrPostTag = await PostTag.find({ posts_id: id });
    
    let re = [];
    for (const post_tag of arrPostTag) {
      const tag = await Tag.findById(post_tag._id);
      re.push(tag);
    }
    
    return re; // Trả về danh sách các tag
  }

  // Tạo mới một tag
  async createTag(body) {
    const { tag_name, tag_describe } = body;


    const newTag = new Tag({
      tag_name,
      tag_describe
    });

    return await newTag.save();
  }

  // Lấy thông tin của một tag theo ID
  async getTagById(id) {
    return await Tag.findById(id);
  }

  // Cập nhật thông tin một tag
  async updateTag(id, body) {
    return await Tag.findByIdAndUpdate(id, body, { new: true });
  }

  // Xóa một tag
  async deleteTag(id) {
    return await Tag.findByIdAndDelete(id);
  }
}

export default new TagRepository();
