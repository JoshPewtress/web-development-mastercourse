const testArray = ['First', 'Second', 'Third'];

console.log(testArray);

testArray.push('Fourth');
testArray.push('Fifth');

console.log(testArray);

const startsWithF = testArray.filter(function(_) {
    return _.startsWith('F');
});

console.log(startsWithF);

const poped = testArray.pop();

const newStartsWithF = testArray.filter(function(_) {
    return _.startsWith('F');
});

console.log(poped == 'Fifth');