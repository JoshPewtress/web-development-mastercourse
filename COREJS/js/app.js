// IIFE - Immediately Invoking Function Expression

const myName = 'Tim Corey';

// 3rd party script overwrote our function
// function greetUser() {
//   console.log('Welcome to our app');
// }

(function(app, fullName) {
  fullName = fullName;
  app.greetUser = function() {
    console.log(`Hello ${fullName}`);
  };
  app.Person = class {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };
})(window.app = window.app || {}, myName);

console.log(window.app);


// greetUser();
app.greetUser();
const p = new app.Person('Tim', 'Corey');
const q = new app.Person('Sue', 'Storm');
console.log(q.lastName);

(function(app) {
  app.sayGoodbye = function() {
    console.log('Goodbye my favorite user');
  }
})(window.app = window.app || {});

app.sayGoodbye();

(function(app) {
  app.greetUser = function() {
    console.log('Welcome to our other app!');
  }
})(window.otherApp = window.otherApp || {});

otherApp.greetUser();