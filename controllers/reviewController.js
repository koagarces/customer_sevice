const db = require("../db");
const { Review } = require("../models");

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
    const { _id } = req.body;
    const deleted = await Review.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send("Deleted Review");
    }
    throw new Error("review does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      req.body,
      {
        new: true,
      }
    );
    res.json(review);
  } catch (error) {
    res.send(error.message);
  }
};

// const getReviewsByMovieId = async (req, res) => {
//   const movieId = req.params.movieId;
//   const reviews = await Review.find().where("movieId").equals(movieId);
//   res.send(reviews);
// };

const getReviewsByTrilogyId = async (req, res) => {
  const trilogyId = req.params.trilogyId;
  const trilogies = await Review.find().where("trilogyId").equals(trilogyId);
  res.send(trilogies);
};

const getReviewsByReviewId = async (req, res) => {
  const reviewId = req.params.reviewId;
  const reviews = await Review.find().where("reviewId").equals(reviewId);
  res.send(reviews);
};
module.exports = {
  CreateReview,
  GetReviews,
  DeleteReview,
  UpdateReview,
  getReviewsByTrilogyId,
  getReviewsByReviewId,
};
