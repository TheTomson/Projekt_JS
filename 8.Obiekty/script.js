// Zadanie 1
let car = {
  name: "Opel",
  age: 10,
  maxSpeed: 195,
  color: "Blue",
}
console.log(car.name);
console.log(car.age);
console.log(car.maxSpeed);
console.log(car.turnSignals);


// Zadanie 2
let car = {
  name: "Opel",
  age: 10,
  maxSpeed: 195,
  turnSignals: True,
  changeName: function newName(newName){
    this.name = newName;
}
}
car.changeName("BMW");
console.log(car.name);

// Zadanie 3
let newObject = {
  sum: 0,
  sumFunction: function(array)
  {
    for (var i = 0; i <array.length; i++)
    {
      this.sum += array[i]; 
    }
  }
}
newObject.sumFunction([1,2,3,4,50]);
console.log(newObject.sum);

// Zadanie 4
let car = {
  name: "BMW",
  age: 12,
  fuel: "petrol"
}

for(let key in car)
  {
    console.log(key + " : " + car[key]);
  }


// Zadanie 5 
let car = {
	name: 'Fiat',
	age: 35,
	color: 'red',
};
const carcountrycity = {
	country: 'Poland',
	city: 'Krakow',
};
car.production = carcountrycity;
console.log(car.production.country, car.production.city);


// Zadanie 6
const car = {
	name: 'Fiat',
	age: 35,
	color: 'red'
};

car.hello = () => {
    console.log("Hello");
}

car.hello();
