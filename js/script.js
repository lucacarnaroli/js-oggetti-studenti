// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// creo un oggetto
// var studente = {
//   // descrivo uno studente
//   'nome':'Luca',
//   'cognome':'Carnaroli',
//   'eta': 21
// }
// console.log(studente);
//
// for (var proprietà in studente) {
//   console.log(studente[proprietà]);
// }
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// creo un array
var studentiOgg = [
  // creo oggetti
  {
    'nome':'Luca',
    'cognome':'Carnaroli',
    'eta': 21,
  },
  {
    'nome':'Maria',
    'cognome':'Rossi',
    'eta': 32,
  },
  {
    'nome':'Gigi',
    'cognome':'Bianchi',
    'eta': 17,
  },
];
console.log(studentiOgg);
// stampo nome e cognome
for (var i = 0; i < studentiOgg.length; i++) {
  console.log(studentiOgg[i].nome);
  console.log(studentiOgg[i].cognome);
  console.log(studentiOgg[i].eta);
}


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// fare 3 prompt
// var nome = prompt('come ti chiami?');
// var cognome = prompt('il tuo cognome?');
// var eta = parseInt(prompt('quanti anni hai?'));
// var studenteObj = [
//   {
//     'nome'
//     'cognome'
//     'eta'
//   }
// ];
// console.log(studenteObj[]);
//
//
//
// console.log(studenteObj);
