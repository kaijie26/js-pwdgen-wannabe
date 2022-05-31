// Generare la password per l'utente


// 1. RACCOLTA DATI E DEFINIZIONE DELLE VARIABILI
// Chiedo il nome all'utente 
const userName = prompt('Dimmi il tuo nome')
console.log(userName);

// Chiedo il cognome all'utente
const userSurname = prompt('Dimmi il tuo cognome')
console.log(userSurname);

// Chiedo il colore preferito all'utente
const userColor = prompt('Dimmi il tuo colore preferito')
console.log(userColor);

// Numero costante
const numberPsw = 21;

// 2. Genero la password alla pagina
// Costruisco la password finale per la pagina
const userMessage = userName + userSurname + userColor + numberPsw

// Stampo in pagina 
document .getElementById ("result") .innerHTML = userMessage
