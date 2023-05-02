class Car{

 constructor(model,year){
   this.model=model;
   this.year=year;
 }
    
    drive=()=>{
console.log("driving car")
    }

    brake(){
        console.log("brake")
    }
}


let car=new Car("ford",2009)
let car2=new Car("tesla",2018)

car.drive()
car.brake()

console.log(car.model

,    car.year)

