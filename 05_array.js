let cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];
// let people = [
//     { name: 'Ivan', budget: 5000 },
//     { name: 'Liza', budget: 4543 },
//     { name: 'Goga', budget: 1234 }
// ]
let fib = [1, 1, 2, 3, 5, 8, 13];

// cars.push('Reno'); // добавляет элемент в конец
// cars.unshift('Lada'); // добавляет элемент в начало
// console.log(cars);
// const firstCar = cars.shift(); // удаляет ПЕРВЫЙ элемент массива, но и возвращает его (можно записать в переменную)
// const lastCar = cars.pop(); // удаляет ПОСЛЕДНИЙ элемент массива, но и возвращает его (можно записать в переменную)
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars);
// console.log(cars.reverse()); // переворачивает массив

// let index = cars.indexOf('BMW');
// cars[index] = 'Dodge';
// console.log(cars);


// const index = people.findIndex(function (person) {
//     return person.budget === 1234;
// });
// console.log(people[index]);

// let findedPerson;
// for (let person of people) {
//     if (person.budget === 5000) {
//         findedPerson = person;
//     }
// }
// console.log(findedPerson);
// const person = people.find(function (person) {
//     return person.budget === 5000;
// });
// const person = people.find(person => person.budget === 5000)
// console.log(person);

// console.log(cars.includes('Ford')); // проверка наличия элемента в массиве (true/false)

// let upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// });
// let upperCaseCars = cars.map(function (car) {
//     return car.toUpperCase();
// });
// let upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars);
// console.log(cars); // исходный массив не меняется методом map()

// const pow2 = num => num ** 2;
// let sqrt = num => Math.sqrt(num);

// let pow2Fib = fib.map(pow2).map(Math.sqrt);
// console.log(pow2Fib);
// const pow2Fib = fib.map(pow2);
// const pow2FilteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(pow2Fib);
// console.log(pow2FilteredNumbers);


// Задача 1
// let text = 'Привет, я изучаю JavaScript';
// let reverseText = text.split('').reverse().join(''); // разделение строки на массив по выбранному символу + reverse() + объединяет массив в строку
// console.log(reverseText);


let people = [
    { name: 'Ivan', budget: 5000 },
    { name: 'Liza', budget: 4543 },
    { name: 'Goga', budget: 1234 }
];

const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
    acc += person.budget;
    return acc;
}, 0);
console.log(allBudget);


