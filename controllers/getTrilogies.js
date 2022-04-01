const db = require("../db");
const { Movie } = require("../models");

const getMovies = async (req, res) => {
  let gotMovies = await Movie.find({});
  console.log("gotMovies");
  res.send(gotMovies);
};
const getTrilogyById = async (req, res) => {
  const trilogyId = req.params.trilogyId;
  const trilogies = await Movie.find().where("trilogy").equals(trilogyId);
  res.send(trilogies);
};

// const getPrequelTrilogy = async (req, res) => {
//   const movies = await Movie.find().where("trilogy").equals("Prequel Trilogy");
//   res.send(movies);
// };

// const getSequelTrilogy = async (req, res) => {
//   const movies = await Movie.find().where("trilogy").equals("Sequel Trilogy");
//   res.send(movies);
// };

// const getOriginalTrilogy = async (req, res) => {
//   const movies = await Movie.find().where("trilogy").equals("Original Trilogy");
//   res.send(movies);
// };

module.exports = {
  getMovies,
  // getPrequelTrilogy,
  // getOriginalTrilogy,
  // getSequelTrilogy,
  getTrilogyById,
};
