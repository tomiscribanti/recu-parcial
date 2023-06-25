import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://127.0.0.1:27017/")

client.connect()
    .then(function (conection) {
        const db = conection.db("AH20231CP1")
        db.collection("Projects").insertOne({ name: "Esto es desde Node!" })
        console.log("Me contecte correctamente!")


    })