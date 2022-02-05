const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

//get all
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: [
                    'id', 
                    'title', 
                    'post_url', 
                    'created_at'
                ],
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'created_at'
                ]

            }
        ]
    })
        .then(userData => {
            if(!userData) {
                res.status(404).json({
                    message: 'User not found!'
                });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;