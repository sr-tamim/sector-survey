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

async function run() {
    try {
        await client.connect();
        const database = client.db('sector_survey');
        const sectorsCollection = database.collection('sectors');

        app.get('/sectors', async (req, res) => {
            const cursor = sectorsCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        });
        app.post('/sectors', async (req, res) => {
            const newSector = req.body;
            const result = await sectorsCollection.insertOne(newSector);
            res.json(result);
        })
    } finally {
        // await client.close() 
    }
}

run().catch(console.dir);
