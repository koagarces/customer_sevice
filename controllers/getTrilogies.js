const db = require("../db");
const { Movie } = require("../models");

const getMovies = async (req, res) => {
  let gotMovies = await Movie.find({});
  console.log("gotMovies");
  res.send(gotMovies);
};

const getPrequelTrilogy = async (req, res) => {
  const movies = await Movie.find().where("trilogy").equals("Prequel Trilogy");
  res.send(movies);
};

module.exports = {
  getMovies,
  getPrequelTrilogy,
  //   getPrequelMovies,
};
