"use strict";
function make_sandwich(...items) {
    console.log(`Make sandwich with ${items.join(",")}`);
}
make_sandwich("vegetable", 'meat', 'toast');
make_sandwich("potato", 'pine apple', 'salad');
make_sandwich("egg", 'milk', 'chilly');
