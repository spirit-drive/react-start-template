import React, { ReactElement } from 'react';
import style from './Transaction.module.sass';
import cn from 'clsx';

type TransactionProps = {
  className?: string;
  cost: number;
  name: string;
  category?: string;
  desc?: string;
  date: string;
  short: boolean;
};

export function Transaction({ className, name, desc, date, category, cost, short }: TransactionProps): ReactElement {
  return (
    <div className={cn(style.root, className)}>
      <div className={style.name}>{name}</div>
      {category && <div className={style.category}>{category}</div>}
      {desc && <div className={style.desc}>{desc}</div>}
      {!short && date && <div className={style.date}>{date}</div>}
      <div className={style.cost}>{cost}₽</div>
      {short && <button>edit</button>}
    </div>
  );
}
