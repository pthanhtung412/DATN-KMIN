import express from 'express';
import PostTagController from '../controllers/postTagController.js';

const router = express.Router();

// Lấy danh sách tất cả các PostTags
router.get('/api/postTags', PostTagController.getAllPostTags);

// Tạo mới một PostTag
router.post('/api/createPostTag', PostTagController.createPostTag);

// Lấy thông tin của một PostTag theo ID
router.get('/api/postTags/:id', PostTagController.getPostTagById);

// Cập nhật thông tin một PostTag
router.put('/api/postTags/:id', PostTagController.updatePostTag);

// Xóa một PostTag
router.delete('/api/postTags/:id', PostTagController.deletePostTag);

export default router;
