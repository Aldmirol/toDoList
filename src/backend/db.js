const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://Alpri:6173200o@cluster1.fymei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
const myDb = 'ToDoList';

async function db() {
    await client.connect();
    console.log('Connected');

    const db = client.db(myDb);

    return db;
}

module.exports = {
    MongoClient,
    url,
    db,
};