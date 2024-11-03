type Result = Record<string, string | number | boolean | null | undefined>;

export const stringifyNestedObjects = (obj: object): Result => {
  const result: Result = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      result[key] = JSON.stringify(value);
      return;
    }

    result[key] = value;
  });

  return result;
};
