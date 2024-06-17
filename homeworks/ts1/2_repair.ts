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
    set: Set<number>
    channel: BroadcastChannel
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type DataValue = Money | Percent;

export type Money = {
  type: 'Money';
  currency: string;
  amount: number;
};

export type Percent = {
  type: 'Percent';
  percent: number;
};

export type Data = Money | Percent;

const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return data.amount;

    case 'Percent':
      return data.percent;

    default: {
      const unhandled: never = data;
      throw new Error(`unknown type: ${data}`);
    }
  }
};
