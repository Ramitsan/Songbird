import { allLang } from './const';

// генерация случайного числа в заданном интервале, включительно
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// генерация случайного элемента из массива
const generateRandomElement = (arr) => {
  const index = getRandomInteger(0, arr.length - 1);
  return arr[index];
};

// если число(время в секундах или минутах) < 10, добавляем перед ним ноль
const addZero = n => n < 10 ? '0' + n : n;

export { generateRandomElement, addZero };

