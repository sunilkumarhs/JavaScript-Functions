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
