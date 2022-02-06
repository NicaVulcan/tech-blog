const router = require('express').Router();
const { Comment } = require('../../models');

//post
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({
                    message: 'Comment not found!'
                });
                return;
            }
            res.json(commentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;