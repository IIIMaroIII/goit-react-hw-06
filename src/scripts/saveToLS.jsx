const saveToLS = (key, list) => {
  return window.localStorage.setItem(key, JSON.stringify(list));
};

export default saveToLS;
