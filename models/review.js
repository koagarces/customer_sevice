const { Schema } = require("mongoose");

const Review = new Schema(
  {
    rating: { type: Number },
    creator: { type: String },
    comment: { type: String },
    trilogyId: { type: String },
  },
  { timestamps: true }
);

module.exports = Review;
