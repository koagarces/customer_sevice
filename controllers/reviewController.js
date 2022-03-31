const db = require("../db");
const { Review, _id } = require("../models");

const body = require("body-parser");

const CreateReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({ review });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const DeleteReview = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Review.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send("Review");
    }
    throw new Error("review does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  CreateReview,
  GetReviews,
  DeleteReview,
};
