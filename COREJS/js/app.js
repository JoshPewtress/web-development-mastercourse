const person = {
    firstName: 'Tim',
    lastName: 'Corey',
    age: 42,
    isAlive: true,
    // thisTest: this,
    address: {
        city: {
            town: 'Dallas'
        },
        state: 'TX'
    },
    fullName: function() {
        // console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
};

// function test() {
//     return this;
// }
// console.log(test());


// person.firstName = 'Timothy';
// person.address.country = 'USA';

// console.log(person.fullName());
// console.log(person.thisTest);

// function greetUser(p) {
//     console.log(`Hello ${p.fullName()}`);
// }

// greetUser(person)

// Deconstructor
// const { firstName:fn, age, address: { city: { town } } } = person;

// console.log(town);

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key]}`);
//     }
// }

// JSON - JavaScript Object Notation
// delete person.fullName;

console.log(JSON.stringify(person));

const receivedInfo = JSON.stringify(person);

const parsedInfo = JSON.parse(receivedInfo);

console.log(parsedInfo.firstName);

// const user = {
//   firstName: 'Dart',
//   lastName: 'Feld',
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   } 
// };

// for (const p in user) {
//     if (typeof user[p] === 'function') {
//         console.log(`${p}: ${user[p]()}`);
//     } else {
//         console.log(`${p}: ${user[p]}`);
//     }
// }

const pizza = {
  toppings: {
    rightHalf: {
      cheese: 'Parmesan',
      meat: 'Bacon',
      veggies: 'Black Olives'
    },
    leftHalf: {
      meat: 'Pepperoni'
    }
  }
};

const {toppings: { rightHalf: { cheese: rightCheese }}} = pizza;

console.log(rightCheese);