import React, { memo, useCallback, useRef } from 'react';
import { selectError, selectFilter, selectHasMore, setCurrentPage } from 'src/app/store/product';
import { ProductList } from 'src/components/Product/ProductList';
import { useFetchProductsQuery } from 'src/shared/api/rtk/productApi';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/redux';
import { useInfiniteScroll } from 'src/shared/hooks/useInfiniteScroll';
import s from './ProductsInfinityList.module.scss';

export const ProductsInfinityList = memo(() => {
  const catalog = useAppSelector((selectProducts) => selectProducts.product, {
    devModeChecks: { stabilityCheck: 'never' },
  });
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilter);
  const hasMore = useAppSelector(selectHasMore);
  const dispatch = useAppDispatch();

  const { isFetching } = useFetchProductsQuery(filter);

  const handleLoadMore = useCallback(() => dispatch(setCurrentPage()), [dispatch]);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({ triggerRef, wrapperRef, action: handleLoadMore });

  if (error && !catalog.products?.length) return <h4>error</h4>;

  return (
    <div ref={wrapperRef}>
      <ProductList className={s.list} products={catalog.products} isLoading={false} />
      {error && <h4>error</h4>}

      {hasMore && !isFetching && !error && <div ref={triggerRef} className={s.trigger} />}
    </div>
  );
});

ProductsInfinityList.displayName = 'ProductsInfinityList';
