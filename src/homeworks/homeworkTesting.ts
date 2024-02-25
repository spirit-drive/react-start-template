

// для каждого типа пользователей в базе данных устанавливается своя скидка на все товары
enum TypeUsers  {
  Standard = 'standard',
  Premium = 'premium',
  Gold = 'gold',
  Free = 'free'
}

//для конкретного типа товаров может быть своя скидка у конкретного типа пользователей
enum TypeProduct {
  Car = 'car',
  Toy = 'toy',
  Food = 'food'
}

class AccountService {
  private readonly userType: string;
  private readonly typeProduct: string;
  constructor(userType: string, typeProduct: string) {
    this.userType = userType
    this.typeProduct = typeProduct
  }

  private getSpecialDiscountOnProductInPercent(): number {
    switch (this.typeProduct) {
      case TypeProduct.Car:
        return this.userType === TypeUsers.Gold ? 3 : 0;
      case TypeProduct.Toy:
        return this.userType === TypeUsers.Gold || this.userType === TypeUsers.Premium ? 10 : 0
      case TypeProduct.Food:
        return this.userType === TypeUsers.Gold || this.userType === TypeUsers.Premium || this.userType === TypeUsers.Standard ? 15 : 0
      default:
        return 0;
    }
  }

  private getDiscountForUserTypeInPercent(): number {
     switch (this.userType) {
       case TypeUsers.Gold:
         return 25
       case TypeUsers.Premium:
         return 20
       case TypeUsers.Standard:
         return 10
       case TypeUsers.Free:
         return 0
     }
  }

  public getFullDiscount(): number {
    return this.getDiscountForUserTypeInPercent() + this.getSpecialDiscountOnProductInPercent()
  }
}

export default AccountService

