const mongoose = require('mongoose');
const comment = require('./Comment');

const videoSchema = new mongoose.Schema({
    videoId: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    comments: {type: [comment.Schema]},
});

module.exports = mongoose.model('Video', videoSchema);