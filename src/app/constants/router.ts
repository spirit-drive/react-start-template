export const ROUTER_PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ACCOUNT: '/account',
  PROFILE_SETTINGS: '/account/settings',
  CATEGORY: '/category',
  PRODUCTS: '/product',
  PRODUCT: (id: string) => `/product/${id}`,
  CART: '/cart',
} as const;
