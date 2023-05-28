


function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg

  for (i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i]
    }
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
  }
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let sum = arr.reduce((total, amount) => total + amount, 0);
  
  return sum;
    
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if (arr.length == 0) {
    return 0;
  }
  let difference = max - min;
  
  return difference;

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let i;
  
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i] 
    } else {
      sumOddElement += arr[i]
    }
  }
  if (arr.length == 0) {
    return 0;
  }

  let difference = sumEvenElement - sumOddElement;
  
  return difference;
  
}

function averageEvenElementsWorker(...arr) {
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  if (arr.length == 0) {
    return 0;
  }

  let difference = sumEvenElement / countEvenElement;

  return difference;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (i = 0; i < arrOfArr.length; i++) {
    const arr = func(...arrOfArr[i]);
  if (arr > maxWorkerResult) {
    maxWorkerResult = arr;
  }
  }

  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];