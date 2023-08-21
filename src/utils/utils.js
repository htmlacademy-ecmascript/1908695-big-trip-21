function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomPositiveInteger = (min, max) => {

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function capitalize (string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}
export {getRandomArrayElement, getRandomPositiveInteger, capitalize};
