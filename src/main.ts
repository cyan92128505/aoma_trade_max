import dotenv from "dotenv";
import express from 'express';
const MAX = require('max-exchange-api-node');

dotenv.config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const max = new MAX({
        accessKey: process.env.ACCESS_KEY,
        secretKey: process.env.SECRET_KEY
    });


    const rest = max.rest();

    Promise.all([
        rest.markets(),
        rest.orders({ market: 'maxtwd', state: ['wait', 'convert', 'done'] }),
    ]).then((value) => {
        console.dir(value);
        res.json(value);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

