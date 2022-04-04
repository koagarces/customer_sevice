const db = require("../db");
const { Review } = require("../models");

const body = require("body-parser");

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
    console.log("id to delete:", req.params.reviewsId);
    const trilogyId = req.params.reviewsId;
    const deleted = await Review.findByIdAndDelete(trilogyId);
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
    console.log("update review", req.body, req.params);
    const review = await Review.findByIdAndUpdate(
      req.params.reviewsId,
      req.body
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

const CreateReview = async (req, res) => {
  console.log(req.body);
  try {
    await Review.insertMany([req.body]);
    res.send(200);
  } catch (e) {
    res.sendStatus(666);
    console.log(e.message);
  }
};

const getReviewsByTrilogyId = async (req, res) => {
  const trilogyId = req.params.trilogyId;
  const trilogies = await Review.find().where("trilogyId").equals(trilogyId);
  res.send(trilogies);
};

const getReviewsByReviewId = async (req, res) => {
  const reviewId = req.params._Id;
  const reviews = await Review.find().where("_Id").equals(reviewId);
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
