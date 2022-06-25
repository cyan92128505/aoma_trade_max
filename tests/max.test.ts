import "jest";
import { maxClientText } from "../src/max";
import dotenv from "dotenv";
dotenv.config();

describe('max test', () => {
    it('max client setup', async () => {
        let result = await maxClientText();
        expect(result).not.toBeUndefined();
    })
});