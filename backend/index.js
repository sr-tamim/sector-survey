const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express(); // define express app
const port = process.env.PORT || 1212; // define port to run the server

// middleware
app.use(cors()); // avoid CORS origin error
app.use(express.json()); // get rid of JSON parse/stringify hassle

// mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bdnuvui.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => console.log(`http://localhost:${port}`));

async function start_server() {
    try {
        await client.connect(); // connect to mongodb database
        const database = client.db('sector_survey'); // define mongodb database
        const sectorsCollection = database.collection('sectors'); // sectors collection in database
        const usersCollection = database.collection('users'); // users collection in databse

        // ----- api > get all sectors from database -------
        app.get('/sectors', async (req, res) => {
            const cursor = sectorsCollection.find({});
            const users = await cursor.toArray();
            res.json(users);
        });
        /* this api has been used to upload sectors info in database
        app.post('/sectors', async (req, res) => {
            const newSector = req.body;
            const result = await sectorsCollection.insertOne(newSector);
            res.json(result);
        })*/

        // ------- api > save new submission in users collection --------
        app.post('/users', async (req, res) => {
            const newSubmission = req.body;
            const result = await usersCollection.insertOne(newSubmission);
            res.json(result);
        })

        // -------- api > find one/multiple submission info in database --------
        app.post('/users/find', async (req, res) => {
            const ids = req.body.map(id => ObjectId(id));
            const query = { _id: { '$in': ids } }
            const cursor = usersCollection.find(query)
            const result = await cursor.toArray()
            res.json(result);
        })

        // ------- api > edit/modify submitted info in database -------
        app.put('/users', async (req, res) => {
            const newInfo = req.body;
            const query = { _id: ObjectId(newInfo._id) }
            delete newInfo._id
            const cursor = { '$set': newInfo }
            const result = await usersCollection.updateOne(query, cursor);
            res.json(result);
        })
    } finally {
        // await client.close() 
    }
}

start_server().catch(console.dir);
