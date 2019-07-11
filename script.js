// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var elemento = prompt("Inserisci il testo da visualizzare");
// creo array per separare le parole
var righe = elemento.split(" ");
// inizializzo a 0 variabile parole censurate
var paroleCensurate = 0;
// definisco il numero delle parole
var numeroParole = righe.length;


 var parole = ["ciao", "casa", "vaffanculo", "stronzo", "cellulare", "stupido", "deficiente"];

for (var i = 0; i < parole.length; i++) {
   if (elemento.includes(parole[i])) {
     elemento = elemento.replace(parole[i],"xxx");
     paroleCensurate += 1;
   }

 }

 console.log(elemento);
 console.log(paroleCensurate + "  parole censurate su " + numeroParole + " totali. ");
