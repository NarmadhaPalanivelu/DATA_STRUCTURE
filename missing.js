let array = [3,4,5,6,8]
let arrlength = array.length;
let sum1=0;
let sum2=0;
for(let i =3;i<=8;i++){
 sum1= sum1+i
}
for(let i =0;i<arrlength;i++){
    sum2=sum2+array[i]
}
let missingnos = sum1-sum2
console.log("summing the whole range=>", +sum1)
console.log("summing the array values=>", +sum2)
console.log("missing number=>", +missingnos)