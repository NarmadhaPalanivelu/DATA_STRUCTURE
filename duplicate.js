let data  = [2,3,4,5,6,2,7,7]

let size = data.length
let count=0
 
for(let i =0;i<size;i++){
    for(let j=i+1;j<size;j++){
        if(data[i]==data[j]){
     console.log(data[i])
     count++
   
        }
    }

}
console.log("count=>", count)