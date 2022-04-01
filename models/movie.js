const { Schema } = require("mongoose");

const Movie = new Schema(
  {
    trilogy: { type: String, required: true },
    name: { type: String, required: true },
    releaseYear: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Movie;
