// class = blueprint, class instance = house
class Person {
  #social = '';

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName = () => `${this.firstName} ${this.lastName}`;

  get ssn() {
    return `***-**-${this.#social.substring(this.#social.length - 4)}`;
  }
  set ssn(social) {
    this.#social = social;
  }
}

const person1 = new Person('Tim', 'Corey');
const person2 = new Person('Sue', 'Storm');

console.log(person1.lastName);
console.log(person2.lastName);

person1.ssn = '123-45-6789';

console.log(person1.ssn);
console.log(person1.getFullName())

