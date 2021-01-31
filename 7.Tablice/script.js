// Zadanie 1

const table = ["siemka", 1, 2];
for(let i=0; i<table.length; i++){
    console.log(table[i]);
}

// Zadanie 2

const table = ['jeden',2,3,4];
console.log(table[0]+table[1]);
console.log(table[table.length -1])
console.log(table)
for (i=0;i<table.length;i++)
{
if (i % 2 === 0 )
{
console.log(table[i])
}
}
for (i = 0; i < table.length;i++)
{
if(typeof table[i] == "string")
{
console.log(table[i])
}
}
for (i = 0; i < table.length;i++)
{
if(typeof table[i] == "number")
{
console.log(table[i])
}
}

// Zadanie 3 

var table = new Array(1,2,3,4,5);
var sum = 0;


table.forEach(item => {
    sum += item;
})

var average;
average = sum / table.length;

sum = 0;
table.forEach(item => {
    sum -= item;
})

table.forEach(item => {
    if (item %2 == 0) {
        console.log(item);
    }
})

table.forEach(item => {
   if (item %2 != 0) {
       console.log(item);
   } 
});

var max = table[0];
table.forEach(item => {
   if (item > max) max = item; 
});
console.log(max);

var min = table[0];
table.forEach(item => {
   if (item < min) min = item; 
});
console.log(min);

for(var i = table.length; i < 0; i--) {
    console.log(table[i]);
}

// Zadanie 4

function sum(t)
{
var x = 0;
for (var i = 0; i <t.length; i++)
{
x += t[i]; 
}
return x;
}
const table = [1,2,3,4,5,6]
console.log(sum(table));

// Zadanie 5

function myFunc(tab)
{
var avg = 0;
for(var i = 0; i<tab.length;i++)
{
avg += tab[i];
}
avg = avg / tab.length;

for (var k = 0; k<tab.length;k++)
{
console.log(tab[k) * avg);
}
}
const table = [1,2,3,4,5,6];
myFunc(table);

// Zadanie 6

function average(table) {
    var sum = 0;
    var length = 0
    table.forEach(item => {
        if (item %2 == 0) {
            sum += item;
            length++;
        }
    })
    return sum / length;
}

console.log(average(new Array(1,2,3,4,5,6)));

// Zadanie 7

var table = [1,45,22,2,8,54,5,99,88];
function sort(table){
    return table.sort((a,b)=>a-b);
}
console.log(sort(table));

// Zadanie 8

function myFunc(tab1, tab2)
{
var result = [];
for (var i = 0; i<tab1.length;i++)
{
result.push(tab1[i] + tab2[i]);
}
return result;
}
cosnt table1 = [1,4,6,8];
const table2 = [2,3,5,7];

console.log(myFunc(table1,table2));

// Zadanie 9

function myFunc(func, element) {
  let func1 = func.filter((el) => el != element);
  return func1;
}
console.log(myFunc([1, 2, 3, 4, 5], 3));


// Zadanie 10

function myFunc(Table)
{
  return  Table.map(el => {
    return el * (-1);
  })
}
console.log(myFunc([1,2,3,4,6,-6]));

