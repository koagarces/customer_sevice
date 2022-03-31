const db = require("../db");
const { Review } = require("../models");
// const router = express.Router();
const body = require("body-parser");
// const { post } = require('../models/review');

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

module.exports = {
  CreateReview,
  GetReviews,
};
