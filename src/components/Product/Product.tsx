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
  removable?: boolean;
};

export function Product({
  className,
  image,
  name,
  desc,
  category,
  cost,
  short,
  removable,
}: ProductProps): ReactElement {
  return (
    <div className={cn(style.root, { [style.short]: short }, className)}>
      <div className={style.main}>
        <div className={style.name}>{name}</div>
        {image && <div className={style.image}>{image}</div>}
        {short && category && <div className={style.category}>{category}</div>}
        {desc && <div className={style.desc}>{desc}</div>}
      </div>
      <div className={style.costWrapper}>
        <div className={style.cost}>{cost}₽</div>
      </div>
      <div className={style.actionWrapper}>
        {removable ? <button className={style.action}>Удалить</button> : <ToCart className={style.action} />}
      </div>
    </div>
  );
}
