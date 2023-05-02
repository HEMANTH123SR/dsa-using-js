let arr=[1,2,3]

let arr2=[1,2,3];

console.log(arr==arr2)

class player{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    introduce(){
        console.log(`hi i am ${this.name}
        and i am ${this.type}`)
    }
}