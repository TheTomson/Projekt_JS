// Zadanie 1

var value1 = 20; 
var value2 = 23; 

if(value1>value2){
       console.log(value1);
} else {
    console.log(value2);
}

// Zadanie 2

var nextValue1 = 145;
var nextValue2 = 68;
var nextValue3 = 44444;

if (nextValue1 > nextValue2 && nextValue1 > nextValue3){
    console.log(nextValue1);
} else if (nextValue2 > nextValue3){
    console.log(nextValue2);
} else {
    console.log(nextValue3);
}

// Zadanie 3

for(var x = 0; x<=10; x++)
    {
         console.log("Lubie JavaScript")
    }

// Zadanie 4

var result = 0;
for(var i=0;i<=10;++i){
    result=result+i;
}
console.log(result);

// Zadanie 5

var n = 5;
for(var i = 0; i<=n; i++)
    {
        if(i%2==0)
            {
                console.log("liczba " +i+ " jest parzysta");
            }
        else
            {
                console.log("liczba " +i+ " jest nie parzysta");
            }
   
       
    }

// Zadanie 6

for(let i=0; i< 5; i++){
    for(let j=0; j < 5; j++){
        console.log("i= " + i + ", j= " + j);
    }
    
}

// Zadanie 7 

for (var i=0; i<=100;i++)
 {
   if(i%3==0)
     {
       console.log("Fizz");
     }
   else if(i%5==0)
     {
       console.log("Buzz");
     }
   else if(i%3==0 && i%5==0)
     {
       console.log("FizzBuzz");
     }
   else 
     {
       console.log(i);
     }
 } 

// Zadanie 8

a)

var x = '*';

for (var i=0;i<5;i++){
    console.log(x);
    x +='*';
}

b)

var x = ' *';
var z = 5;

for (var i=0;i<z;i++){
    var space = '';
    for (var k=0; k<z-i; k++){
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}

c)  

varx = '*';
 
for (vari=0;i<5;i++)
{​​​​​​​​
varspace = '';
for (var k=0; k<5-i; k++)
    {​​​​​​​​
space += ' ';
    }​​​​​​​​
console.log(space + x);
x +='**';
}​​​​​​​​
d)
for (let i = 1; i <= 11; i++)
{
    let row = '';
    let turn = i > 6 ? 6 - i % 6 : i % 6;
    for (let j = 0; j < 5; j++)
    {
        if (turn === 0)
        {
            row += '-';
        }
        else if (j >= turn)
        {
            row += j;
        }
        else
        {
            row += "*";
        }
    }

    console.log(row);
}


e)  

varx = '*';
for (var i=0;i<5;i++)
{​​​​​​​​
varspace = '';
for (var k=1; k<5-i; k++)
    {​​​​​​​​
space += ' ';
    }​​​​​​​​
console.log(space + x);
x +=' *';
}​​​​​​​​  
 
for(var j=0; j<4; j++)
  {​​​​​​​​
console.log("    *");
  }​​​​​​​​
