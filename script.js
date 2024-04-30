const container = document.getElementById('container');
console.log(container);
const toppings = document.getElementsByClassName('topping');
console.log(toppings);
console.log(toppings[3]);
const myToppins = document.getElementsByTagName('li');
console.log(myToppins);
const fondoMarron = document.getElementsByClassName('background-brown');
console.log(fondoMarron);

const aceituna = document.querySelector('#Olive');
console.log(aceituna);
const aceitunas = document.querySelector('.topping.background-orange');
console.log(aceitunas);
const primerToppingNaranja = document.querySelector('.background-orange');
console.log(primerToppingNaranja);

const allOrange = document.querySelectorAll('.background-orange')
console.log(allOrange);