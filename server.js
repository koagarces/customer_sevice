const express = require("express");
const db = require("./db");
const cors = require("cors");
const logger = require("morgan");
const movieController = require("./controllers/getTrilogies");
const reviewController = require("./controllers/reviewController");
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static(`${__dirname}/client/build`));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.post("/api/movies/review", reviewController.CreateReview);
app.get("/api/movies/review", reviewController.GetReviews);
app.delete("/api/movies/review/:reviewsId", reviewController.DeleteReview);
app.put("/api/movies/review/:reviewsId", reviewController.UpdateReview);

app.get("/api/movies/review/:reviewsId", reviewController.getReviewsByReviewId);
app.get(
  "/api/movies/reviews/:trilogyId",
  reviewController.getReviewsByTrilogyId
);

app.get("/api/movies/trilogies/:trilogyId", movieController.getTrilogyById);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
