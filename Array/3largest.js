let data =[34,56,77,12,55,90]
let largest = data[0];
let secondLargest = data[0];
let thirdLargest = data[0];
for(let i =0;i<data.length;i++){
    if(largest<data[i]){
        largest = data[i]
    }
}
for(let i =0;i<data.length;i++){
    if(secondLargest<data[i]&&largest>data[i]){
       secondLargest = data[i]
    }
}
for(let i =0;i<data.length;i++){
    if(thirdLargest<data[i] && secondLargest>data[i] && largest>data[i]){
       thirdLargest = data[i]
    }
}
console.log("third largest=>", thirdLargest)
