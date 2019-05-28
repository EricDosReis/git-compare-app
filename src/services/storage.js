const setItem = (key, item) => {
  const repositories = JSON.parse(localStorage.getItem(key)) || [];

  repositories.push(item);
  localStorage.setItem(key, JSON.stringify(repositories));
};

const getItem = key => JSON.parse(localStorage.getItem(key)) || [];

export default {
  setItem,
  getItem,
};
