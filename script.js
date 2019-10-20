// 1  (Estimated time:60min     Actual time:70 min)

let calculator = {
    read: () => {
        calculator.x = +prompt('Введите цифру для x', '5');
        calculator.y = +prompt('Введите цифру для y', '5');
    },
    sum: () => {
        return calculator.x + calculator.y;
    },
    multi: () => {
        return calculator.x * calculator.y;
    },
    diff: () => {
        return calculator.x - calculator.y;
    },
    div: () => {
        return calculator.x / calculator.y;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );

// 2  (Estimated time:40min     Actual time:40 min)

const coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        setTimeout(() => {
            alert(this.message);
        }, 3000);
    }
};
coffeeMachine.start();

// 3 (Estimated time:40min     Actual time:45 min)

const counter = {
    value: 0,
    inc: function() {
        counter.value++;
        return this;
    },
    dec: function() {
        counter.value--;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};
const current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

// 4 (Estimated time: 100 min     Actual time: 160 min)

const modernCalculator = {
    getSum: (x, y) => {
        this.x = x;
        this.y = y;
        return `${x} + ${y} = ${calculator.sum.call(this)}`;
    },
    getMulti: (x, y) => {
        this.x = x;
        this.y = y;
        return `${x} * ${y} = ${calculator.multi.call(this)}`;
    },
    getDiff: (x, y) => {
        this.x = x;
        this.y = y;
        return `${x} - ${y} = ${calculator.diff.call(this)}`;
    },
    getDiv: (x, y) => {
        this.x = x;
        this.y = y;
        return `${x} / ${y} = ${calculator.div.call(this)}`;
    }
};
alert(modernCalculator.getSum(2, 1));
alert(modernCalculator.getMulti(2, 1));
alert(modernCalculator.getDiff(2, 1));
alert(modernCalculator.getDiv(2, 1));

//5 (Estimated time: 40 min     Actual time: 35 min)

function format(start, end) {
    console.log(start + this.name + end);
}

let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
format.call(country, ' ', ' ');
format.apply(country, ['[', ']']);
format.call(country.capital, ' ', ' ');
format.apply(country.capital, [' ', ' ']);
format.apply(country.capital.name, [' ', ' ']);

//6 (Estimated time: 30 min     Actual time: 30 min)

function format1(start, end) {
    console.log(start + this.name + end);
}

let user = {
    name: 'John'
};
let userFormat = format1.bind(user);
userFormat('<<<', '>>>');
format1.call(user, '<<<', '>>>');

//7 (Estimated time: 60 min     Actual time: 40 min)

function concat(a, b, c) {
    return a + b + c
};
concat('John', ' ', 'Dou');
let name = concat.bind(null, 'Hello', ' ');
let name1 = name.bind(null, 'Hello', ' ');
name3 = name('World');
name3 = name('John');

//Рекурсия
//1 (Estimated time: 60 min     Actual time: 50 min)

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log( pow(2, 3) );

function pow1(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a * pow1(a, b - 1);
    }
}

console.log( pow1(2, 3) );

//2 (Estimated time: 100 min     Actual time: 110 min)

function sum(arr, plus) {
    plus += arr.shift();
    if(arr.length !== 0) {
        plus = sum(arr, plus);
    }
    return plus;
}
console.log( sum([1, 2, 3, 4, 5], 0) );