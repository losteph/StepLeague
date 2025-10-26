import { squadre, partite } from './data.js';

const classifica = squadre.map(s => ({
  nome: s.nome,
  giocate: 0,
  vinte: 0,
  pareggiate: 0,
  perse: 0,
  golFatti: 0,
  golSubiti: 0,
  punti: 0
}));

partite.forEach(p => {
  const casa = classifica.find(t => t.nome === p.casa);
  const trasf = classifica.find(t => t.nome === p.trasferta);

  casa.giocate++;
  trasf.giocate++;
  casa.golFatti += p.golCasa;
  casa.golSubiti += p.golTrasferta;
  trasf.golFatti += p.golTrasferta;
  trasf.golSubiti += p.golCasa;

  if (p.golCasa > p.golTrasferta) {
    casa.vinte++; trasf.perse++; casa.punti += 3;
  } else if (p.golCasa < p.golTrasferta) {
    trasf.vinte++; casa.perse++; trasf.punti += 3;
  } else {
    casa.pareggiate++; trasf.pareggiate++;
    casa.punti++; trasf.punti++;
  }
});

classifica.sort((a, b) => b.punti - a.punti || (b.golFatti - b.golSubiti) - (a.golFatti - a.golSubiti));

// Mostra tabella
const tbody = document.querySelector("#classifica tbody");
classifica.forEach(t => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${t.nome}</td><td>${t.punti}</td><td>${t.golFatti}</td><td>${t.golSubiti}</td>`;
  tbody.appendChild(tr);
});

