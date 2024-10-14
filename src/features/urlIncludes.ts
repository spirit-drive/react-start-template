/**
 * Функция проверяет строку на вхождение в текущий url
 *
 * @param {string} str строка
 * @returns {boolean} результат
 */
export const urlIncludes = (str: string): boolean => {
  const recievedUrl = window.location.href.split('/');
  const conditionUrl = str.split('/');
  const compareObjects = (str1: string[], str2: string[]): boolean => str2.every((e: string) => str1.includes(e));

  return compareObjects(recievedUrl, conditionUrl);
};
