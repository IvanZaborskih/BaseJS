const person = {
    name: 'Ivan',
    age: 22,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed key',
    greet() {
        console.log('Greet for person');
    },
    info() {
        // console.log(this);  //this = person внутри самого person
        console.log('Пользователя зовут:', this.name);
    }
}

// console.log(person.name);
// const ageKey = 'age';
// console.log(person[ageKey]);
// console.log(person['complex key']);
// person.greet();

// person.age++;
// person.languages.push('fr');
// delete person['key_4'];
// console.log(person);

// let { name, age: personAge, languages } = person;
// console.log(name, personAge, languages);

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key: ', key);
//         console.log('value: ', person[key]);
//     }
// }
// let keys = Object.keys(person);
// console.log(keys);
// keys.forEach((key) => {
//     console.log('key: ', key);
//     console.log('value: ', person[key]);
// });


// Context
// person.info();

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this));
    },

    keysAndValue() {
        // console.log('Object Keys:', Object.keys(this));
        // console.log('Object Value:', Object.values(this));
        Object.keys(this).forEach((key) => {
            console.log(key, this[key]);
        });
    },

    withParams(top = false, center = false, bottom = false) {
        if (top) {
            console.log('------- Start ---------');
        }

        Object.keys(this).forEach(function (key, index, array) {
            console.log(key, this[key]);
            if (center && index !== array.length - 1) {
                console.log('----------------');
            }
        }.bind(this));

        if (bottom) {
            console.log('------- Bottom ---------');
        }
    }
}
// const bound = logger.keys.bind(person); // bind создает функцию
// bound();
// logger.keys.call(person); // call сразу вызывает функцию (принимает неограниченное количество параметров, сколько и метод)
// logger.keysAndValue.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]); // такой же как и call, только принимает всегда 2 параметра, второй всегда массив аргументов функции

