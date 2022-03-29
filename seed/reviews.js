const db = require('../db');
const { Review } = require('../models');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const main = async () => {


    const reviews = []

    await Review.insertMany(reviews)
    console.log('Created reviews!')

    const run = async () => {
        await main()
        db.close()
    }

    run()

}



