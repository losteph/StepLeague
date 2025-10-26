import { squadre, partite } from './data.js';
import { calcolaClassifica } from './utils.js';

const tbody = document.querySelector('#table-classifica tbody');
function render(){
  const cls = calcolaClassifica(squadre, partite);
  tbody.innerHTML = '';
  cls.forEach((r, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${r.nome}</td><td>${r.giocate}</td><td>${r.vinte}</td><td>${r.pareggiate}</td><td>${r.perse}</td><td>${r.gf}</td><td>${r.gs}</td><td>${r.dg}</td><td>${r.punti}</td>`;
    tbody.appendChild(tr);
  });
}

render();

// espone funzione per altre pagine
window.__torneo_render_classifica = render;
