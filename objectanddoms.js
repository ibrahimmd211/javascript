const car ={
     name: "ibrahim",
     model: "1950",
     list:["bmw1","bmw2","bmw3","bmw4"],
     date: 2007,
     nameAndModel: function (){
          return this.list[2] + " " + this.date
     }
}

carName = car.nameAndModel()

console.log(carName)