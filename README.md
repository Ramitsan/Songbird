# Songbird
Приложение-викторина для распознавания птиц по их голосам.

![203141210-0f44f5a1-abac-4145-8327-8fddc18e8ab8](https://user-images.githubusercontent.com/45296707/224593032-5d097d1a-563b-458e-b4ee-3d66e8d766ee.jpg)

#### Technologies & Tools: JavaScript(ES6), Webpack
#### Description: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md
#### Deploy: https://ramitsan.github.io/Songbird

### Вёрстка, дизайн, UI всех трёх страниц приложения
- [x] Стартовая страница приложения (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) 
- [x] Страница викторины (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) 
- [x] Страница с результатами (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх)

### Аудиоплеер
- [x] кастомный, есть регулятор громкости звука

### Верхняя панель страницы викторины 
- [x] правильное отображение счета игры
- [x] текущий вопрос выделяется стилем 

### Блок с вопросом 
- [x] подстановка дефолтного изображения и замена названия птицы на символы (***), пока игрок не выберет правильный ответ 
- [x] при выборе правильного ответа в блоке с вопросом отображается изображение и название загаданной птицы 

### Блок с вариантами ответов (названия птиц)
- [x] цветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы
- [x] звуковая индикация правильного/неправильного ответа
- [x] при выборе правильного или неправильного ответа издаются разные звуковые сигналы
- [x] при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться
- [x] при выборе правильно ответа проигрывание аудиоплеера должно остановиться
- [x] при клике по названию птицы в блоке с описанием птицы отображается информацию о ней
- [x] если правильный ответ уже дан, возможность просматривать описания птиц при клике по вариантам ответов остаётся, цвет индикаторов при этом не изменяется

### Блок с описанием птицы
- [x] пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал
- [x] при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней 
Информация о птице включает:
изображение
название (на русском и на латыни)
аудиоплеер с записью голоса
дополнительное описание птицы.

### Кнопка перехода к следующему вопросу 
- [x] пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет
- [x] после правильного ответа на последний вопрос игрок переходит к странице с результатами викторины 
- [x] страница с результатами содержит количество набранных баллов и кнопку с предложением сыграть ещё раз (или уведомление об окончании игры, если набрано максимальное количество баллов) 

### Extra scope +20
Можно выбрать предложенные варианты или придумать свои, аналогичные им по сложности
- [x] локализация приложения на два языка, выбранный язык хранится в local storage и сохраняется при перезагрузке
- [x] создание галереи всех птиц приложения c информацией о них (фото, аудио, название, описание) 
