//1

let a = prompt("Enter the first number (a)");
let b = prompt("Enter the second number (b)");
let max;

function maxNumber(a, b) {
  if (a > b) {
    max = a;
  } else if (a < b) {
    max = b;
  } else {
    return "a = b";
  }
  return max;
}

alert(maxNumber(a,b));

//2

let num = prompt('Enter the number');
let reversNumber = -num;

function revers(number){
return reversNumber
}

alert(reversNumber)

//2 option 2

let numb = prompt("Enter the number");

function revers(numb) {
  let reversNumber = Math.abs(numb);
  if (numb > 0) {
    return -numb;
  }

  return reversNumber;
}

alert(revers(numb));

//3

let number = prompt('Enter the first number');
let count = prompt('Enter the second number');

function three(number,count){
  let result = number + 3 * count;
  return result;
}

alert(three(+number, +count));

//4

let metric = prompt('Enter the metric: "m" or "cm"');
let km = prompt("Enter the number");
let m;
let cm;

function KmToM(km) {
  m = km * 1000;
  return m;
}

function KmToCm(km) {
  cm = km * 100000;
  return cm;
}

function getMetric(metric, km, m, cm) {
  let convert = metric === "m" ? m(km) : cm(km);
  return convert;
}
alert(`${getMetric(metric, km, KmToM, KmToCm)} ${metric}`);

getMetric(metric, km, KmToM, KmToCm);
