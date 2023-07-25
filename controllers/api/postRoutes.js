const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const post = await Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id,
                },
            });

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Post.destroy(
            {
                where: {
                    id: req.params.id,
                },
            });

        res.status(200);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;