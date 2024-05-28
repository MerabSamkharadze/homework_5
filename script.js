"use stirct";

// task 1

let array2 = [14, 150, "css", null, "javascript", 25];

let array2New = array2.map((item) =>
  typeof item == "number"
    ? item ** 2
    : typeof item == "string"
    ? item.toUpperCase()
    : item
);
console.log(array2New);

// task 2

let userAnswer = prompt("საქართველოს დედაქალაქი?");
let corectAnswer = "tbilisi";

userAnswer.toLowerCase() === corectAnswer
  ? console.log("პასუხი სწორია!👏")
  : console.log("პასუხი არასწორია 😔");

// task 3

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let array5New = array5.map((item) => item / 3);
console.log(array5New);
