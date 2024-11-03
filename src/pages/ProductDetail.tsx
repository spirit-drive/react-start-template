import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FullProductCard } from 'src/components/Product/FullProductCard';
import { useFetchProductByIdQuery } from 'src/shared/api/rtk/productApi';

export const ProductDetail = memo(() => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useFetchProductByIdQuery(id || '', { skip: !id });

  if (isLoading) return <h4>loading...</h4>;

  if (!product) return <h4>error</h4>;
  return (
    <div className="app-content">
      <FullProductCard
        name={product.name}
        photo={product.photo}
        desc={product.desc}
        oldPrice={product.oldPrice}
        price={product.price}
        id={product.id}
        updatedAt=""
        commandId=""
        categoryId={product.categoryId}
        category={product.category}
        createdAt={product.createdAt}
      />
    </div>
  );
});

ProductDetail.displayName = 'ProductDetail';
