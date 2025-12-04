function add(x = 2, y = 6) {
    return x + y;
}

// let result = add(2,3);
// console.log(result);

// result = add(4,5);
// console.log(result);

// console.log(add(2, 3));

// const moreResults = add(3,8) + add(2,11);
// console.log(moreResults);

// console.log(add());

// function greetUser() {
//     console.log('Hello user');
//     console.log('Welcome to our website.');
//     console.log('We hope you enjoy it.');

//     console.log(`The value of 5 + 3 = ${add(5,3)}`)
// }

// greetUser()

const subtract = (x, y) => x - y;

console.log(subtract(7, 3));

const people = ['Tim', 'Sue', 'Tammy'];

// const filtered = people.filter(p => p.substring(0, 1) === 'T');
const filtered = people.filter(function(p) {
    return p.substring(0,1) === 'T';
})

console.log(filtered);