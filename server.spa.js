const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/service-worker.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'service-worker.js'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
