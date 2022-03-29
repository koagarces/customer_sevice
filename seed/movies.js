const db = require('../db');
const { Movie } = require('../models');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {


    const movies = [
        {
            trilogy: 'Prequel Trilogy',
            name: 'Episode I - The Phantom Menace',
            releaseYear: '1999',
        },
        {
            trilogy: 'Prequel Trilogy',
            name: 'Episode II - Attack of the Clones ',
            releaseYear: '2002',
        },
        {
            trilogy: 'Prequel Trilogy',
            name: 'Episode III - Revenge of the Sith ',
            releaseYear: '2005',
        },
        {
            trilogy: 'Original Trilogy',
            name: 'Episode IV - A New Hope',
            releaseYear: '1977',
        },
        {
            trilogy: 'Original Trilogy',
            name: 'Episode V - The Empire Strikes Back',
            releaseYear: '1980',
        },
        {
            trilogy: 'Original Trilogy',
            name: 'Episode VI - Return of the Jedi',
            releaseYear: '1983',
        },
        {
            trilogy: 'Sequel Trilogy',
            name: 'Episode VII - The Force Awakens',
            releaseYear: '2015',
        },
        {
            trilogy: 'Sequel Trilogy',
            name: 'Episode VIII - The Last Jedi',
            releaseYear: '2017',
            objectId: '',
        },
        {
            trilogy: 'Sequel Trilogy',
            name: 'Episode IX - The Rise of Skywalker',
            releaseYear: '2019',
            objectId: '',
        }
    ]
    await Movie.insertMany(movies)
    console.log('Created movies!')
}
const run = async () => {
    await main()
    db.close()
}

run()