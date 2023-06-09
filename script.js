'use strict';
const bookings = [];

const flightBookings = function (
  flightNo,
  numberOfPass = 1,
  costPerPass = 5000,
  totalAmount = numberOfPass * costPerPass
) {
  const booking = {
    flightNo,
    numberOfPass,
    costPerPass,
    totalAmount,
  };
  console.log(booking);
  bookings.push(booking);
};

flightBookings('TAI1718', 20, 6000);
flightBookings('TAI1236');
flightBookings('KF2534', 5);
flightBookings('ING4536', undefined, 15000);

const flight = 'TAI1718';
const sunil = {
  name: 'Sunil Kumar H S',
  passportNum: 1718010420,
};
const flightPass = [];

const flightCheckIn = function (flightNum, passenger) {
  flightNum = 'TAI010420';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passportNum === 1718010420) alert('Checked In!');
  else alert('Worng Password!!');

  const passDetails = {
    flightNum,
    passenger,
  };
  console.log(passDetails);
  flightPass.push(passDetails);
};

flightCheckIn(flight, sunil);

console.log(flight);

const newPassport = function (person) {
  person.passportNum = Math.trunc(Math.random() * 1000000000);
  console.log(person.passportNum);
};

newPassport(sunil);
flightCheckIn(flight, sunil);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

const transform = function (str, fnc) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fnc(str)}`);
  console.log(`Transformed By : ${fnc.name}`);
};

transform('Hi, I am Sunil Kumar HS', upperFirstWord);
transform(`Hi, I am Sunil Kumar HS`, oneWord);

const high5 = function () {
  console.log('✋');
};

document.body.addEventListener('click', high5);
['sunil', 'charan', 'sunilKV'].forEach(high5);

//return functions

const greetings = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greetings('Hey');
greetingHey('Sunil');
greetingHey('Charan');

greetings('Hello')('Sunil Kumar H S');

const arrowGreetings = greeting => name => {
  console.log(`${greeting} ${name}`);
};

// const arrowGreetings = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

arrowGreetings('hey,')('Sunil');

//call,apply,bind methods

const tataAirIndia = {
  name: 'Tata Air India',
  code: 'AI',
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} has booked the seat in ${this.name} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, passName });
  },
};

tataAirIndia.book(17, 'Sunil');
tataAirIndia.book(18, 'Charan');

console.log(tataAirIndia);
const indigo = {
  name: 'Indigo Airlines',
  code: 'IA',
  bookings: [],
};

const book = tataAirIndia.book;
book.call(indigo, 26, 'Sunil H S');
console.log(indigo);

const flightDetail = [18, 'Sunil Kumar H S'];
book.apply(tataAirIndia, flightDetail);
console.log(tataAirIndia);

book.call(indigo, ...flightDetail);
console.log(indigo);

const taiBooking = book.bind(tataAirIndia);
taiBooking(12, 'Charan Reddy');
console.log(tataAirIndia);

const tai17Booking = book.bind(tataAirIndia, 17);
tai17Booking('SunilKumarHS');
console.log(tataAirIndia);

//buyPlane button

tataAirIndia.planes = 200;

tataAirIndia.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', tataAirIndia.buyPlanes.bind(tataAirIndia));

//partial application
const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

// const addVat = addTaxRate(0.23);
// addVat(200);
console.log(addTaxRate(0.23)(200));

console.log('challenge 1');

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const getAnswer = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')} \n(Write option number)`
      )
    );
    typeof getAnswer === 'number' && getAnswer <= this.answers.length
      ? this.answers[getAnswer]++
      : alert('Worng option!!');

    this.displayResults();
    this.displayResults('string');
    this.displayResults('strings');
  },
  displayResults(type = 'array') {
    if (type === 'array' || type === 'string') {
      type === 'string'
        ? console.log(`The poll results are ${this.answers.join(' ')}`)
        : console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//Immediatelly Invoked Function Expression (IIFE)
console.log('IIFE-Immediatly Invoked Function Expression');
(function () {
  console.log(
    'This is not runed second time, it is immediatelly invoked only once'
  );
})();

(() =>
  console.log('This function can be executed only once, immediatelly!!'))();

// Clousures
console.log('Clousures');
const secureBooking = function () {
  let privateCount = 0;
  return function () {
    privateCount++;
    console.log(`The privateCount value : ${privateCount}`);
  };
};

const booking = secureBooking();
booking();
booking();
booking();

let f;

const g = function () {
  const a = 17;
  f = function () {
    console.log(a);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 18;
  f = function () {
    console.log(b);
  };
};

h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 3);

  console.log(`we will start the boarding in ${wait} seconds`);
};

const perGroup = 50;
boardPassengers(200, 1000);

console.log('Challenge 2');
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
