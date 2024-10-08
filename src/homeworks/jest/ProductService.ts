import { userType, AccountService } from './AccountService';

type productCategory = 'Car' | 'Toy' | 'Food';

class ProductDiscount {
  userType: userType;
  percent: number;
}

export class ProductCategory {
  name: productCategory;
  discount: ProductDiscount[];
}

const productCategories: ProductCategory[] = [
  {
    name: 'Car',
    discount: [
      { userType: 'Gold', percent: 2 },
      { userType: 'Premium', percent: 2 },
    ],
  },
  { name: 'Food', discount: [{ userType: 'Premium', percent: 5 }] },
  {
    name: 'Toy',
    discount: [
      { userType: 'Gold', percent: 10 },
      { userType: 'Premium', percent: 10 },
      { userType: 'Standard', percent: 10 },
    ],
  },
];

export class ProductService {
  protected accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  getCategories(): ProductCategory[] {
    return productCategories;
  }

  getCategory(productCategory: productCategory): ProductCategory {
    return productCategories.filter((c) => c.name == productCategory)[0];
  }

  getDiscount(userId: number, productCategory: productCategory): number {
    const category = this.getCategory(productCategory);
    const user = this.accountService.getUser(userId);

    let discount = 0;
    if (user) {
      discount = user.type.discount;
    }

    if (user && category && category.discount.length > 0) {
      const productDiscount = category.discount.filter((category) => category.userType == user.type.userType)?.[0];

      if (productDiscount) {
        discount += productDiscount.percent;
      }
    }

    return discount;
  }
}
