// 1 Переменные
// const name = 'Иван';
// let age = 22;

// console.log(age);



// 2 Мутирование
// console.log('Имя человека: ' + name + ', а возраст человека: ' + age);
// alert('Имя человека: ' + name + ', а возраст человека: ' + age);

// const lastName = prompt('Введите фамилию');
// alert(name + ' ' + lastName)



// 3 Операторы
// let currentYear = 2021;
// const birthYear = 1999;

// let age = currentYear - birthYear;
// console.log(age);

// const a = 10;
// const b = 5;
// let c = 1;

// c += a;
// console.log(c);

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);



// 4 Типы данных
// const isProgrammer = true;
// const name = 'Ivan';
// let age = 22;
// let x;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);



// 5 Приоритет операторов
// let fullAge = 22;
// let currentYear = 2021;
// let birthYear = 1999;

// let isFullAge = currentYear - birthYear <= fullAge;
// console.log(isFullAge);



// 6 Условные операторы
// let courseStatus = 'ready';

// if (courseStatus === 'ready') {
//     console.log('Course ready!');
// } else if (courseStatus === 'working') {
//     console.log('Course is developing...');
// } else {
//     console.log('Course not started yet, please wait');
// }

// let isReady = true;
// if (isReady) {
//     console.log('All ready');
// } else {
//     console.log('Noting ready!!!');
// }
// Тернарное выражение
// isReady ? console.log('All ready') : console.log('Noting ready!!!');



// 7 Логические операторы
// https://developer.mozilla.org.cach3.com/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators



// 8 Функции
// function calculateAge(year) {
//     return 2021 - year;
// }

// // console.log(calculateAge(1999));
// function logInfoAbout(name, year) {
//     let age = calculateAge(year);

//     console.log('Имя: ' + name + '. Возраст: ' + age);
// }

// logInfoAbout('Ivan', 1999);



// 9 Массивы
// let cars = ['Porshe', 'Mersedes', 'BMW'];
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[3]);

// cars[0] = 'Mazda';
// console.log(cars);



// 10 Циклы
// let cars = ['Porshe', 'Mersedes', 'BMW'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// // внизу упрощенный вариант новый
// for (let car of cars) {
//     console.log(car);
// }



// 11 Объекты
// let person = {
//     firstName: 'Ivan',
//     lastName: 'Zaborskikh',
//     year: 1999,
//     languages: ['Ru', 'En'],
//     hasGirl: true,
//     greet: function () {
//         console.log('Greet');
//     }
// };

// console.log(person.firstName);
// console.log(person['lastName']);

// let key = 'year';
// console.log(person[key]);

// person.greet();

// person.hasGirl = false;

// person.newKey = 'newKey';
// console.log(person);




