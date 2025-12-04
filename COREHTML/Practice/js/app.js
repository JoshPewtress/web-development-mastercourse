const pets = ['Andy', 'Maisie', 'Luna', 'Trixie'];

const filtered = pets.filter(p => p.substring(0, 1) === 'M');

console.log(filtered);

const morePets = ['Moona', 'Mixie', 'Maan'];

morePets.forEach(p => pets.push(p));

console.log(pets);

pets.pop();
pets.pop();

console.log(pets);

const foods = ['Pizza', 'Chicken', 'Rice'];

function goodFood(foodName) {
    if (foods.includes(foodName)) {
        console.log('Thats a good food');
    } else {
        console.log('Gross food');
    }
}

goodFood('Rice');