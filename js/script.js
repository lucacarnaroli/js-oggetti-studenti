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

for (var i = 0; i < studentiOgg.length; i++) {
  console.log(studentiOgg[i]);
}
