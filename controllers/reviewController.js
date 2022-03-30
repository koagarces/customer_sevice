const db = require('../db');
const { Review } = require('../models');
// const router = express.Router();
const body = require('body-parser');
// const { post } = require('../models/review');

const GetReview = async (req, res) => {
    let gotReview = await new Review({
        rating: req.body.rating,
        user: req.body.user,
        comment: req.body.rating

    });



    console.log('gotReview')
    res.send(gotReview)
}

module.exports = {
    GetReview
}