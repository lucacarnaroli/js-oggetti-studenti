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
// var studentiOgg = [
//   // creo oggetti
//   {
//     'nome':'Luca',
//     'cognome':'Carnaroli',
//     'eta': 21,
//   },
//   {
//     'nome':'Maria',
//     'cognome':'Rossi',
//     'eta': 32,
//   },
//   {
//     'nome':'Gigi',
//     'cognome':'Bianchi',
//     'eta': 17,
//   },
// ];
// console.log(studentiOgg);
// // stampo nome e cognome
// for (var i = 0; i < studentiOgg.length; i++) {
//   console.log(studentiOgg[i].nome +' '+ studentiOgg[i].cognome +' '+ studentiOgg[i].eta);
// }
//

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// fare 3 prompt
var studenteObj = [
  {
    'nome': 'Matteo',
    'cognome': 'Rossi',
    'eta': 20
  },
  {
    'nome': prompt('inserisci il tuo nome'),
    'cognome': prompt('inserisci il tuo cognome'),
    'eta': parseInt(prompt('inserisci la tua eta'))
  }
];
for (var dati in studenteObj) {
  console.log(dati, studenteObj[dati]);
  for (var i = 0; i < studenteObj[dati].length; i++) {
    console.log();
  }
};
