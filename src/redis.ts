import { createClient } from 'redis';

export async function redisTest() {

    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('key', 'value');
    const value = await client.get('key');

    return value;

}
