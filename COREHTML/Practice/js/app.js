'use strict';

const me = {
    firstName: 'Josh',
    lastName: 'Pewtress',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(me.fullName());
