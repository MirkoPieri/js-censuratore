// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var elemento = document.getElementById('mio_id');
var elemento1 = document.getElementById("mio_id1");
var testo = prompt("Inserisci il testo da visualizzare");

// metto il testo tutto a lettere grandi
var paroleUppercase = testo.toUpperCase();
// creo array per separare le parole
var righe = paroleUppercase.split(" ");
// inizializzo a 0 variabile parole censurate
var paroleCensurate = 0;
// definisco il numero delle parole
var numeroParole = righe.length;

// array con parole proibite
 var parole = ["CIAO", "CASA", "VAFFANCULO", "STRONZO", "CELLULARE", "STUPIDO", "DEFICIENTE", "SCUOLA"];

// ciclo per verifica presenza parole proibite
for (var i = 0; i < parole.length; i++) {
   if (paroleUppercase.includes(parole[i])) {
     paroleUppercase = paroleUppercase.replace(parole[i],"xxx");
     paroleCensurate += 1;
   }
}

// rimetto il testo tutto in lettere piccole
var paroleLower = paroleUppercase.toLowerCase();

// stampo le varie rischieste dell'esercizio
 elemento.innerHTML = paroleLower;
 elemento1.innerHTML = paroleCensurate + "  parole censurate su " + numeroParole + " totali. ";
