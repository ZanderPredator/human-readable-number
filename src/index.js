module.exports = function toReadable (number) {
  if ( number <= 19 ){
    return toNineteen (number);
  } else if ( number > 19 && number <= 99 ){
    return toNinetyNine (number);
  } else if ( number >=100 && number <= 999 ){
    return toNinetyHundredNinetyNine (number);
  };

let changeNumforString = number.toString();
  let lastTwoNumber = +changeNumforString.slice(1);

function toNineteen (number) { 
  if((number >= 0 && number <= 19)){
    return (firstNumber[number]);
  }
};

function toNinetyNine(number){
  if ((number >=20 && number<=99) && (tenths[number] !== undefined))  {
    return (tenths[number]);
  } else {
    return theSameThing(number);
  }
};

function theSameThing (number){
  if (tenths[number] === undefined ) {
    let roundedNum = number.toString();
    let opposity = number - (+(roundedNum[1]));
    return (`${tenths[opposity]} ${firstNumber[roundedNum[1]]}`);
  };
};

function toNinetyHundredNinetyNine(num){
  
  let changeNumforString = num.toString();
  let lastTwoNumber = +changeNumforString.slice(1);
  let opposityHundreds = (num - lastTwoNumber);

  if ((number >=100 && number<=999) && (hundreds[number] !== undefined))  {
    let A = (hundreds[number]);
    return(hundreds[number]);
  
  }  else if ((hundreds[number] === undefined) && (tenths[lastTwoNumber] !== undefined)) {        
    return( `${hundreds[opposityHundreds]} ${tenths[lastTwoNumber]}`); 

  } else if ((hundreds[number] === undefined) && (tenths[lastTwoNumber] === undefined) && (firstNumber[lastTwoNumber] !== undefined)){
    return ( `${hundreds[opposityHundreds]} ${firstNumber[lastTwoNumber]}`); 
  }
  else if ((hundreds[number] === undefined) && (tenths[lastTwoNumber] === undefined)){
    let Re = lastTwoNumber - (+(changeNumforString[2]))
    return ( `${hundreds[opposityHundreds]} ${tenths[Re]} ${firstNumber[changeNumforString[2]]}`);   
  }

};

};


  

const firstNumber = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const tenths = {
  20 : "twenty",   
  30 : "thirty",
  40 : "forty",
  50 : "fifty",
  60 : "sixty",
  70 : "seventy",
  80 : "eighty",
  90 : "ninety",
};

const hundreds = {
  100 :"one hundred",
  200 :"two hundred",
  300 :"three hundred",
  400 :"four hundred",
  500 :"five hundred",
  600 :"six hundred",
  700 :"seven hundred",
  800 :"eight hundred",
  900 :"nine hundred",
};