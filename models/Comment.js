const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true},
    replies: {type: [String]},
});

module.exports.commentSchema = commentSchema;
module.exports.Comment = mongoose.model('Comment', commentSchema);

