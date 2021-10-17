// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log('Hello ', name);
// }

// Function Expression
// let greet2 = function greet2(name) {
//     console.log('Hello2 ', name);
// }

// greet('Ivan');
// greet2('Ivan');

// console.dir(greet);



// 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval);
//     } else {
//         console.log(counter++);
//     }
// }, 1000);



// 3 Стрелочные функции
// function greet(name) {
//     console.log('Hello', name);
// }

// const arrow = (name) => {
//     console.log('Hello', name);
// }

// const arrow2 = name => console.log('Hello', name); // если одна строчка в функции, то {} после => можно не писать
// const arrow3 = (name) => console.log('Hello', name);
// const arrow4 = (name, age) => console.log('Hello', name, 'age -', age);
// const arrowHello = () => console.log('Hello, world!'); // при отсутствии параметров, ставим пустые скобки

// greet('Ivan');
// arrow('Liza');
// arrow2('Goga');
// arrow3('Goga-2');
// arrow4('Boba', 20);
// arrowHello();

// const pow = num => num ** 2; // возвращает значение (без return)
// console.log(pow(7));



// 4 Параметры по умолчанию
// const sum = (a = 10, b = a * 5) => a + b;

// console.log(sum(2, 3));
// console.log(sum(2));
// console.log(sum());

// function sumAll(...all) {  //для передачи неограниченного количества параметров в функцию (записываются как массив)
//     let result = 0;

//     for (num of all) {
//         result += num;
//     }

//     return result;
// }

// console.log(sumAll(5, 5, 5, 5));



// 5 Замыкания
// function createMember(name) {
//     return function (lastName) {
//         console.log(name, lastName);
//     }
// }

// const logWithLastName = createMember('Ivan');
// console.log(logWithLastName('Zzz'));