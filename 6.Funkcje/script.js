// Zadanie 1

function myFunc ()
{
console.log("Udało się!");
}
myFunc();

// Zadanie 2

function myFunc (x)
{
return x*x;
}
console.log(myFunc(5));

// Zadanie 3

var tab1 = [1,2,3,4];
function myFunc (tab)
{
return tab;
}
console.log(myFunc(tab1));

// Zadanie 4

function myFunc(str)
{
var i = 0;
const timer = setInterval(() =>
{
if (i<5){
console.log(str);
i++;
}
else
{
console.log("koniec");
clearInterval(timer);
}
},3000)
}
myFunc("Czekaj");
