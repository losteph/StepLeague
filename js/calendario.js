import { partite, playoff } from './data.js';

const bodyPartite = document.querySelector('#table-partite tbody');
const bodyPlayoff = document.querySelector('#table-playoff tbody');

function renderPartite(){
  // Ordina per data (se presente)
  const sorted = Array.from(partite).sort((a,b)=>{
    if (!a.data) return 1; if (!b.data) return -1;
    return a.data.localeCompare(b.data);
  });
  bodyPartite.innerHTML = '';
  sorted.forEach(p=>{
    const score = (p.golCasa == null) ? '-' : `${p.golCasa} - ${p.golTrasferta}`;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${p.data || ''}</td><td>${p.casa}</td><td>vs</td><td>${p.trasferta}</td><td>${score}</td>`;
    bodyPartite.appendChild(tr);
  });
}

function renderPlayoff(){
  bodyPlayoff.innerHTML = '';
  playoff.forEach(p=>{
    const score = (p.golCasa == null) ? '-' : `${p.golCasa} - ${p.golTrasferta}`;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${p.data}</td><td>${p.casa}</td><td>vs</td><td>${p.trasferta}</td><td>${score}</td>`;
    bodyPlayoff.appendChild(tr);
  });
}

renderPartite();
renderPlayoff();
