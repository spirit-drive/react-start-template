//Получить произвольную строку
export const getRandomString = (): string => {
  let randomString = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let i = 0;
  while (i <= 10) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    i++;
  }
  return randomString;
};

//Получить произвольное число
export const getRandomNumber = (maxValue: number, minValue = 0): number => {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};
