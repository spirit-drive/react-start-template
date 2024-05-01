
export const setThemeLocalStorage = (theme: string): void => {
  localStorage.setItem('theme', theme);
};

export const getThemeLocalStorage = (): string => {
  return localStorage.getItem('theme');
};

export const setLanguageLocalStorage = (language: string): void => {
  localStorage.setItem('language', language);
};

export const getLanguageLocalStorage = (): string => {
  return localStorage.getItem('language');
};

export const getIsLoginLocalStorage = ():string => {
  return localStorage.getItem('isLogin');
}

export  const setIsLoginLocalStorage = (): void => {
  localStorage.setItem('isLogin', 'login')
}

export  const clearIsLoginLocalStorage = (): void => {
  localStorage.removeItem('isLogin');
  removeEmailLocalStorage();
}

export const setEmailLocalStorage = (email: string): void => {
  localStorage.setItem('email', email );
}

export const getEmailLocalStorage = () => {
  return localStorage.getItem('email');
}

const removeEmailLocalStorage = () => {
  localStorage.removeItem('email');
}

export const setUserNameLocalStorage = (userName: string) => {
  localStorage.setItem('userName', userName);
}

export const getUserNameLocalStorage = () => {
  return localStorage.getItem('userName');
}

export const getProductBasketListLocalStorage = () => {
  return JSON.parse(localStorage.getItem('productBasketList'));
}

export const setProductBasketListLocalStorage = (product: any) => {
  localStorage.setItem('productBasketList', JSON.stringify(product));
}

export const removeProductFromBasketLocalStorage = (id: string) => {
   const productsString = localStorage.getItem('productBasketList');
   if (!productsString) {
       console.error('Нет productBasketList в localStorage');
       return;
   }
   
   try {
       const products = JSON.parse(productsString);

       const index = products.findIndex((product: { id: string }) => product.id === id);
       
       if (index !== -1) {
           products.splice(index, 1);

           localStorage.setItem('productBasketList', JSON.stringify(products));
       } else {
           console.error(`Товар с id ${id} не наиден в localStorage`);
       }
   } catch (error) {
       console.error('Ошибка удаления из localStorage:', error);
   }
}