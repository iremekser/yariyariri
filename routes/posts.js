const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        artist: req.body.artist,
        songName: req.body.songName,
        lyric: req.body.lyric,
        user: req.body.user,
        spotifyLink: req.body.spotifyLink
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.get('/:postId', async (req, res) => {
    try {

        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { lyric: req.body.lyric } }
        );
        res.json(updatedPost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;

