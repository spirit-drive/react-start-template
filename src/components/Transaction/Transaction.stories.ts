import type { Meta } from '@storybook/react';

import { Transaction } from './Transaction';

const meta: Meta<typeof Transaction> = {
  title: 'Components/Transaction',
  component: Transaction,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Full = {
  args: {
    cost: 2000,
    name: 'Гараж',
    desc: 'Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
    category: 'Недвижимость',
    date: '11.12.2021',
  },
};

export const Short = {
  args: {
    cost: 2000,
    name: 'Гараж',
    desc: 'Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
    category: 'Недвижимость',
    date: '11.12.2021',
    short: true,
  },
};
