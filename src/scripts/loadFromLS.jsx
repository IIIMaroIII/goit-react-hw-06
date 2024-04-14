const loadFromLS = (key, baseData) => {
  const storedData = window.localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return baseData;
};

export default loadFromLS;
