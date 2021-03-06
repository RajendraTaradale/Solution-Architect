/*----------------------------Callback Class---------------------------------*/
const calc = () => {
    return 4 * 4;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);

/*----------------------------Singleton Class---------------------------------*/
let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;        
        } else {
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'grey');
const honda = new Car(2, "V8", 'red');

console.log(civic);
console.log(honda);

/*----------------------------Inheritance Class---------------------------------*/
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}


const civic = new Car(4, 'V6', 'grey');
const cx5 = new SUV(4, "V8", 'red');

console.log(civic);
console.log(cx5);
/*---------------------------Factory Class----------------------------------*/
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class carFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'red')
        }
    }
}

const factory = new carFactory();
const myHonda = factory.createCar('honda');

console.log(myHonda);

/*--------------------------Abstract Factory Class-----------------------------------*/
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'red')
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey')
            case 'sante fe':
                return new Car(2, "V8", 'red')
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

const cx5 = autoManufacturer('suv', 'cx5');

console.log(cx5);
/*----------------------------Mixin---------------------------------*/
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'red')
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;   
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey')
            case 'sante fe':
                return new Car(2, "V8", 'red')
        }
    }
}

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom!`);
        
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');

honda.revEngine();

/*-------------------------------------------------------------*/

typeof NaN // "number" 
typeof null // "object"
typeof undefined // "undefined"
typeof function foo() {} // "function"
56=='56' // true
78==='78' //  false

/*-------------------------------------------------------------*/
// Map vs filter
const numbers =[6 , 8 , 3];
const doubled =numbers.map(function(number){
 return number * 2;
});
console.log(doubled); // output [12 , 16 , 6]

//.filter() loops through data, 
//and filters out data that doesn't match the criteria that we set

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//Type Coercion refers to the automatic or implicit conversion of values from one type to another.

var val = '10' + 10;
console.log(val); //1010
console.log(1 + true) // 2

/*-------------------------------------------------------------*/
