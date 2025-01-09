import TagRepository from "../repositories/tagRepository.js";

class TagController {
  // Lấy danh sách tất cả các tags
  async getAllTags(req, res) {
    try {
      const tags = await TagRepository.getTags();
      res.status(200).json(tags);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving tags", error });
    }
  }

  // Tạo mới một tag
  async createTag(req, res) {
    try {
      const newTag = await TagRepository.createTag(req.body);
      res.status(201).json(newTag);
    } catch (error) {
      res.status(400).json({ message: "Error creating tag", error });
    }
  }

  // Lấy tag theo post id
  async getTagByPostId(req, res) {
    try {
      const tagInfo = await TagRepository.getTagByPostId(req.body);
      res.status(200).json(tagInfo);
    } catch (error) {
      res.status(400).json({ message: "Error finding tag", error });
    }
  }

  // Tạo mới một tag
  async addSearchCountTag(req, res) {
    try {
      const { tag_name } = req.body; // Lấy dữ liệu từ request body

      if (!tag_name) {
        return res.status(400).json({ message: "Tag name is required" }); // Kiểm tra nếu thiếu tag_name
      }

      // Gọi phương thức từ repository
      const updatedTag = await TagRepository.addSearchCountTag({ tag_name });

      if (!updatedTag) {
        return res.status(404).json({ message: "Tag not found" }); // Nếu tag không tồn tại
      }

      return res.status(200).json({
        message: "Tag search count updated successfully",
        tag: updatedTag,
      });
    } catch (error) {
      console.error("Error updating tag search count:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Lấy thông tin của một tag theo ID
  async getTagById(req, res) {
    try {
      const tag = await TagRepository.getTagById(req.params.id);
      if (!tag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(200).json(tag);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving tag", error });
    }
  }

  // Cập nhật thông tin một tag
  async updateTag(req, res) {
    try {
      const updatedTag = await TagRepository.updateTag(req.params.id, req.body);
      if (!updatedTag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(200).json(updatedTag);
    } catch (error) {
      res.status(400).json({ message: "Error updating tag", error });
    }
  }

  // Xóa một tag
  async deleteTag(req, res) {
    try {
      const deletedTag = await TagRepository.deleteTag(req.params.id);
      if (!deletedTag) {
        return res.status(404).json({ message: "Tag not found" });
      }
      res.status(200).json({ message: "Tag deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting tag", error });
    }
  }
}

export default new TagController();
