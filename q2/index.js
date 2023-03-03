"use strict";
const string = 'i love My MOM';
console.log(string.toLowerCase());
console.log(string.toUpperCase());
const titleString = string.split(' ').map((element, index) => {
    if (index === 0) {
        return element.toUpperCase();
    }
    else {
        return element.toLowerCase();
    }
}).join(' ');
console.log(titleString);
