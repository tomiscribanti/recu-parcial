import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getEcommerces(filter = {}) {
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

async function getEcommerceById(id) {
    await client.connect()

    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function createEcommerce(ecommerce) {
    await client.connect()

    return db.collection("Projects").insertOne(ecommerce)
}

async function editEcommerce(id, ecommerce) {
    await client.connect()

    return db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: ecommerce })
}

async function replaceEcommerce(id, ecommerce) {
    await client.connect()

    return db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, ecommerce)
}

async function deleteEcommerce(id) {
    await client.connect()

    return db.collection("Projects").deleteOne({ _id: new ObjectId(id) })
}

async function getEcommercesBySection(section) {
    await client.connect();
  
    const filter = {
      section: section.toLowerCase()
    };
  
    return db.collection('Projects').find(filter).toArray();
  }

export {
    getEcommerces,
    getEcommerceById,
    createEcommerce,
    editEcommerce,
    deleteEcommerce,
    replaceEcommerce,
    getEcommercesBySection
}