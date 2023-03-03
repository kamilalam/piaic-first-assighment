"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(option => {
        const [key, value] = option.split(':');
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Tesla', 'Model S', 'color:black', 'sunroof:true');
console.log(myCar);
