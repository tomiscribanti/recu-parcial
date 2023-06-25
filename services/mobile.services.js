import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getMobiles(filter = {}) {
    await client.connect()
    const filterMongo = { deleted: { $ne: true } }


    if (filter?.description) {
        filterMongo.$text = { $search: filter.description }
    }

    if (filter?.tags) {
        filterMongo.tags = { $all: filter.tags.split(';') }
    }
    return db.collection("Projects").find(filterMongo).toArray()
}

async function getMobileById(id) {
    await client.connect()

    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function createMobile(mobile) {
    await client.connect()

    return db.collection("Projects").insertOne(mobile)
}

async function editMobile(id, mobile) {
    await client.connect()

    return db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: mobile })
}

async function replaceMobile(id, mobile) {
    await client.connect()

    return db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, mobile)
}

async function deleteMobile(id) {
    await client.connect()

    return db.collection("Projects").deleteOne({ _id: new ObjectId(id) })
}

export {
    getMobiles,
    getMobileById,
    createMobile,
    editMobile,
    deleteMobile,
    replaceMobile
}