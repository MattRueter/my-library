const dotenv = require('dotenv');
const {MongoClient} = require("mongodb");

dotenv.config();
const uri = process.env.ATLAS_URI
const client = new MongoClient(uri);



async function connectToDatabase (){
    let conn;

    try{
        conn = await client.connect();
        return conn.db("myLibrary")
    }catch(e) {
        console.error(e)
        throw e;
    }
};

module.exports = connectToDatabase;