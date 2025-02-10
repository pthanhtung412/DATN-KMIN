import mongoose from 'mongoose';

const favoritePostSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id của users
    ref: 'User',
    required: true
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến _id của posts
    ref: 'Post',
    required: true
  },
  favorite_post_date: {
    type: Date,
    default: Date.now
  }
});

// Tạo model FavoritePost từ favoritePostsSchema
const FavoritePost = mongoose.model('FavoritePost', favoritePostSchema);

export default FavoritePost;
