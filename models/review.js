const { Schema } = require("mongoose");

const Review = new Schema(
  {
    rating: { type: Number },
    user: { type: String },
    comment: { type: String },
    movieId: { type: Number },
  },
  { timestamps: true }
);

module.exports = Review;
