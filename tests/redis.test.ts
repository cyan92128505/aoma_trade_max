import "jest";
import { redisTest } from "../src/redis";

describe('radis test', () => {
    it('give key return value', async () => {
        let result = await redisTest();
        expect(result).toBe('value');
    });
});