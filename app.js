const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Multer setup for handling file uploads
const upload = multer();

// Simple endpoint for file upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Send back the file size to the client
    res.send({ fileSize: req.file.size });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
