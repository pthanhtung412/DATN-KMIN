import mongoose from 'mongoose';

const postTagSchema = new mongoose.Schema({
  tags_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id trong bảng Tag
    ref: 'Tag', // Tham chiếu đến model 'Tag'
    required: true
  },
  posts_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id trong bảng Post
    ref: 'Post', // Tham chiếu đến model 'Post'
    required: true
  }
});

// Tạo model PostTag từ postTagSchema
const PostTag = mongoose.model('PostTag', postTagSchema);

export default PostTag;
