const db = require('../db')
const { Movie } = require('../models')


const getMovies = async (req, res) => {
    let gotMovies = await Movie.find({})
    console.log('gotMovies')
    res.send(gotMovies)
}



module.exports = {
    getMovies

}