
//find minimum and maximum number//

// let number =[3,45,1,678,67,84,33,23]
// let minimum = number[0];
// let maximum = number[0];

// for(let i =0;i<number.length;i++){

//     if(number[i]>maximum){
//     maximum=number[i]
  
//     }
//     if(number[i]<minimum){
//         minimum=number[i]
//     }
// }
// console.log(`${maximum} is the maximum number`)
// console.log(`${minimum} is the minimum number`)

// find the second largest number//////////////////////////////////////
// let numbers = [3, 45, 1, 678, 67, 84, 33, 23];

// let fisrtlargest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > firstLargest) {
//     secondLargest = firstLargest;
//     firstLargest = numbers[i];
//   } else if (numbers[i] > secondLargest && numbers[i] < firstLargest) {
//     secondLargest = numbers[i];
//   }
// }

// if (secondLargest !== -Infinity) {
//   console.log("Second largest number:", secondLargest);
// } else {
//   console.log("There is no second largest number.");
// }


/////////////////find first,second,third largest/////////////////////////

let numbers = [3, 45, 1, 678, 67, 84, 33, 23];

let firstLargest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > firstLargest) {
    thirdLargest = secondLargest;
    secondLargest = firstLargest;
    firstLargest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] < firstLargest) {
    thirdLargest = secondLargest;
    secondLargest = numbers[i];
  } else if (numbers[i] > thirdLargest && numbers[i] < secondLargest) {
    thirdLargest = numbers[i];
  }
}

if (thirdLargest !== -Infinity) {
  console.log("First largest number:", firstLargest);
  console.log("Second largest number:", secondLargest);
  console.log("Third largest number:", thirdLargest);
} else {
  console.log("There are not enough numbers to find the first, second, and third largest.");
}








