const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/Users');
const PostsController = require('../Controllers/Posts');

router.get('/getUsers',UsersController.getUsers);
router.post('/signup',UsersController.Signup);
router.post('/login',UsersController.Login);

router.get('/getPosts', PostsController.getPosts);
router.post('/addPost', PostsController.addPost);
router.delete('/deletePost/:id',PostsController.deletePost);
router.put('/updatePost/:id',PostsController.updatePost)



module.exports = router;