const { Schema } = require('mongoose')

const Review = new Schema(
    {
        Rating: { type: Number },
        User: { type: String, },
        Comment: { type: String, },
    },
    { timestamps: true })

module.exports = Review