const fish=["nemo"]

const large=new Array(100000).fill("nemo")


//find nemo function

const findNemo=(array)=>{

    let t0=performance.now()

for(let i=0;i<array.length;i++){
    if(array[i]=="nemo"){
        console.log("founded nemo ")
    }
}
let t1=performance.now()
console.log(t1-t0)
}


findNemo(fish)


// findNemo(large)