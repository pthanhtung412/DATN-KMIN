import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  tag_name: {
    type: String, // Tên của tag
    required: true,
    unique: true
  },
  tag_describe: {
    type: String, // Tên của tag
    required: true
  },
  tag_create_count: {
    type: Number, // Số lần tìm kiếm tag
    default: 1
  },
  tag_search_count: {
    type: Number, // Số lần tìm kiếm tag
    default: 0
  },
  tag_vote_count: {
    type: Number, // Số lượt vote cho tag
    default: 0
  }
});

// Tạo model Tag từ tagSchema
const Tag = mongoose.model('Tag', tagSchema);

export default Tag;
