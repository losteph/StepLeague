import { partite } from './data.js';
import { deepClone } from './utils.js';

const tableBody = document.querySelector('#table-partite tbody');
const select = document.querySelector('#match-select');
const form = document.querySelector('#result-form');
const inputCasa = document.querySelector('#gol-casa');
const inputTrasf = document.querySelector('#gol-trasf');

let matches = deepClone(partite);

function renderTable(){
  tableBody.innerHTML = '';
  matches.forEach(m => {
    const tr = document.createElement('tr');
    const score = (m.golCasa === null) ? '-' : `${m.golCasa} - ${m.golTrasferta}`;
    tr.innerHTML = `<td>${m.data || ''}</td><td>${m.casa}</td><td>v</td><td>${m.trasferta}</td><td>${score}</td><td><button data-id="${m.id}" class="edit">Modifica</button></td>`;
    tableBody.appendChild(tr);
  });
}

function populateSelect(){
  select.innerHTML = '';
  matches.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id; opt.textContent = `${m.casa} - ${m.trasferta}`;
    select.appendChild(opt);
  });
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  const id = select.value; const gC = parseInt(inputCasa.value,10); const gT = parseInt(inputTrasf.value,10);
  const m = matches.find(x=>x.id===id);
  m.golCasa = Number.isNaN(gC) ? 0 : gC;
  m.golTrasferta = Number.isNaN(gT) ? 0 : gT;
  renderTable();
  // salvataggio su localStorage per persistenza minima
  localStorage.setItem('torneo_partite', JSON.stringify(matches));
  alert('Risultato salvato (in locale). Aggiorna la pagina Classifica per ricalcolare.');
});

// gestione pulsanti modifica

document.addEventListener('click', e=>{
  if (e.target.matches('button.edit')){
    const id = e.target.getAttribute('data-id');
    select.value = id;
    const m = matches.find(x=>x.id===id);
    inputCasa.value = (m.golCasa===null)? '' : m.golCasa;
    inputTrasf.value = (m.golTrasferta===null)? '' : m.golTrasferta;
    window.scrollTo(0,document.body.scrollHeight);
  }
});

// carica da localStorage se esiste
const saved = localStorage.getItem('torneo_partite');
if (saved) matches = JSON.parse(saved);

populateSelect();
renderTable();

// espone funzione per altre pagine
window.__torneo_update_partite = function(newArr){ matches = newArr; localStorage.setItem('torneo_partite', JSON.stringify(matches)); renderTable(); };

