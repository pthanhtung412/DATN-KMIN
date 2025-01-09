import express from 'express';
import PostController from '../controllers/postController.js';

const router = express.Router();

// Lấy danh sách tất cả các post
router.get('/api/posts', PostController.getAllPosts);

// Tạo mới một post
router.post('/api/createPost', PostController.createPost);

// Lấy thông tin của một post theo ID
router.get('/api/posts/:id', PostController.getPostById);

// Cập nhật thông tin một post
router.put('/api/posts/:id', PostController.updatePost);

// Xóa một post
router.delete('/api/posts/:id', PostController.deletePost);

// Tăng lượt thích của post
router.post('/api/posts/:id/like', PostController.likePost);

// Tăng lượt xem của post
router.post('/api/posts/:id/view', PostController.viewPost);

// Tăng số câu trả lời của post
router.post('/api/posts/:id/answer', PostController.answerPost);

export default router;
