const express = require('express');
const router = express.Router();
const { getAllBlogs } = require('../controllers/blogs');

router.get('/', getAllBlogs);

module.exports = router;
