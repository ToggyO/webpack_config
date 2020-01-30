import { Request, Response } from 'express';

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3010;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', function (_req: Request, res: Response) {
    return res.send('pong');
});

app.get('/service-worker.js', function (_req: Request,res: Response) {
    res.sendFile(path.join(__dirname, 'dist', 'service-worker.js'));
});

app.get('/*', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
