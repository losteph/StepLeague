const squadre = [
  {
    nome: "Real Margherita",
    giocatori: [
      { nome: "Luca Rossi", gol: 3, assist: 1, gialli: 1, rossi: 0 },
      { nome: "Marco Bianchi", gol: 2, assist: 0, gialli: 0, rossi: 0 },
    ]
  },
  {
    nome: "FC Birra",
    giocatori: [
      { nome: "Andrea Verdi", gol: 5, assist: 2, gialli: 1, rossi: 0 },
      { nome: "Simone Neri", gol: 1, assist: 3, gialli: 0, rossi: 0 },
    ]
  }
  // ...altre 4 squadre
];

// Partite: andata + ritorno
const partite = [
  { casa: "Real Margherita", trasferta: "FC Birra", golCasa: 2, golTrasferta: 1 },
  { casa: "FC Birra", trasferta: "Real Margherita", golCasa: 0, golTrasferta: 3 },
];

