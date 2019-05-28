import api from '../config/api';

const get = resource => fetch(`${api}/${resource}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }

    throw Error(`Request rejected with status ${res.status}`);
  });

export default {
  get,
};
