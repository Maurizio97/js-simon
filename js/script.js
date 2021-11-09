// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// DONE=> creo 5 numeri random casuali => While
    // DONE=> li salvo in un array
    // DONE=> li stampo in pagina
// DONE=> dopo 30 secondi chiedo all'utente quali erano i 5 numeri => setTimeout
    // DONE=> confronto gli input inseriti dall'utente con i valori che si trovano nell'array
    // DONE=> creo un contatore per salvarmi quanti numeri ha indovinato
    // DONE=> dico all'utente quanti e quali numeri ha inserito corretti 


const divCont = document.querySelector("#container-random-num");
const divContAttemps =  document.querySelector("#cont-attemp");
// array numeri inseriti dall'utente
let attempsList = [];

// contatore 
let counterAttemps = 0;

// array dei numeri casuali
let numGen = [];

// genero i numeri
generateNumberWhitoutClone(numGen, 5, 1, 100);
console.log("array num gen",numGen);
// inserisco i numeri in pagina 
/* numGen.forEach(element => {
    createElement(divCont, element);
}); */

// dopo 30 sec chiedo all'utente di inserire i numeri che ha visto
setTimeout(() => {
    for (let i = 0; i < numGen.length; i++){
        const attemp = parseInt(prompt(`che numeri hai visto? inseriscili 1 alla volta. ${i + 1}/5 `));
        if (numGen.includes(attemp) && !attempsList.includes(attemp)){
            attempsList.push(attemp);
            counterAttemps++;
        }
            console.log(attempsList);
            console.log(counterAttemps);
    };
    // inserisco in pagina quanti numeri ha indovinato
    createAttemp(divContAttemps, counterAttemps);
    divCont.innerHTML = " ";
    // inserisco in pagina tutti i numeri che ha indovinato
    attempsList.forEach(elem => {
        createElement(divCont, elem);
    });
}, 5000);


// funzioni utili
// genero un numero e lo inserisco in un array
function generateNumberWhitoutClone(myArray, n, min, max) {
    while (myArray.length < n){
        let number = getRandomIntInclusive(min, max);
        let doppio = myArray.includes(number);
        if (doppio == false){
            myArray.push(number);
            // inserisco i numeri in pagina 
            createElement(divCont, number);
        }
    };
};

// funzione per generarne 1 ogni sec
// async function generateNumberWhitoutClone(myArray, n, min, max) {
//     while (myArray.length < n){
//         let number = getRandomIntInclusive(min, max);
//         let doppio = myArray.includes(number);
//         if (doppio == false){
//             myArray.push(number);
//             createElement(divCont, number);
//             await new Promise(r => setTimeout(r, 1000));
//         }
//     };
// };

// genera numeri da un min a un max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

// crea div in pagina
function createElement(container, elem) {
    container.innerHTML += `<div class="random-num">${elem}</div>`
};

// crea la frase con il conteggio dei tentativi
function createAttemp(container, elem ) {
    container.innerHTML = `Hai inserito correttamente ${elem} numeri`
};