import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, value: string) => {
  const [state, setState] = useState<string>(() => {
    const localValue = localStorage.getItem(key);
    return localValue || value;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};
