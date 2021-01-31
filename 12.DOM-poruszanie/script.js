//Zadanie 1
var parent = document.getElementById("buz").parentElement;
console.log('aaa', parent);

var brat = document.getElementById("buz").nextElementSibling;
console.log(brat);

var dzieci = document.getElementById("foo").children;
console.log(dzieci);

var rodzic = document.getElementById("foo").parentNode;
console.log(rodzic);

var pierwszeDziecko = document.getElementById("foo").children[0];
console.log(pierwszeDziecko);

var srodkoweDziecko = document.getElementById("foo").children[1];
console.log(srodkoweDziecko);

//Zadanie 2
const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

//Zadanie 3

 document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });


toggleSpan();

// ZAdanie 3 dokonczyc 

const add = (elements) => {
    for(var i = 0; i < elements.length; i++){
       
        elements[i].addEventListener("click", function(){
            this.nextElementSibling.style.display = "block";
        })
   }
}

add(document.querySelectorAll('#ex3 button'));

//Zadanie 4
   document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });
    const variant = 1;
// Zadanie 5

function changeColor() {
    var element = document.getElementById('ex5');
    element.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            var elem = element.querySelectorAll('ul li:first-child');
            var elem = element.querySelectorAll('ul li:last-child');
            var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
            var elem = element.querySelectorAll('ul li');
            var elem = element.querySelectorAll('ul');
           
            elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
        };
    
    });
}
changeColor();


//Zadanie 6

const ex6Div = document.querySelector('#ex6');
//1
const first = ex6Div.firstElementChild.firstElementChild.firstElementChild;
console.log(first);
const second =
	ex6Div.firstElementChild.parentElement.firstElementChild.firstElementChild
		.nextElementSibling.parentElement;
console.log(second);

const third =
	ex6Div.parentElement.firstElementChild.parentElement.firstElementChild
		.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
console.log(third);
