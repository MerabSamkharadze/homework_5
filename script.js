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
