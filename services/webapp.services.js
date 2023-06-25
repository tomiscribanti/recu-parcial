import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getWebapps(filter = {}) {
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

async function getWebappById(id) {
    await client.connect()

    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function createWebapp(webapp) {
    await client.connect()

    return db.collection("Projects").insertOne(webapp)
}

async function editWebapp(id, webapp) {
    await client.connect()

    return db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: webapp })
}

async function replaceWebapp(id, webapp) {
    await client.connect()

    return db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, webapp)
}

async function deleteWebapp(id) {
    await client.connect()

    return db.collection("Projects").deleteOne({ _id: new ObjectId(id) })
}

export {
    getWebapps,
    getWebappById,
    createWebapp,
    editWebapp,
    deleteWebapp,
    replaceWebapp
}