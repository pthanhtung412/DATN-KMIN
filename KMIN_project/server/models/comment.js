import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment_type: {
    type: Number, // Hoặc có thể dùng String nếu bạn có loại bình luận cụ thể
    required: true
  },
  comment_likes: {
    type: Number,
    default: 0
  },
  comment_created_date: {
    type: Date,
    default: Date.now
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id của posts
    ref: 'Post',
    required: true
  },
  post_comment_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id của comments nếu đây là trả lời của một bình luận khác
    ref: 'Comment'
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id của users
    ref: 'User',
    required: true
  },
  comment_content: {
    type: String,
    required: true
  }
});

// Tạo model Comment từ commentsSchema
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;