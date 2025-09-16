
export const getUser = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                login: 'log'
            })
        }, 200);
    })
}

const add = (x: number) => x + 42
const callbackSum = jest.fn(add)

describe('flow', () => {
    it('fear each', async () => {
        [10, 11].forEach(callbackSum);

        // function calls
        expect(callbackSum.mock.calls).toHaveLength(2)

        // the first argument of the first function call was 10
        expect(callbackSum.mock.calls[0][0]).toBe(10)
        expect(callbackSum.mock.calls[1][0]).toBe(11)

        // the return value of the first call
        expect(callbackSum.mock.results[0].value).toBe(52)
    })
})

describe('sum', () => {
    it('get users', async () => {
        const user = await getUser()
        expect(user).toEqual({login: 'log'})
    })
})


describe('sum', () => {
    it('should return', () => {
        expect(1 + 2).toBe(3)
    })

    it('should return', () => {
        expect(1 + 3).toBe(4)
    })
})