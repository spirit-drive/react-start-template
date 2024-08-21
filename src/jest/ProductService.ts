import { userType, AccountService } from "./AccountService";

type categoryName = 'Car' | 'Toy' | 'Food';

type ProductDiscount = {
    userType: userType;
    percent: number;
}

export interface ProductCategory {
    name: categoryName;
    discount: ProductDiscount[]
}

const productCategories: ProductCategory[] = [
    {
        name: "Car",
        discount: [
            { userType: "Gold", percent: 2 },
            { userType: "Premium", percent: 10 }
        ]
    },
    {
        name: "Food",
        discount: [
            { userType: "Standard", percent: 5 },
            { userType: "Premium", percent: 10 }
        ]
    },
    {
        name: "Toy",
        discount: [
            { userType: "Gold", percent: 10 },
            { userType: "Premium", percent: 10 },
            { userType: "Standard", percent: 10 }
        ]
    }
]

export class ProductService {

    protected accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService
    }

    getCategories(): ProductCategory[] {
        return productCategories;
    }

    getCategory(productCategory: categoryName): ProductCategory {
        return productCategories.filter(c => c.name === productCategory)[0];
    }

    getDiscount(id: number, productCategory: categoryName): number {
        const category = this.getCategory(productCategory);
        const user = this.accountService.getUser(id);

        let discount = 0;
        if (user) {
            discount = user.type.discount;
        }

        if (user && category && category.discount.length > 0) {
            const productDiscount = category.discount.filter((category) => category.userType === user.type.userType)[0];

            if (productDiscount) {
                discount += productDiscount.percent;
            }
        }

        return discount;
    }
}