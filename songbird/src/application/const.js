const categoriesNamesRu = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
const categoriesNamesEn = ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'];

const allLang = ['ru', 'en'];

let hash = window.location.hash.substring(1);


export { categoriesNamesRu, categoriesNamesEn, allLang, hash };