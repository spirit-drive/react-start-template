export const randomNumberGenerator = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
