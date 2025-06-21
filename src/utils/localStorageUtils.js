export const getFromLS = (key) => JSON.parse(localStorage.getItem(key)) || null;
export const saveToLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
