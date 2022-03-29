const db = require('../db')
const { Movie } = require('../models')
const getMovies = async (req, res) => {
    let gotMovie = await Movie.find({})
    console.log('gotMovie')
    res.send(gotMovie)
}


module.exports = {
    getMovies
}