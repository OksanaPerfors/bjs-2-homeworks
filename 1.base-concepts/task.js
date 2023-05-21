"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    arr = [(-b / (2 * a))];
  } else if (discriminant > 0) {
    let x1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
    let x2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
    arr = [x1, x2];
  } else{
    arr = [];
  };

  return arr; 
}
console.log(solveEquation(5, 12, 36));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  };

  let totalAmount;
  let percentMonths = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let pay = bodyCredit * (percentMonths + (percentMonths / (((1 + percentMonths)**countMonths) - 1)));
  totalAmount = pay * countMonths;

  return Number(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage(10, 1000, 50000, 12));