import { AccountService, MIN_DISCOUNT_LIMIT, MAX_DISCOUNT_LIMIT, IUserDiscount, IProductDiscount, IUserProd } from './account-service';
import { MOCK_PROD_TYPE_DISCOUNT } from 'src/mocks/prod-type';
import { MOCK_USER_TYPE_DISCOUNT } from 'src/mocks/user-type';

const sizes = ['small', 'medium', 'large'] as const
type Size = typeof sizes[number]

describe('AccountService', () => {
    const accountService = new AccountService();

    it('add/remove user type discount test', () => {
        // Проверка добавления допустимой скидки
        const user = MOCK_USER_TYPE_DISCOUNT;
        user.amount = MIN_DISCOUNT_LIMIT;

        // Проверка удаления
        expect(accountService.AddUserDiscount(user)).toBeTruthy();
        accountService.RemoveUserDiscount(user.item);
        expect(accountService.GetUserDiscount(user.item)).toBeNull();

        // Проверка добавления минимума
        expect(accountService.AddUserDiscount(user)).toBeTruthy();
        expect(accountService.GetUserDiscount(user.item)).toEqual(user);

        // Проверка добавления максимума
        user.amount = MAX_DISCOUNT_LIMIT;
        expect(accountService.AddUserDiscount(user)).toBeTruthy();
        expect(accountService.GetUserDiscount(user.item)).toEqual(user);

        // Проверка добавления середины
        user.amount = (MAX_DISCOUNT_LIMIT - MIN_DISCOUNT_LIMIT) / 2;
        expect(accountService.AddUserDiscount(user)).toBeTruthy();
        expect(accountService.GetUserDiscount(user.item)).toEqual(user);

        // Проверка добавления недопустимой скидки
        var user2 = <IUserDiscount>{ item: "Standard", amount: MIN_DISCOUNT_LIMIT - 1 };
        expect(accountService.AddUserDiscount(user2)).toBeFalsy();
        expect(accountService.GetUserDiscount(user.item)).toEqual(user);

        user2.amount = MAX_DISCOUNT_LIMIT + 1;
        expect(accountService.AddUserDiscount(user2)).toBeFalsy();
        expect(accountService.GetUserDiscount(user.item)).toEqual(user);
    });

    it('clear user and get null test', () => {
        accountService.ClearUserDiscounts();
        expect(accountService.GetUserDiscount("Standard")).toBeNull();
    });

    it('add/remove product type discount test', () => {
        // Проверка добавления допустимой скидки
        var prod = MOCK_PROD_TYPE_DISCOUNT;
        prod.amount = MIN_DISCOUNT_LIMIT;

        // Проверка удаления
        expect(accountService.AddProductDiscount(prod)).toBeTruthy();
        accountService.RemoveProductDiscount(prod.item);
        expect(accountService.GetProductDiscount(prod.item)).toBeNull();

        // Проверка добавления минимума
        expect(accountService.AddProductDiscount(prod)).toBeTruthy();
        expect(accountService.GetProductDiscount(prod.item)).toEqual(prod);

        // Проверка добавления максимума
        prod.amount = MAX_DISCOUNT_LIMIT;
        expect(accountService.AddProductDiscount(prod)).toBeTruthy();
        expect(accountService.GetProductDiscount(prod.item)).toEqual(prod);

        // Проверка добавления середины
        prod.amount = (MAX_DISCOUNT_LIMIT - MIN_DISCOUNT_LIMIT) / 2;
        expect(accountService.AddProductDiscount(prod)).toBeTruthy();
        expect(accountService.GetProductDiscount(prod.item)).toEqual(prod);

        // Проверка добавления недопустимой скидки
        var prod2 = <IProductDiscount>{ item: <IUserProd>{ userType: "Standard", prodType: "Car" }, amount: MIN_DISCOUNT_LIMIT - 1 };
        expect(accountService.AddProductDiscount(prod2)).toBeFalsy();
        expect(accountService.GetProductDiscount(prod.item)).toEqual(prod);

        prod2.amount = MAX_DISCOUNT_LIMIT + 1;
        expect(accountService.AddProductDiscount(prod2)).toBeFalsy();
        expect(accountService.GetProductDiscount(prod.item)).toEqual(prod);
    });

    it('clear product and get null test', () => {
        accountService.ClearProductDiscounts();
        expect(accountService.GetProductDiscount(<IUserProd>{ userType: "Standard", prodType: "Car" })).toBeNull();
    });

    it('discount total test', () => {
        accountService.ClearAll();

        const user = MOCK_USER_TYPE_DISCOUNT;
        user.amount = 20;
        accountService.AddUserDiscount(user);

        var prod = MOCK_PROD_TYPE_DISCOUNT;
        prod.amount = 30;
        prod.item.userType = user.item;
        accountService.AddProductDiscount(prod);

        expect(accountService.TotalDiscount(prod.item)).toBe(50);

        prod.amount = MAX_DISCOUNT_LIMIT;
        accountService.AddProductDiscount(prod);

        // 20 + 100 => 100
        expect(accountService.TotalDiscount(prod.item)).toBe(100);
    });
})