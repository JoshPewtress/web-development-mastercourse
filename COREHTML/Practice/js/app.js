const family = {
    husband: 'Josh',
    wife: 'Brittany',
    pets: {
        andy: 'Dog',
        maisie: 'Dog',
        luna: 'Cat',
        trixie: 'Cat'
    },
    listPets: function()  {
        return `${this.pets.andy}, ${this.pets.maisie}, ${this.pets.luna}, ${this.pets.trixie}`;
    }
};

function listObject(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            console.log(key + ':');
            listObject(obj[key]);
        } else if (typeof obj[key] === 'function') {
            console.log(obj[key]());
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

listObject(family);

const { pets: { andy } } = family;

console.log(andy);

const json = JSON.stringify(family);
console.log(json);
const reverted = JSON.parse(json);
console.log(reverted);