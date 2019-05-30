const add = (key, item) => {
  const items = JSON.parse(localStorage.getItem(key)) || [];

  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
};

const getAll = key => JSON.parse(localStorage.getItem(key)) || [];

const update = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export default {
  add,
  getAll,
  update,
};
