// const name = 'Иван';
// const age = 22;

// function getAge() {
//     return age;
// }

// // console.log('Меня зовут ' + name + ' и мне ' + age + ' года'); // плохо
// console.log(`Меня зовут ${name} и мне ${getAge()} года.`);
// console.log(`Меня зовут ${name} и мне ${age < 30 ? 'меньше 30' : 'больше 30'} года.`);

// const output = `
// <div>This is div</div>
// <p>This if p</p>
// `
// console.log(output);


// const myName = 'Иван';
// console.log(myName.length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(1)); // какой символ в 1 индексе
// console.log(myName.indexOf('ан')); // входит ли данная строка в переменную и с какого индекса
// console.log(myName.indexOf('!'));
// console.log(myName.toLowerCase().startsWith('ив')); // начинается ли переменная с этих символов
// console.log(myName.endsWith('ан')); // заканчивается ли переменная этими символами
// console.log(myName.repeat(5));
// let spaces = '   hello.    hello   ';
// console.log(spaces.trim()); // убирает пробелы слева и справа
// console.log(spaces.trimLeft()); // убирает пробелы слева
// console.log(spaces.trimRight()); // убирает пробелы справа

function logPerson(s, name, age) {
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

let personName = 'Иван';
let personAge = '22';

let output = logPerson`Имя: ${personName}, возраст: ${personAge}!`;
console.log(output);


