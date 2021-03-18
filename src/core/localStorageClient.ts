export const getItem = <TValue>(key: string): TValue | null => {
  const storageValue = localStorage.getItem(key);

  return storageValue && JSON.parse(storageValue);
};

export const setItem = <TValue>(key: string, value: TValue) => {
  const storageValue = JSON.stringify(value);

  localStorage.setItem(key, storageValue);
};
