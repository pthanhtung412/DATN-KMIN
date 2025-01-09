import express from 'express';
import TagController from '../controllers/tagController.js';

const router = express.Router();

router.get('/api/tags', TagController.getAllTags);
router.post('/api/createTag', TagController.createTag);
router.post('/api/addSearchCountTag',TagController.addSearchCountTag)
router.post('/api/getTagByPostId', TagController.getTagByPostId);

export default router;