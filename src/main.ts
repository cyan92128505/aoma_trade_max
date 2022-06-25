import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { maxClientText } from "./max";
import { redisTest } from "./redis";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('alive');
});

app.get('/max', (req, res) => {
    maxClientText().then((value) => res.json(value));
});

app.get('/redis', (req, res) => {
    redisTest().then((value) => res.json(value));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

