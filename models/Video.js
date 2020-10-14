const mongoose = require('mongoose');
const {commentSchema} = require('./Comment');

const videoSchema = new mongoose.Schema({
    videoId: {type: String, required: true},
    videoTitle: {type: String, required: true},
    likes: {type: Number},
    dislikes: {type: Number},
    comments: {type: [commentSchema]},
});


module.exports = mongoose.model('Video', videoSchema);