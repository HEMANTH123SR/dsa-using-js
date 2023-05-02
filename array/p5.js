const arr=[14,2,23,4]
const arr2=[25,63,97,68,78,90,88,63,]



// console.log(arr3)

const mergeSort=(arr,arr2)=>{
 const arr3=[...arr,...arr2];
 for(let i=0;i<=arr3.length-1;i++){
    for(let j=0;j<=arr3.length-1;j++){
        if(arr3[i]<arr3[j]){
            temp=arr3[i]
    arr3[i]=arr3[j]
    arr3[j]=temp;
        }
    }
 }
 console.log(arr3)
}

mergeSort(arr,arr2)
