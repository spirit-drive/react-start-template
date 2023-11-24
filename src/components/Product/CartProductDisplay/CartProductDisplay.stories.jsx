import { CartProductDisplay } from "./CartProductDisplay";
import { ProductProps } from "../ProductPropsInterface";

export default {
  title: "Компоненты/Product/CartProductDisplay",
  component: CartProductDisplay,
  tags: ['autodocs'],
  argTypes: {
    product: {
      type: ProductProps,
      description: "Информация о продукте",
    },
  }
}

const Template = (arg) => <CartProductDisplay {...arg} />

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
    photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["5.jpg", "6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["6.jpg", "7.jpg", "8.jpg"],
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
    photos: ["7.jpg", "8.jpg"],
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
    photos: ["8.jpg"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
    createAt: "01.01.2023",
    oldPrice: "$70",
    price: "$65",
    category: {id: "3", name: "Кросовки", photo: ""},
    properties: {hit: "HIT", new: "NEW"},
  }
};