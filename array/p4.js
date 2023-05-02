let name="hemanth"

function rev(par){
let str=""
for(let i=par.length-1;i>=0;i--){
    str+=par[i]
}
console.log(str)
}

rev(name)