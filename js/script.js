// console check
console.log('JS OK!');

/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

//MILESTONE 1 + MILESTONE 2 + MILESTONE 3

const containerNumber = document.querySelector(".container");
for(let number=1; number <=100; number++){

    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
        let element = `<div id="tomato" class="square-numbers">FizzBuzz</div>`;
        containerNumber.innerHTML += element;
    
    }else if (number % 5 === 0) {
        console.log('Buzz');
        const element = `<div id="green" class="square-numbers">Buzz</div>`;
        containerNumber.innerHTML += element;

    }else if (number % 3 === 0){
        console.log('Fizz');
        const element = `<div id="lilac" class="square-numbers">Fizz</div>`;
        containerNumber.innerHTML += element;

    }else {
        console.log(number);
        const element = `<div class="square-numbers">${number}</div>`;
        containerNumber.innerHTML += element;
    }

}
