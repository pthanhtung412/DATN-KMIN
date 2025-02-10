import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  post_title: {
    type: String,
    required: true,
    trim: true
  },
  post_content: {
    type: String,
    required: true
  },
  post_likes: {
    type: Number,
    default: 0
  },
  post_views: {
    type: Number,
    default: 0
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Sử dụng ObjectId để tham chiếu đến _id trong users
    ref: 'User',
    required: true
  },
  post_created_date: {
    type: Date,
    default: Date.now
  },
  post_answers: {
    type: Number,
    default: 0
  }
});

// Tạo model Post từ postSchema
const Post = mongoose.model('Post', postSchema);

export default Post;
