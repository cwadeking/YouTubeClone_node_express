const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Video = require('../models/Video');
const { Comment } = require('../models/Comment');

router.get('/', async (req, res) => {
    try{
        const videos = await Video.find();
        return res.send(videos);
    }catch(error){
        return res.status(400).send(`Database error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const videos = await Video.findById(req.params.id);
        if(!videos){
            return res.status(404)
            .send('The video with the given id was not found');
        }
        return res.send(videos);
    }catch (error) {
        return res.status(400).send(`Database error: ${error}`);
    }
});

//seems that the post would only happen if the video is not currently in the db.
//if it is in the db, then an update should be triggered.
router.post('/', async (req, res) => {
    const { error } = validateVideo(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error);
    }

    const comment = new Comment({
        text: req.body.comment,
        replies: []
    });

    let videos = new Video({
        videoId: req.body.videoId,
        videoTitle: req.body.videoTitle,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        comments:[comment],
    });
    try{
        const result = await videos.save();
        return res.send(result);
    }catch(error){
        return res.status(400).send(`Database error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    const { error } = validateVideo(req.body);
    if(error){
        return res.status(400).send(error);
    }
    try{
        const videos = await Video.findByIdAndUpdate(
            req.params.id,
            {
                videoTitle: req.body.videoTitle,
                likes: re
            },
            {new: true }
    );
    if(!videos){
        return res.status(404)
        .send(`The video with the given id was not found.`);
    }
    return res.send(videos);
    }catch(error){
        return res.status(400).send(`Database error ${error}`);
    }
});

function validateVideo(video) {
    const schema = Joi.object({
      videoId: Joi.string().min(1).required(),
      videoTitle: Joi.string(),
      likes: Joi.number(),
      dislikes: Joi.number(),
      comment: Joi.string(),
    });
    return schema.validate(video);
  }

  module.exports = router;