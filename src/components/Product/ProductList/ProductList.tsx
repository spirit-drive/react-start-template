import React, { memo } from 'react';
import { ShortProductCard } from '../ShortProductCard';
import './ProductList.scss';
import { Product } from 'src/types/ProductTypes';
import { Loader } from 'src/components/Loader/Loader';

interface ProductsListProps {
  products: Product[] | null;
  isLoading?: boolean;
  className?: string;
}

export const ProductList = memo(({ products, isLoading = false, className }: ProductsListProps) => {
  return (
    <div className="product-list p-5">
      {!products && isLoading && <Loader />}

      {!products?.length && !isLoading && <Loader />}

      {products?.map((product, i) => (
        <ShortProductCard key={i} product={product} />
      ))}
      {products && isLoading && <Loader />}
    </div>
  );
});

ProductList.displayName = 'ProductList';
