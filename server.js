// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = "mongodb+srv://etozforyou:etozuntukmu123@cluster0.k8dbq0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the ETOZ_Website database");
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
});

const Video = mongoose.model('Video', videoSchema, 'Video'); // 'Video' is the name of the collection

// Endpoint to Get Videos
app.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to Get a Video by ID
app.get('/videos/:id', async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (video) {
            res.json(video);
        } else {
            res.status(404).json({ message: "Video not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`You're connected with the database`);
});
