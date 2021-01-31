// 1

var Person1 = {
    imie: "Jan",
    nazwisko: "kowalski",
    wiek: 15,
    kraj: "PL",
    miasto: "KRK"
}

var Person2 = {
    imie: "Adam",
    nazwisko: "kowalski",
    wiek: 16,
    kraj: "US",
    miasto: "NYC"
}

function Wypisz(){
    console.log(this.imie+" "+ this.nazwisko+ " "+ this.wiek+" "+ this.kraj+" "+this.miasto);
}

function Dodaj(){
    this.wiek++;
}

Person1.wypisz = Wypisz;
Person2.wypisz = Wypisz;
Person1.dodaj = Dodaj;
Person2.dodaj = Dodaj;

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();

// 2

var Person1 = {
    imie: "Jan",
    nazwisko: "kowalski",
    wiek: 15,
    kraj: "PL",
    miasto: "KRK"
}

var Person2 = {
    imie: "Adam",
    nazwisko: "kowalski",
    wiek: 16,
    kraj: "US",
    miasto: "NYC"
}

function Wypisz(){
    console.log(this.imie+" "+ this.nazwisko+ " "+ this.wiek+" "+ this.kraj+" "+this.miasto);
}

function Dodaj(){
    this.wiek++;
}

Person1.wypisz = Wypisz;
Person2.wypisz = Wypisz;
Person1.dodaj = Dodaj;
Person2.dodaj = Dodaj;

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();

Person2.favoriteFoods = ['sushi', 'pizza'];
Person1.favoriteFoods = ['sushi', 'beacon'];


Person1.showFavoriteFoods = function() {console.log(this.favoriteFoods)};
Person2.showFavoriteFoods = function() {console.log(this.favoriteFoods)};

Person1.showFavoriteFoods();

let addNewFavoriteFood = function (element) {
    this.favoriteFoods.push(element);
}

Person1.addNewFavoriteFood = addNewFavoriteFood;
Person2.addNewFavoriteFood = addNewFavoriteFood;

Person1.addNewFavoriteFood("sushi2");

// 3

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = function () {
        return (this.num1 + this.num2);
    }
    this.subtraction = function () {
        return (this.num1 - this.num2);
    }
    this.multiplication = function () {
        return (this.num1 * this.num2);
    }
    this.division = function () {
        if (!num2)
            throw new Error("Cannot divide by zero");

        return this.num1 / this.num2;
    }
}

const calc1 = new Calculator(2, 3);
const calc2 = new Calculator(2, 2);
const calc3 = new Calculator(3, 0);

console.log(calc1.sum());
console.log(calc1.subtraction());

console.log(calc2.multiplication());
console.log(calc2.division());

console.log(calc3.division());

//Zadanie 4

let ladder = {
    currentStep: 0,
    moveUp: function() {
        this.currentStep++;
    },
    
    moveDown: function() {
        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.info("You are at the bottom already.");
            
            return;
        }
        this.currentStep--;
    },

    writeCurrentStep: function() {
        console.log(`Current Step: ${this.currentStep}`);
    }
};
