import { ProductType } from "src/models/prod-types";
import { UserType } from "src/models/user-types";

// Скидка
interface IDiscount<T> {
    item: T
    amount: number
}

// Общая скидка для конкретного типа пользователей в процентах
export interface IUserDiscount extends IDiscount<UserType> { }

// Составной идентификатор пользователя-товара
export interface IUserProd {
    userType: UserType;
    prodType: ProductType;
}

// Скидка на конкретный тип товара для конкретного типа пользователей в процентах
export interface IProductDiscount extends IDiscount<IUserProd> { }

// Сервис скидок
interface IAccoutnService {

    // Валидация значения скидки
    IsDiscountValid(value: number): boolean;

    // Добавить скидку на тип товара и тип пользователя
    AddProductDiscount(discount: IProductDiscount): boolean;

    // Добавить скидку на тип пользователя
    AddUserDiscount(discount: IUserDiscount): boolean;

    //  Удаление скидок для всех типов пользователей и всех типов товаров
    ClearAll(): void;

    // Удаление скидок для всех типов пользователей
    ClearProductDiscounts(): void;

    // Удаление скидок для всех типов товаров
    ClearUserDiscounts(): void;

    // Получение скидки для типа товара
    GetProductDiscount(key: IUserProd): IProductDiscount | null;

    // Получение скидки для типа пользователя
    GetUserDiscount(user: UserType): IUserDiscount | null;

    // Удалить скидку на тип товара и тип пользователя
    RemoveProductDiscount(key: IUserProd): void;

    // Удалить скидку на тип пользователя
    RemoveUserDiscount(userType: UserType): void;

    // Подсчет общего значения скидки
    TotalDiscount(key: IUserProd): number;
}

// Ограничения устанавливаемой скидки
export const MIN_DISCOUNT_LIMIT = 0;
export const MAX_DISCOUNT_LIMIT = 100;

type UserProdKey = `${UserType}-${ProductType}`;

// Реализация класса AccountService
export class AccountService implements IAccoutnService {
    userDiscount: { [key in IUserDiscount["item"]]?: IUserDiscount } = {};
    productDiscount: { [key in UserProdKey]?: IProductDiscount } = {};

    getKey(userProd: IUserProd): UserProdKey {
        return `${userProd.userType}-${userProd.prodType}`
    }

    IsDiscountValid(value: number) {
        return (value >= MIN_DISCOUNT_LIMIT) && (value <= MAX_DISCOUNT_LIMIT);
    }

    AddProductDiscount(discount: IProductDiscount) {
        if (!this.IsDiscountValid(discount.amount))
            return false;

        this.productDiscount[this.getKey(discount.item)] = discount;
        return true;
    };

    AddUserDiscount(discount: IUserDiscount) {
        if (!this.IsDiscountValid(discount.amount))
            return false;

        this.userDiscount[discount.item] = discount;
        return true;
    };

    ClearAll() {
        this.ClearProductDiscounts();
        this.ClearUserDiscounts();
    };

    // Удаление скидок для всех типов пользователей
    ClearProductDiscounts() {
        this.productDiscount = {};
    }

    // Удаление скидок для всех типов товаров
    ClearUserDiscounts() {
        this.userDiscount = {};
    };

    // Получение скидки для типа товара
    GetProductDiscount(key: IUserProd) {
        return this.productDiscount[this.getKey(key)] ?? null;
    }

    // Получение скидки для типа пользователя
    GetUserDiscount(user: UserType) {
        return this.userDiscount[user] ?? null;
    }

    RemoveUserDiscount(userType: UserType) {
        delete this.userDiscount[userType];
    };

    RemoveProductDiscount(key: IUserProd) {
        delete this.productDiscount[this.getKey(key)];
    };

    // Скидка расчитывается с накоплением
    TotalDiscount(key: IUserProd) {
        return Math.min(100,
            (this.userDiscount[key.userType]?.amount ?? 0) +
            (this.productDiscount[this.getKey(key)]?.amount ?? 0)
        );
    };
}