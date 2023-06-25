import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")



async function getLandings(filter = {}) {
    await client.connect()
    const filterMongo = { deleted: { $ne: true } }

    if (filter?.section) {
        filterMongo.section = filter.section;
      }
      if (filter?.cliente) {
        filterMongo.cliente = { $all: filter.cliente.split(';') }
      }

      if (filter?.technologies) {
        filterMongo.technologies = { $all: filter.technologies.split(';') }
      }

    return db.collection("Projects").find(filterMongo).toArray()
    
}


async function getLandingById(id) {
    await client.connect()

    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function createLanding(landing) {
    await client.connect()

    return db.collection("Projects").insertOne(landing)
}

async function editLanding(id, landing) {
    await client.connect()

    return db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: landing })
}

async function replaceLanding(id, landing) {
    await client.connect()

    return db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, landing)
}

async function deleteLanding(id) {
    await client.connect()

    return db.collection("Projects").deleteOne({ _id: new ObjectId(id) })
}

async function getLandingsBySection(section) {
    await client.connect();
  
    const filter = {
      section: section.toLowerCase()
    };
  
    return db.collection('Projects').find(filter).toArray();
  }

  

export {
    getLandings,
    getLandingById,
    createLanding,
    editLanding,
    deleteLanding,
    replaceLanding,
    getLandingsBySection
  }