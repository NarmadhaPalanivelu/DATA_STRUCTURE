let data =[34,56,77,12,55,90]
let largest = data[0];
for(let i =0;i<data.length;i++){
    if(largest<data[i]){
        largest = data[i]
    }
}
console.log("largest number=>", largest)