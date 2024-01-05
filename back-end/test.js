const db = require("./data/connection");

async function test () {
    try{
        const database = await db();
        const collection = await database.collection("users");
        const documents = await collection.find().toArray();
        console.log(documents)
        
    }catch(error){
        console.error(error)
    }
}

test()