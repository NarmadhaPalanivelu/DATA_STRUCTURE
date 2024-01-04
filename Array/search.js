///=========search array=================

// let array = [21,45,90,76,1,2345]
// let targetNo = 45

// let index = array.indexOf(targetNo)
// console.log(`${targetNo} is  found at the index=>${index}`)

/////==search without inbuilt=====//

let data =[2,4,56,73]
let targetNo=4;
let targetIndex =-1
for(let i =0;i<data.length;i++){
    if(data[i]==targetNo){ 
    targetIndex=i
    break;
}
}
if(targetIndex!==-1)
{
    console.log(`${targetNo}is found at the index ${targetIndex}`)
}
else{
    console.log(`${targetNo}is  not found`)

}
