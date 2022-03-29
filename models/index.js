const mongoose = require('mongoose')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')

const Movie = mongoose.model('movie', MovieSchema)

const Review = mongoose.model('review', ReviewSchema)

module.exports = {
    Movie,
    Review
}