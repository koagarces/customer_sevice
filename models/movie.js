const { Schema } = require("mongoose");

const Movie = new Schema(
  {
    trilogy: { type: String, required: true },
    name: { type: String, required: true },
    releaseYear: { type: String, required: true },
    review: [{ type: Schema.Types.ObjectId, ref: "review" }],
  },
  { timestamps: true }
);

module.exports = Movie;
