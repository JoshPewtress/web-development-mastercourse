var a = 1;
let b = 11;
const c = 21;

/*
if (true) {
    var a = 2; // overwrote global `a`
    let b = 12;
    const c = 22;
}
*/

/*
function testing() {
    var a = 2;
    let b = 12;
    const c = 22;
}
testing();
*/

/*
for (let i = 0; i < 1; i++) {
    var a = 2; // overwrote global `a`
    let b = 12;
    const c = 22;
}
*/

console.log(a);
console.log(b);
console.log(c);