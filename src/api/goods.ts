// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('error');
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((a: Good, b: Good) => (a.name.localeCompare(b.name))).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};