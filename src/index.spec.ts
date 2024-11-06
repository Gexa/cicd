import { add } from "./index"

describe('test', () => {

    it('should add 2 numbers correctly', () => {
        expect(add(1, 2)).toBe(3)
    })
})