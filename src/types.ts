export type ButtonBasketProps = {
    productCount: number,
}

export type ModalWindowProps = {
    visible: boolean,
    children: string,
}

export type DisplayProductProps = {
    coast: number,
    category: string,
    img: string,
    title: string,
    description: string,
}

export type DisplayProductBasketProps = Omit<DisplayProductProps, 'category' | 'description'> & {
    shortDescription: string
}

export type ShortDisplayProductProps = DisplayProductBasketProps