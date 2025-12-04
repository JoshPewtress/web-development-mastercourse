let temperature = 68;

const hot = 71;
const cold = 65;

if (temperature < hot && temperature > cold) {
    console.log('It is a comfortable temperature');
} else if (temperature >= hot) {
    console.log('It is too hot');
} else if (temperature <= cold) {
    console.log('It is too cold');
} else {
    console.log('Unknown Temperature');
}

switch (true) {
    case temperature >= hot:
        console.log('It is too hot, switch.');
        break;
    case temperature <= cold:
        console.log('It is too cold, switch');
        break;
    case temperature < hot && temperature > cold:
        console.log('It is a good temperature, switch');
        break;
    default:
        console.log('Unknown temperature, switch');
        break;
}