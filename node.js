const studenti = [
  { ime: `Damjana`, prosek: 7.4, grad: `Skopje` },
  { ime: `Nikola`, prosek: 8.4, grad: `Veles` },
  { ime: `Dragan`, prosek: 5.4, grad: `Kumanovo` },
  { ime: `Aleks`, prosek: 9.2, grad: `Gostivar` },
  { ime: `Antoni`, prosek: 8.9, grad: `Ohrid` },
  { ime: `Jana`, prosek: 9.8, grad: `Veles` },
  { ime: `Angela`, prosek: 7.1, grad: `Bitola` },
  { ime: `Jovana`, prosek: 7.4, grad: `Skopje` },
  { ime: `Angel`, prosek: 7.9, grad: `Ohrid` },
];
// 1//
const skopjeStudents = studenti.filter(
  (student) =>
    student.grad === `Skopje` && student.ime.endsWith("a") && student.prosek > 7
);
studenti.sort((a, b) => a.ime.localeCompare(b.ime));
console.log(`Studenti od Skopje:`, skopjeStudents);

// 2//
const odlicenProsek = studenti.filter(
  (student) => student.grad != `Skopje` && student.prosek > 9
);
studenti.sort((b, a) => b.ime.localeCompare(a.ime));
console.log("Studenti so odlicen prosek i ne se od Skopje ", odlicenProsek);

// 3//
const filterPrviTriStudenti = studenti
  .filter((student) => student.ime.length === 5)
  .sort((a, b) => a.prosek - b.prosek)
  .slice(0, 3);

console.log(
  "Studenti so 5 karakteri ime i podredeni po prosek:",
  filterPrviTriStudenti
);

//4 //
const studentiOdKumanovo = studenti.filter(
  (student) => student.grad == "Kumanovo"
);
console.log("Studenti od Kumanovo:", studentiOdKumanovo);

// 5 //
const studentiSkopjeOhrid = studenti.filter(
  (student) => student.grad === "Skopje" || student.grad === "Ohrid"
);
const prosekNaProseciteSkOh =
  studentiSkopjeOhrid.reduce((sum, student) => sum + student.prosek, 0) /
  studentiSkopjeOhrid.length;
console.log(
  `Prosek na prosecite od Ohrid i Skopje:`,
  prosekNaProseciteSkOh.toFixed(2)
);

const novaListaStudenti = [
  ...studenti,
  { ime: `Goran`, prosek: 7.3, grad: `Delcevo` },
];
console.log(novaListaStudenti);

// 7//
studenti.shift();
console.log(studenti);

//8//
const novFilter = studenti
  .filter((student) => student.grad === `Ohrid` || student.grad === `Kumanovo`)
  .map((student) => ({
    ...student,
    prosek: student.prosek + 1,
  }));
console.log(novFilter);
