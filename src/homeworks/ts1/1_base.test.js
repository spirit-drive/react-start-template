import { transformCustomers } from './1_base';

describe('all', () => {
    it('transformCustomers', () => {
        const customers = [
            { id: 1, name: 'John', age: 25, isSubscribed: true },
            { id: 2, name: 'Mary', age: 40, isSubscribed: false },
            { id: 3, name: 'Bob', age: 32, isSubscribed: true },
            { id: 4, name: 'Alice', age: 22, isSubscribed: true },
            { id: 5, name: 'David', age: 48, isSubscribed: false },
        ];

        expect(transformCustomers(customers)).toEqual({
            1: { id: 1, name: 'John', age: 25, isSubscribed: true },
            2: { id: 2, name: 'Mary', age: 40, isSubscribed: false },
            3: { id: 3, name: 'Bob', age: 32, isSubscribed: true },
            4: { id: 4, name: 'Alice', age: 22, isSubscribed: true },
            5: { id: 5, name: 'David', age: 48, isSubscribed: false },
        });
    });
});
