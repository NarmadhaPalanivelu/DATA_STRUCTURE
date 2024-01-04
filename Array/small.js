let data = [3,4,5,67,1]

let small = data[0];
for(let i =0;i<data.length;i++){
    if(small>data[i]){
        small=data[i]
    }
}
console.log("smallest number=>", small)