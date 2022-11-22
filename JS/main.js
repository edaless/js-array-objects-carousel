// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente/successiva.
// ----------
// BONUS 1:
// Aggiungere il ciclo infinito del carosello.
// Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto (il secondo).
// Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// CONSILGLI generali:
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
// Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.
// CONSILGLI del giorno:
// 1. Costruiamo del carosello una versione statica contenente solamente un’immagine (o tutte se preferite).
// Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js.
// Potremo quindi usarli come “template”.
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”


const avanti = document.querySelector(".avanti");
const indietro = document.querySelector(".indietro");
let imgs = document.getElementsByClassName("img");
let rigLat = document.getElementsByClassName("rig-lat");
let index = 0;



avanti.addEventListener("click", function(){

    if ( index <= (imgs.length - 1)){

        imgs[index].classList.remove("active");
        rigLat[index].classList.remove("selected");
        rigLat[index].classList.add("dark");

        if ( index === (imgs.length - 1)){

            index = 0;
    
        }else{
            index++;
        };
        

        imgs[index].classList.add("active");
        rigLat[index].classList.remove("dark");
        rigLat[index].classList.add("selected");

        
    };
});


indietro.addEventListener("click", function(){

    

    imgs[index].classList.remove("active");
    rigLat[index].classList.remove("selected");
    rigLat[index].classList.add("dark");

    if ( index === 0){

        index = (imgs.length - 1);

    }else{
        index--;
    };
    

    imgs[index].classList.add("active");
    rigLat[index].classList.remove("dark");
    rigLat[index].classList.add("selected");

        
    
});



// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }