import { squadre } from './data.js';

const container = document.querySelector('#teams-list');

function render(){
  container.innerHTML = '';
  squadre.forEach(s=>{
    const div = document.createElement('div'); div.className='team-card';
    const players = s.giocatori.map(g=> `<li>${g.nome} — G:${g.gol} A:${g.assist} Y:${g.gialli} R:${g.rossi}</li>`).join('');
    div.innerHTML = `<h3>${s.nome}</h3><ul>${players}</ul>`;
    container.appendChild(div);
  });
}

render();

