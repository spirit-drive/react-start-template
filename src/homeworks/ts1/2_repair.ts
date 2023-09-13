/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить

export class SomeClass {
  set: object;
  channel: object;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

export type DataValue = Money | Percent;

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
// const getDataAmount = (data: Data): number => {
//   switch (data.type) {
//     case 'Money':
//       return data.value.amount; // не понятно как можно вернуть из Типа числовое значение amount

//     default: {
//       const unhandled: never = data.type; // здесь, возможно, нужно использовать нечто другое. :never должен остаться
//       throw new Error(`unknown type: ${unhandled}`);
//     }
//   }
// };
