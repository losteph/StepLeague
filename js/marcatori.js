import { squadre } from './data.js';
import { calcolaMarcatori } from './utils.js';

const tbody = document.querySelector('#table-marcatori tbody');

function render(){
  const lista = calcolaMarcatori(squadre);
  tbody.innerHTML = '';
  lista.forEach((g,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${g.nome}</td><td>${g.squadra}</td><td>${g.gol}</td><td>${g.assist}</td><td>${g.gialli}</td><td>${g.rossi}</td>`;
    tbody.appendChild(tr);
  });
}

render();
