let data = [3,55,1,35,6,2]
let smallest = data[0]
let secondsmallest =  data[0]
for(let i =0;i<data.length;i++){
    if(smallest>data[i]){ 
        smallest = data[i]    
    }
}

for(let i =0;i<data.length;i++){
    if(secondsmallest>data[i] && smallest<data[i]){ 
        
        secondsmallest = data[i]
    }
}
 console.log("smallest=>", smallest)
 console.log(" Second smallest=>", secondsmallest)

