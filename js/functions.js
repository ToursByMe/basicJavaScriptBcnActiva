//and all hell goes loose

//get them at html
let inicio = document.getElementById('trigger');
let pintado = document.getElementById('showMe');

inicio.addEventListener('click', allHellLoose);


function allHellLoose() {
//consola hello world
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
notaCorte();

//cotxes
function changeWords(str){

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
changeWords('verd');

//for loop
function mobles() {

    let objectes = [ 'taula', 'cadira', 'ordinador', 'libreta'];

    //loop
    for (let i = 0; i < objectes.length; i++){

        //pintat
        console.log(`L'objecte ${objectes[i]} està en la posició ${[i+1]}`)
    }
}
mobles();

//calculadora
const myCalcul = (str, num1, num2) => {


    num1 = parseInt(prompt('Insert one number pls'));
    //control1
    (isNaN(num1)) ? num1 = 0 : true;

    num2 = parseInt(prompt('Insert a second number pls'));
    //control2
    (isNaN(num2)) ? num2 = 0 : true;

    str = prompt('Que operación deseas hacer?\n Suma \n Resta \n Multiplicacion \n División')
    //control str
    str = str.toLowerCase();
    //accents out
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");



    let result = 0;
    let tellYou;

    switch (str) {
        case (str = "suma"):
            result = num1 + num2;

            tellYou = (`The result of your ${str} is ${result}. Thank you.`)
            
            break;
    
        case (str = "resta"):
            result = num1 - num2;

            tellYou = (`The result of your ${str} is ${result}. Thank you.`)

            break;
    
        case (str = "multiplicacion"):
            result = num1 * num2;

            tellYou = (`The result of your ${str} is ${result}. Thank you.`)

            break;
    
        case (str = "division"):
            result = num1 / num2;

            tellYou = (`The result of your ${str} is ${result}. Thank you.`)

            break;
    
        default:

            tellYou = ("Something is wrong you fool!");
            break;
    }

    console.log(tellYou);

    //pintado
  return  pintado.innerHTML = tellYou;
    
    
}
myCalcul();
}

/**DOCUMENTACION */
//https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
