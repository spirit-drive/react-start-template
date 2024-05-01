// import { useCallback, useEffect } from 'react';
// import { useStore } from '../helper/useStore';
// import { createRandomProduct } from '../homeworks/ts1/3_write';

// export const useIntersectionObserver = () => {
//   const { addProduct } = useStore();

//   const handleScroll = useCallback(() => {
//     const isAtEndOfList = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

//     if (isAtEndOfList) {
//       const randomProduct = createRandomProduct('now');
//       const validProduct = {
//         id: randomProduct.id,
//         name: randomProduct.name,
//         photo: 'http://placehold.it/50x50',
//         desc: randomProduct.desc,
//         createdAt: randomProduct.createdAt,
//         updatedAt: randomProduct.updatedAt,
//         key: randomProduct.id,
//         price: randomProduct.price,
//         category: randomProduct.category.name
//       }
//       addProduct(validProduct);
//     }
//   }, [addProduct]);

//   useEffect(() => {
//     const scrollListener = () => handleScroll();

//     window.addEventListener('scroll', scrollListener);

//     return () => {
//       window.removeEventListener('scroll', scrollListener);
//     };
//   }, [handleScroll]);
// };
