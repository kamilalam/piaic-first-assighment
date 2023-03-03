"use strict";
let magicianNames = ['saleem', 'umran', 'ali', 'nasir'];
function make_great(magicianNames) {
    for (let magician of magicianNames) {
        console.log(` Great ${magician}`);
    }
}
make_great(magicianNames);
