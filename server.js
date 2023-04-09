import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import Data from "./data.js"
import Videos from "./models/dbModel.js"

// set port, listen for requests
const port = process.env.PORT || 9000;

// create express app
const app = express();

//* middleware 
// parse requests of content-type - application/json
app.use(express.json())
// allow cross origin requests
app.use(cors({ origin: "*" }))

    

//*DB config
const _connection_url = 'mongodb+srv://nandk4552:Le8lXnWMjkyhgJ8n@cluster0.3ttq1uw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(_connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// *API endpoints
// GET request to /
app.get('/', (req, res) => {
    res.send('Hello World')
})

// GET request to /v1/posts
app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})

// POST request to /v2/posts
app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        if (!data) {
            res.status(500).send("Internal Server Error")
        }
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
})
// GET request to /v2/posts
app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find();
        if (!data) {
            res.status(500).send("Internal Server Error");
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
})


// express app listening on port 9000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})