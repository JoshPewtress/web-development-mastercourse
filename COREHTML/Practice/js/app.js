class Hero {
    #additions = [];

    constructor(firstName, lastName, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }

    get additions() {
        this.#additions.forEach(_ => console.log(_));
    }
    set additions(moves) {
        this.#additions.push(moves);
    }

    fullName = () => `${this.firstName} ${this.lastName}`;
}

const dart = new Hero('Dart', 'Feld', 'Dragoon');
dart.additions = ['Double Slash', 'Inferno', 'Blazing Rush', 'Crush Dance'];

console.log(dart.fullName());
dart.additions;
console.log(dart.job);
console.log(dart.additions);
