import { parseISO } from "date-fns";
import { Category, Product } from "./types";

export type TCategoryRaw = {
    id: string;
    name: string;
    photo?: string;
    createdAt: string;
    updatedAt: string;
    commandId: string;
};

export type TProductGetRaw = {
    id: string;
    name: string;
    photo?: string;
    desc?: string;
    createdAt: string;
    updatedAt: string;
    oldPrice?: number;
    price: number;
    commandId: string;
    category: TCategoryRaw;
};

export class RawProductDto implements Product {
    id: string;
    name: string;
    photo?: string;
    desc?: string;
    createdAt: Date;
    updatedAt: Date;
    oldPrice?: number;
    price: number;
    commandId: string;
    category: Category;

    constructor({ id, name, photo, desc, createdAt, updatedAt, oldPrice, price, commandId, category }: TProductGetRaw) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.desc = desc;
        this.createdAt = parseISO(createdAt);
        this.updatedAt = parseISO(updatedAt);
        this.oldPrice = oldPrice;
        this.price = price;
        this.commandId = commandId;
        this.category = category ? new RawCategoryDto(category) : null;
    }
}

export class RawCategoryDto implements Category {
    id: string;
    name: string;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
    commandId: string;

    constructor({ id, name, photo, createdAt, updatedAt, commandId }: TCategoryRaw) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.createdAt = parseISO(createdAt);
        this.updatedAt = parseISO(updatedAt);
        this.commandId = commandId;
    }
}