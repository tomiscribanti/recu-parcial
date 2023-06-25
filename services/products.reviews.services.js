import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHM")
const productReviews = db.collection(`product_reviews`)

/*
reviews = {
    product_id,
    reviews: [{
       comment
       date
       author
       score 
    }]
}
*/

async function getReviews(idProduct) {
    await client.connect()

    const reviews = await productReviews.findOne(
        { product_id: new ObjectId(idProduct) }
    )

    return reviews
}

async function createReview(idProduct, review) {
    await client.connect()

    const update = await productReviews.updateOne(
        { product_id: new ObjectId(idProduct) },
        { $push: { reviews: review } }
    )

    if (update.upsertedCount == 0) {
        await productReviews.insertOne({
            product_id: new ObjectId(idProduct),
            reviews: [review]
        })
    }

    console.log(update)

    return review
}

export {
    createReview,
    getReviews
}