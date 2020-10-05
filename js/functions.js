//and all hell goes loose

let inicio = document.getElementById('trigger');
inicio.addEventListener('click', allHellLoose);


function allHellLoose() {
/* //consola hello world
console.log('Hello Mundo');

//own name
const myName = () => alert('My name is Robert Garcia!');
myName();

//var name+surname
let name    = "Robert";
let surname = "Garcia";
console.log(`${name} ${surname} is who I am!`);

//var suma
const sumaDos = () => {

    let num1 = parseInt(prompt('Type any number!'));
    //control1
    (isNaN(num1)) ? num1 = 0 : true;

    let num2 = parseInt(prompt('Type any other number or the same!'));
    //control2
    (isNaN(num2)) ? num2 = 0 : true;

    let suma = num1 + num2;

    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
    alert(`La suma entre ${num1} y ${num2} es ${suma}`);
}
sumaDos();

//nota condicional
function notaCorte() {

    let nota = parseInt(prompt('introduzca su nota de examen'));
    let info;
    //condicional
    do {
        nota = parseInt(prompt('introduzca una nota correcta de examen'));
        
    } while (nota < 0 && nota > 10);

    (nota < 5) ? info = alert('Ha suspendido el examen, lo sentimos.') : info = alert('Enhorabuena, ha aprobado el examen.');
    
    console.log(info);
    return info;
}
notaCorte(); */

//cotxes
/* function changeWords(str){

    let sentence  = "Tinc un cotxe de color blau";

    //mark last white space
    let lastOne = sentence.lastIndexOf(" ");

    //cut through that last space marked before
    sentence = sentence.substring(0, lastOne );

    console.log(sentence);

    //we add the str
    //made first the string into an arr []
    let changedOne = [sentence + " " + str].join()
    
    console.log(changedOne);

}
changeWords('verd'); */

/* //for loop
function mobles() {

    let objectes = [ 'taula', 'cadira', 'ordinador', 'libreta'];

    //loop
    for (let i = 0; i < objectes.length; i++){

        //pintat
        console.log(`L'objecte ${objectes[i]} està en la posició ${[i+1]}`)
    }
}
mobles(); */

//calculadora
const myCalcul = () => {

    //get the numbers
    let num1 = parseInt(prompt('Type any number!'));
    //control1
    (isNaN(num1)) ? num1 = 0 : true;

    let num2 = parseInt(prompt('Type any other number or the same!'));
    //control2
    (isNaN(num2)) ? num2 = 0 : true;

    //question raises
    let choices = parseInt(prompt("What math operation would you like to do \n 'Adding' type 1 \n 'Substract' type 2\n 'Product' type 3 \n 'Division' type 4"))
    console.log(choices);

    let result = 0;
    let tellYou;

    switch (choices) {
        case 1:
            result = num1 + num2;

            tellYou = alert(`The result of your operation is ${result}. Thank you.`)
            
            break;
    
        case 2:
            result = num1 - num2;

            tellYou = alert(`The result of your operation is ${result}. Thank you.`)

            break;
    
        case 3:
            result = num1 * num2;

            tellYou = alert(`The result of your operation is ${result}. Thank you.`)

            break;
    
        case 4:
            result = num1 / num2;

            tellYou = alert(`The result of your operation is ${result}. Thank you.`)

            break;
    
        default:

            tellYou = alert("Something is wrong you fool!");
            break;
    }

    console.log(tellYou);
    return tellYou;
}
myCalcul();
}