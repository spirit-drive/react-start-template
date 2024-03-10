
import React, { FC, useEffect, useRef, useState } from 'react';

import { ShopProductСart } from '../ShopProductСart/ShopProductСart';
import { Button } from '../Button/Button';

interface Product {
  price: number;
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface ListShopProductProductСartProps {
  products: Product[];
}

export const createRandomProduct = (createdAt: string): Product => {
  const rundomProductId: string = Math.random().toString(16).slice(-8);
  return {
    id: createdAt,
    name: 'Product_' + rundomProductId,
    image: 'IMG_' + rundomProductId,
    price: Math.floor(Math.random() * 10000),
    description: 'Description' + rundomProductId
  }
};

export const ListShopProduct: FC<ListShopProductProductСartProps> = ({ products }) => {
  const [listProducts, setlistProducts] = useState<Product[]>(products)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const createProduct = () => {
    setlistProducts([...listProducts, createRandomProduct(new Date().toISOString())])
  }

  useEffect(() => {
    const handleCallBackIntersection = function (entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {

        if (entry.isIntersecting) {
          createProduct()
          observer.unobserve(entry.target)
        }
      })
    }
    const observer = new IntersectionObserver(
      handleCallBackIntersection
      ,
      {
        threshold: 1,
        root: rootRef.current
      }
    )

    const target = targetRef.current

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [targetRef, rootRef, listProducts])

  return (
    <>
      <div ref={rootRef} className='MyRoot' style={{ maxHeight: '600px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {listProducts.map((product, index) => {
          return (
            <div ref={index === listProducts.length - 1 ? targetRef : null}>
              <ShopProductСart key={product.id} price={product.price} name={product.name} description={product.description} image={product.image} />
            </div>
          )
        })}
      </div>
      <div>
        <Button size={""} label={"Показать Ещё"} onClick={createProduct} />
      </div>
    </>
  );
};