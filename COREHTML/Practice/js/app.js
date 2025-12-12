'use strict';

// const sections = document.querySelectorAll('.topics-section');
// const sectionsArray = Array.from(sections);

// sectionsArray.forEach(el => console.log(el));

const navigation = document.querySelector('nav');
let navItem = navigation.querySelector('li');

while (navItem !== null) {
    console.log(navItem);
    navItem = navItem.nextElementSibling;
}



