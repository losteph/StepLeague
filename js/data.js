// Modifica QUI i dati: 6 squadre, giocatori e partite (andata+ritorno generati automaticamente)
export const squadre = [
  { nome: "Real Margherita", giocatori: [
      { nome: "Luca Rossi", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Marco Bianchi", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "FC Birra", giocatori: [
      { nome: "Andrea Verdi", gol: 0, assist: 0, gialli: 0, rossi: 0 },
      { nome: "Simone Neri", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "AS Oliva", giocatori: [
      { nome: "Paolo Gatti", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "CD Arancio", giocatori: [
      { nome: "Stefano Mare", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "US Verde", giocatori: [
      { nome: "Giorgio Blu", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  },
  { nome: "FC Azzurri", giocatori: [
      { nome: "Enrico Viola", gol: 0, assist: 0, gialli: 0, rossi: 0 }
    ]
  }
];

// Genera il calendario (andata + ritorno) automaticamente
export function generaPartite() {
  const nomi = squadre.map(s => s.nome);
  const partite = [];
  for (let i = 0; i < nomi.length; i++) {
    for (let j = i + 1; j < nomi.length; j++) {
      // andata
      partite.push({ id: `${nomi[i]}_vs_${nomi[j]}`, casa: nomi[i], trasferta: nomi[j], data: '', golCasa: null, golTrasferta: null });
      // ritorno
      partite.push({ id: `${nomi[j]}_vs_${nomi[i]}`, casa: nomi[j], trasferta: nomi[i], data: '', golCasa: null, golTrasferta: null });
    }
  }
  return partite;
}

export let partite = generaPartite();

