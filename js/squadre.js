import { squadre } from './data.js';

const container = document.querySelector('#table-squadre tbody');
container.innerHTML = '';

squadre.forEach(sq => {
  const trTitolo = document.createElement('tr');
  trTitolo.innerHTML = `<td colspan="1"><strong>${sq.nome}</strong></td>`;
  container.appendChild(trTitolo);

  sq.giocatori.forEach(g => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${g.nome}</td>`;
    container.appendChild(tr);
  });
});
