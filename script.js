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

// task 4

let array1 = ["hello1", 14, 24, "hello2"];
let array1New = array1.filter((item) => typeof item === "number");
console.log(array1New);

// task 5

let languages = ["html", "css", "javascript", "python", "php"];
let languagesNew = languages.filter((item) => item.length > 3);
console.log(languagesNew);

// task 6

let words = ["Madrid", "rome", "Milan", "berlin"];
// let filteredWords = words.filter(item=>item.toLowerCase().includes('m'))
let filteredWords = words.filter(
  (item) => item.includes("m") || item.includes("M")
);
console.log(filteredWords);

// task 7

let link = "https://google.com";

function check(string) {
  string.includes("https://")
    ? console.log("კი, მოიცავს!")
    : console.log("არა, არ მოიცავს!");
}
check(link);

// task 8

let array6 = [-1, -2, -3, 4];
let isPositiveNumber = array6.some((item) => item > 0);
console.log(isPositiveNumber);
