const people = ['Tim', 'Sue', 'Mary', 'Bob'];

people.push('Greg');
const lastPerson = people.pop();

// console.log(people);

// console.log(people.indexOf('Tom'));

// console.log(Array.isArray(people));

// console.log(lastPerson.startsWith('G'));

people.push('Tom');
people.push('Tammy');
people.push('Barry');

const coolPeople = people.filter(function(person) {
    return person.startsWith('T');
});

console.log(coolPeople);
console.log(people);

console.log(lastPerson.substring(0, 1));

const firstLetters = people.map(function(_) {
    return _.substring(0, 1);
});

console.log(firstLetters);

