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

app.get("/movies/review", reviewController.GetReviews);

/// GET ROUTES
app.get("/movies/trilogies/prequels", movieController.getPrequelTrilogy);
app.get("/movies/trilogies/sequels", movieController.getSequelTrilogy);
app.get("/movies/trilogies/originals", movieController.getSequelTrilogy);

/// POST ROUTES
app.post("/movies/review", reviewController.CreateReview);

/// Delete Routes
app.delete("/movies/review", reviewController.DeleteReview);

/// UPDATE ROUTES

app.patch("/movies/review/:review_id", reviewController.UpdateReview);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
