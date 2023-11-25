import type { Meta } from "@storybook/react";
import { FullProductDisplay } from "./FullProductDisplay";

const meta: Meta<typeof FullProductDisplay> = {
  title: "Компоненты/Product/FullProductDisplay",
  component: FullProductDisplay,
  tags: ["autodocs"],
};

export default meta;

export const Товар_1 = {
    args: {
      product: {
        id: 1,
        name: "Product 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur",
        photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
        createAt: "01.01.2023 23:59:59",
        oldPrice: 65,
        price: 70,
        category: {id: 1, name: "Платья", photo: ""},
        properties: {hit: "HIT", new: "NEW"},
      }
    },
};

export const Товар_2 = {
  args: {
    product: {
      id: 2,
      name: "Product 2",
      photos: ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg"],
      desc: "Lorem ipsum, dolor",
      createAt: "01.01.2023 23:59:59",
      oldPrice: "",
      price: 65,
      category: {id: 2, name: "Кофты", photo: ""},
      properties: {new: "NEW"},
    }
  },
};

export const Товар_3 = {
  args: {
    product: {
      id: 3,
      name: "Product 3 Lorem ipsum.",
      photos: ["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", ],
      desc: "Lorem ipsum",
      createAt: "01.01.2023 23:59:59",
      oldPrice: "",
      price: 100,
      category: {id: 3, name: "Кросовки", photo: ""},
      properties: {},
    }
  },
};

export const Товар_4 = {
  args: {
    product: {
      id: 4,
      name: "Product 4 Lorem ipsum dolor",
      photos: ["4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
      createAt: "01.01.2023 23:59:59",
      oldPrice: "",
      price: "",
      category: {id: 3, name: "Кросовки", photo: ""},
      properties: {hit: "HIT"},
    }
  },
};

export const Товар_5 = {
  args: {
    product: {
      id: 5,
      name: "Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur",
      photos: ["5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
      createAt: "01.01.2023 23:59:59",
      oldPrice: 70,
      price: 65,
      category: {id: 3, name: "Кросовки", photo: ""},
      properties: {hit: "HIT", new: "NEW"},
    }
  },
};

export const Товар_6 = {
  args: {
    product: {
      id: 6,
      name: "Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur",
      photos: ["6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", ],
      desc: "",
      createAt: "01.01.2023 23:59:59",
      oldPrice: 70,
      price: 65,
      category: {id: 2, name: "Кофты", photo: ""},
      properties: {hit: "HIT", new: "NEW"},
    }
  },
};

export const Товар_7 = {
  args: {
    product: {
      id: 7,
      name: "Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur",
      photos: ["7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum",
      createAt: "01.01.2023 23:59:59",
      oldPrice: 70,
      price: 65,
      category: {id: 2, name: "Кофты", photo: ""},
      properties: {hit: "HIT", new: "NEW"},
    }
  },
};

export const Товар_8 = {
  args: {
    product: {
      id: 8,
      name: "Product 8 Lorem ipsum dolor, sit amet consectetur",
      photos: ["8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", ],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,",
      createAt: "01.01.2023 23:59:59",
      oldPrice: 70,
      price: 65,
      category: {id: 3, name: "Кросовки", photo: ""},
      properties: {hit: "HIT", new: "NEW"},
    }
  },
};