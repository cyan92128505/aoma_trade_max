
const MAX = require('max-exchange-api-node');


export async function maxClientText() {
    const max = new MAX({
        accessKey: process.env.ACCESS_KEY,
        secretKey: process.env.SECRET_KEY
    });


    const rest = max.rest();

    return await Promise.all([
        rest.markets(),
        rest.orders({ market: 'maxtwd', state: ['wait', 'convert', 'done'] }),
    ]).then((value) => {
        return value;
    });
}