"use strict";
let user_names = [];
if (user_names.length === 0) {
    console.log('we need some users');
}
else {
    for (let i = 0; i > user_names.length; i++) {
        if (user_names[i] === 'admin') {
            console.log(`hello admin, would u like to see the status of the report`);
        }
        else {
            console.log(`hello ${user_names[i]}, thank u for logging again`);
        }
    }
}
