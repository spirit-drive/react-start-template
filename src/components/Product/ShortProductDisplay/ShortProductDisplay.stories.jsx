import { ShortProductDisplay } from "./ShortProductDisplay";

export default {
  title: "Компоненты/Product/ShortProductDisplay",
  component: ShortProductDisplay,
  tags: ['autodocs'],
  argTypes: {
    product: {
      type: Object,
      description: "Информация о продукте",
    },
  }
}

const Template = (arg) => <ShortProductDisplay {...arg} />

export const Товар_1 = Template.bind({});
export const Товар_2 = Template.bind({});
export const Товар_3 = Template.bind({});
export const Товар_4 = Template.bind({});
export const Товар_5 = Template.bind({});
export const Товар_6 = Template.bind({});
export const Товар_7 = Template.bind({});
export const Товар_8 = Template.bind({});

Товар_1.args = {
  product: {
    id: "1",
    name: "Product 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur",
    photo: "1.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
    createAt: "01.01.2023",
    oldPrice: "$65",
    price: "$70",
    category: {id: "1", name: "Платья", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};

Товар_2.args = {
  product: {
    id: "2",
    name: "Product 2",
    photo: "2.jpg",
    desc: "Lorem ipsum, dolor",
    createAt: "01.01.2023",
    oldPrice: "",
    price: "$65",
    category: {id: "2", name: "Кофты", photo: ""},
    properties: {new: "NEW"},
  }
};

Товар_3.args = {
  product: {
    id: "3",
    name: "Product 3 Lorem ipsum.",
    photo: "3.jpg",
    desc: "Lorem ipsum",
    createAt: "01.01.2023",
    oldPrice: "",
    price: "$100",
    category: {id: "3", name: "Кросовки", photo: ""},
    properties: {},
  }
};

Товар_4.args = {
  product: {
    id: "4",
    name: "Product 4 Lorem ipsum dolor",
    photo: "4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
    createAt: "01.01.2023",
    oldPrice: "",
    price: "",
    category: {id: "3", name: "Кросовки", photo: ""},
    properties: {hit: "HIT"},
  }
};

Товар_5.args = {
  product: {
    id: "5",
    name: "Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur",
    photo: "5.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
    createAt: "01.01.2023",
    oldPrice: "$70",
    price: "$65",
    category: {id: "3", name: "Кросовки", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};

Товар_6.args = {
  product: {
    id: "6",
    name: "Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur",
    photo: "6.jpg",
    desc: "",
    createAt: "01.01.2023",
    oldPrice: "$70",
    price: "$65",
    category: {id: "2", name: "Кофты", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};

Товар_7.args = {
  product: {
    id: "7",
    name: "Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur",
    photo: "7.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum",
    createAt: "01.01.2023",
    oldPrice: "$70",
    price: "$65",
    category: {id: "2", name: "Кофты", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};

Товар_8.args = {
  product: {
    id: "8",
    name: "Product 8 Lorem ipsum dolor, sit amet consectetur",
    photo: "8.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
    createAt: "01.01.2023",
    oldPrice: "$70",
    price: "$65",
    category: {id: "3", name: "Кросовки", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};