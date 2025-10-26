import { squadre } from './data.js';

const giocatori = squadre.flatMap(s => s.giocatori.map(g => ({ squadra: s.nome, ...g })));
giocatori.sort((a, b) => b.gol - a.gol);

const tbody = document.querySelector("#marcatori tbody");
giocatori.forEach(g => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${g.nome}</td><td>${g.squadra}</td><td>${g.gol}</td><td>${g.assist}</td>`;
  tbody.appendChild(tr);
});

