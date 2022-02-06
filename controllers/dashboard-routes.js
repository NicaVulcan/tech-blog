const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('dashboard')
});

router.get('/edit/:id', (req, res) => {
    res.render('edit-post')
});

module.exports = router;