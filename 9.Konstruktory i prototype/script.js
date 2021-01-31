//Zadanie 1:
class Person {
    imie;
    nazwisko;
    wiek;
    kraj;
    miasto;
    jezyk;
    constructor(Imie, Nazwisko, Wiek, Kraj, Miasto, Jezyk) {
        this.imie = Imie;
        this.nazwisko = Nazwisko;
        this.wiek = Wiek;
        this.kraj = Kraj;
        this.miasto = Miasto;
        this.jezyk = Jezyk;
    }

    ZmienWiek(Wiek) {
        this.wiek = Wiek; 
    }

    ZmienMiasto(Miasto) {
        this.miasto = Miasto;
    }
}

var person1 = new Person("Jan", "Kowalski", 22, "Polska", "Tarnów", "Polski");
var person2 = new Person("Adam", "Nowak", 42, "Niemcy", "Berlin", "Niemiecki");
var person3 = new Person("Ewa", "Kanon", 23, "Polska", "Kanonice", "Polski");
var person4 = new Person("Daria", "Krakowska", 18, "Polska", "Kraków", "Polski");
var person5 = new Person("Dominik", "Janiszewski", 34, "Hiszpania", "Madryt", "Japoński");

person1.ZmienWiek(12);
person2.ZmienWiek(32);
person3.ZmienWiek(50);
person4.ZmienWiek(13);
person5.ZmienWiek(82);

person1.ZmienMiasto("Wrocław");
person2.ZmienMiasto("Tokyo");
person3.ZmienMiasto("Nowy York");
person4.ZmienMiasto("Chicago");
person5.ZmienMiasto("Krynica Zdrój");


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);


//Zadanie 2

function Calculator() {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        return a + b;
    }
    
    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        return a - b;
    }
    
    this.mult = function(a, b) {
        this.memory.push('Monożenie');
        return a * b;
    }
    
    this.div = function(a, b) {
        this.memory.push('Dzielnie');
        return a / b;
    }
    
    this.clear = function() {
        this.memory = [];
    }
    
}

const calc = new Calculator();
console.log(calc.sum(2,5));
console.log(calc.sum(5,5));
console.log(calc.memory)
calc.clear();
console.log(calc.memory)

// Zadanie 3

function Constructor() { 
    this.number = 0;
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(myInterval);
        }     
    }
}

const newProg = new Constructor();

const myInterval = setInterval(() => {
    newProg.setNumber();
}, 1000);

//Zadanie 4
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				console.log('End');
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();

