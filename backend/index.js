const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 1212;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bdnuvui.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => console.log(`http:localhost:${port}`));

async function start_server() {
    try {
        await client.connect();
        const database = client.db('sector_survey');
        const sectorsCollection = database.collection('sectors');
        const usersCollection = database.collection('users');

        app.get('/sectors', async (req, res) => {
            const cursor = sectorsCollection.find({});
            const users = await cursor.toArray();
            res.json(users);
        });
        /*app.post('/sectors', async (req, res) => {
            const newSector = req.body;
            const result = await sectorsCollection.insertOne(newSector);
            res.json(result);
        })*/
        app.post('/users', async (req, res) => {
            const newSubmission = req.body;
            const result = await usersCollection.insertOne(newSubmission);
            res.json(result);
        })
        app.post('/users/find', async (req, res) => {
            const ids = req.body.map(id => ObjectId(id));
            const query = { _id: { '$in': ids } }
            const cursor = usersCollection.find(query)
            const result = await cursor.toArray()
            res.json(result);
        })
    } finally {
        // await client.close() 
    }
}

start_server().catch(console.dir);
