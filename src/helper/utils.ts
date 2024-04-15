export const generateUniqId = () => Math.floor(Math.random() * Date.now() * Math.random() * 10000);

export const rand = () => Math.random().toString(36).substr(2);
