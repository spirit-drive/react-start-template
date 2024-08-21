import { AccountService, User } from './AccountService';
import { ProductService, ProductCategory } from './ProductService';

const category: ProductCategory = {
    name: "Food",
    discount: [
        { userType: "Standard", percent: 5 },
        { userType: "Premium", percent: 10 }
    ]
};
const user: User = {
    id: 4,
    type: {
        userType: 'Premium',
        discount: 15
    }
};


beforeAll(() => {
    jest.spyOn(ProductService.prototype, 'getCategory').mockImplementation(() => category);
    jest.spyOn(AccountService.prototype, 'getUser').mockImplementation(() =>  user);
});

afterAll(() => jest.restoreAllMocks());

describe('accountService', () => {
    it('user types', () => {
        const userTypes = new AccountService().getUserTypes().map((item) => {
            return item.userType
        })
        expect(userTypes).toEqual(expect.arrayContaining(['Standard', 'Premium', 'Gold', 'Free']));
    });

    it('types with discount', () => {
        const userTypes = new AccountService().getUserTypes();
        expect(userTypes[0]).toHaveProperty('discount');
    });

    it('summ discount', () => {
        const accountService = new AccountService();
        const productService = new ProductService(accountService);
        const discount = productService.getDiscount(4, 'Food');
        expect(discount).toBe(25);
    });
});