
export const squadre = [
  { nome: "Real Margherita", giocatori: [
      { nome: "Luca Rossi", gol: 1, assist: 1, gialli: 0, rossi: 0 },
      { nome: "Marco Bianchi", gol: 2, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "FC Birra", giocatori: [
      { nome: "Andrea Verdi", gol: 3, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Simone Neri", gol: 1, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "AS Oliva", giocatori: [
      { nome: "Paolo Gatti", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Daniele Ferro", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "CD Arancio", giocatori: [
      { nome: "Stefano Mare", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Alessio Costa", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "US Verde", giocatori: [
      { nome: "Giorgio Blu", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Fabio Lupo", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "FC Azzurri", giocatori: [
      { nome: "Enrico Viola", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Mattia Luna", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  }
];

// Partite: andata + ritorno (tutte le combinazioni). Imposta date e risultati qui.
export const partite = [
  // Round 1 (esempi di date) - completa con le tue date
  { id: 'm1', data: '2025-04-01', casa: 'Real Margherita', trasferta: 'FC Birra', golCasa: 1, golTrasferta: 0 },
  { id: 'm2', data: '2025-04-01', casa: 'AS Oliva', trasferta: 'CD Arancio', golCasa: 0, golTrasferta: 2 },
  { id: 'm3', data: '2025-04-01', casa: 'US Verde', trasferta: 'FC Azzurri', golCasa: 3, golTrasferta: 3 },
  // Round 1 ritorno
  { id: 'm4', data: '2025-04-08', casa: 'FC Birra', trasferta: 'Real Margherita', golCasa: null, golTrasferta: null },
  { id: 'm5', data: '2025-04-09', casa: 'CD Arancio', trasferta: 'AS Oliva', golCasa: null, golTrasferta: null },
  { id: 'm6', data: '2025-04-10', casa: 'FC Azzurri', trasferta: 'US Verde', golCasa: null, golTrasferta: null },
  // altri incontri (esempi) - aggiungi tutte le partite necessarie per coprire tutti gli scontri andata/ritorno
  { id: 'm7', data: '2025-04-15', casa: 'Real Margherita', trasferta: 'AS Oliva', golCasa: null, golTrasferta: null },
  { id: 'm8', data: '2025-04-16', casa: 'FC Birra', trasferta: 'US Verde', golCasa: null, golTrasferta: null },
  { id: 'm9', data: '2025-04-17', casa: 'CD Arancio', trasferta: 'FC Azzurri', golCasa: null, golTrasferta: null },
  // ... continua fino ad avere tutte le combinazioni andata+ritorno
];

// Playoff (visualizzati in fondo al calendario). Puoi aggiornare le squadre e i risultati manualmente qui.
export const playoff = [
  { id: 'p1', data: 'Semifinale 1', casa: '1ª Classificata', trasferta: '3ª Classificata', golCasa: null, golTrasferta: null },
  { id: 'p2', data: 'Semifinale 2', casa: '2ª Classificata', trasferta: '4ª Classificata', golCasa: null, golTrasferta: null },
  { id: 'p3', data: 'Finale 1°/2°', casa: 'Vincente S1', trasferta: 'Vincente S2', golCasa: null, golTrasferta: null },
  { id: 'p4', data: 'Finale 3°/4°', casa: 'Perdente S1', trasferta: 'Perdente S2', golCasa: null, golTrasferta: null }
];
