import AccountService from '../homeworks/homeworkTesting';

describe('AccountService', () => {
  describe('getFullDiscount', () => {
    it('should return correct full discount for Gold user and Car product', () => {
      const accountService = new AccountService('gold', 'car');
      expect(accountService.getFullDiscount()).toBe(28);
    });

    it('should return correct full discount for Premium user and Toy product', () => {
      const accountService = new AccountService('premium', 'toy');
      expect(accountService.getFullDiscount()).toBe(30);
    });

    it('should return correct full discount for Free user and Food product', () => {
      const accountService = new AccountService('free', 'food');
      expect(accountService.getFullDiscount()).toBe(0);
    });
  });
});
