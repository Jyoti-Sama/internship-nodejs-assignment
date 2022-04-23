import express from 'express';

import { createPost, deletePost, getPosts } from '../controllers/post.js';

const router = express.Router();

// get posts
router.get('/post', getPosts);

// create a new post
router.post('/post', createPost);

//delete a post
router.delete('/post', deletePost)


export default router;