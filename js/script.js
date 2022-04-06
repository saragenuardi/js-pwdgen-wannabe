// Richiesta nome utente
const userName = prompt('Come ti chiami?');
console.log (userName);

// Richiesta cognome utente
const userSurname = prompt("Qual'è il tuo cognome?");
console.log (userSurname);

// Richiesta colore preferito utente
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log (userColor);

// Concatenazione risposte
const message = `${userName}${userSurname}${userColor}21`;
console.log (message);

// Inserimento risultato in html
document.getElementById('password').innerHTML = message;