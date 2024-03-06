/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};
console.log(getFakeApi());

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  private set: Set<number>;
  private channel: BroadcastChannel;
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}
console.log(new SomeClass());

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
const getDataAmount = (data: Data): number | void => {
  switch (data.type as string) {
    case 'Money':
      return (data.value as Money).amount;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled = (): never => {
        // здесь, возможно, нужно использовать нечто другое. :never должен остаться
        throw new Error(`unknown type: ${data.type}`);
      };
    }
  }
};

const money: Money = { currency: 'RUB', amount: 100 };
const data1: Data = { type: 'Money', value: money };
console.log(getDataAmount(data1));

const percent: Percent = { percent: 11 };
const data2: Data = { type: 'Percent', value: percent };
console.log(getDataAmount(data2));
