import React, { ReactElement } from 'react';
import style from './Product.module.sass';
import cn from 'clsx';
import { ToCart } from '@/components/ToCart';

type ProductProps = {
  className?: string;
  cost: number;
  image: string;
  name: string;
  category?: string;
  desc?: string;
  short: boolean;
};

export function Product({ className, name, desc, category, cost, short }: ProductProps): ReactElement {
  return (
    <div className={cn(style.root, { [style.short]: short }, className)}>
      <div className={style.name}>{name}</div>
      {category && <div className={style.category}>{category}</div>}
      {desc && <div className={style.desc}>{desc}</div>}
      <div className={style.cost}>{cost}₽</div>
      <ToCart />
    </div>
  );
}
