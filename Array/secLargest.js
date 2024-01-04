let data = [3,2,45,67,98,56]
let largest = data[0]
let secLargest = data[0]
for(let i =0;i<data.length;i++){
    if(largest < data[i]){
        largest = data[i]
    }
}
// 
for(let i =0;i<data.length;i++){
    if(secLargest<data[i]&&largest>data[i]){
       secLargest = data[i]
    }
}
// console.log("largest=>", largest)
console.log("second largest=>", secLargest)
