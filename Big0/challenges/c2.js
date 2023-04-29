// log all the pairs in the array

const arr=[1,2,3,4,5]

function logThePairs(arr){

    for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length;j++){
           console.log(arr[i],arr[j])

     }

    }

}

logThePairs(arr)