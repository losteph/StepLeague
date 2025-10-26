# StepLeague

Progetto statico pronto per GitHub Pages. Contiene:
- index.html (Classifica)
- calendario.html (Calendario e inserimento risultati)
- squadre.html (Pagina squadre e dettagli giocatori)
- marcatori.html (Classifica marcatori)
- playoff.html (Gestione playoff)
- css/style.css
- js/data.js (dati)
- js/classifica.js
- js/calendario.js
- js/marcatori.js
- js/squadre.js
- js/utils.js

Istruzioni rapide:
1. Clona questa cartella localmente o copia i file nella tua cartella `torneo-calcio`.
2. Controlla `js/data.js` e inserisci i nomi delle 6 squadre e i giocatori.
3. Apri `index.html` in locale per testare oppure carica tutto su GitHub e abilita GitHub Pages (branch `main`, root).

--- index.html ---
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Torneo di Calcio</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>Torneo di Calcio</h1>
    <nav>
      <a href="index.html">Classifica</a>
      <a href="calendario.html">Calendario</a>
      <a href="squadre.html">Squadre</a>
      <a href="marcatori.html">Marcatori</a>
      <a href="playoff.html">Playoff</a>
    </nav>
  </header>

  <main class="container">
    <section>
      <h2>Classifica</h2>
      <table id="table-classifica" class="table">
        <thead>
          <tr><th>Pos</th><th>Squadra</th><th>G</th><th>V</th><th>P</th><th>S</th><th>GF</th><th>GS</th><th>DG</th><th>Punti</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  </main>

  <footer class="footer">Creato con ❤️ — versione base</footer>

  <script type="module" src="js/classifica.js"></script>
</body>
</html>

--- calendario.html ---
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Calendario - Torneo</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>Calendario</h1>
    <nav>
      <a href="index.html">Classifica</a>
      <a href="calendario.html">Calendario</a>
      <a href="squadre.html">Squadre</a>
      <a href="marcatori.html">Marcatori</a>
      <a href="playoff.html">Playoff</a>
    </nav>
  </header>

  <main class="container">
    <section>
      <h2>Partite</h2>
      <table id="table-partite" class="table">
        <thead><tr><th>Data</th><th>Casa</th><th></th><th>Trasferta</th><th>Risultato</th><th>Azioni</th></tr></thead>
        <tbody></tbody>
      </table>

      <h3>Aggiungi / Modifica risultato</h3>
      <form id="result-form">
        <select id="match-select"></select>
        <input type="number" id="gol-casa" min="0" placeholder="Gol casa">
        <input type="number" id="gol-trasf" min="0" placeholder="Gol trasferta">
        <button type="submit">Salva risultato</button>
      </form>
    </section>
  </main>

  <script type="module" src="js/calendario.js"></script>
</body>
</html>

--- squadre.html ---
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Squadre - Torneo</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>Squadre</h1>
    <nav>
      <a href="index.html">Classifica</a>
      <a href="calendario.html">Calendario</a>
      <a href="squadre.html">Squadre</a>
      <a href="marcatori.html">Marcatori</a>
      <a href="playoff.html">Playoff</a>
    </nav>
  </header>

  <main class="container">
    <section id="teams-list">
      <!-- Lista squadre riempita da JS -->
    </section>
  </main>

  <script type="module" src="js/squadre.js"></script>
</body>
</html>

--- marcatori.html ---
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Marcatori - Torneo</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>Classifica Marcatori</h1>
    <nav>
      <a href="index.html">Classifica</a>
      <a href="calendario.html">Calendario</a>
      <a href="squadre.html">Squadre</a>
      <a href="marcatori.html">Marcatori</a>
      <a href="playoff.html">Playoff</a>
    </nav>
  </header>

  <main class="container">
    <table id="table-marcatori" class="table">
      <thead><tr><th>Pos</th><th>Giocatore</th><th>Squadra</th><th>Gol</th><th>Assist</th><th>Gialli</th><th>Rossi</th></tr></thead>
      <tbody></tbody>
    </table>
  </main>

  <script type="module" src="js/marcatori.js"></script>
</body>
</html>

--- playoff.html ---
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Playoff - Torneo</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>Playoff</h1>
    <nav>
      <a href="index.html">Classifica</a>
      <a href="calendario.html">Calendario</a>
      <a href="squadre.html">Squadre</a>
      <a href="marcatori.html">Marcatori</a>
      <a href="playoff.html">Playoff</a>
    </nav>
  </header>

  <main class="container">
    <section>
      <h2>Semifinali</h2>
      <div id="semifinali"></div>

      <h2>Finali</h2>
      <div id="finali"></div>
    </section>
  </main>

  <script type="module" src="js/classifica.js"></script>
  <script type="module" src="js/calendario.js"></script>
</body>
</html>

--- css/style.css ---
:root{--accent:#0b6efd}
*{box-sizing:border-box}
body{font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;background:#f3f4f6;margin:0;color:#111}
.site-header{background:white;padding:18px 12px;border-bottom:1px solid #e6e9ef;text-align:center}
.site-header h1{margin:0}
nav a{margin:0 8px;color:var(--accent);text-decoration:none}
.container{max-width:980px;margin:26px auto;padding:0 12px}
.table{width:100%;border-collapse:collapse;background:white;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.table th,.table td{padding:10px;border-bottom:1px solid #eee;text-align:center}
.table thead th{background:#fafafa}
.team-card{background:white;padding:12px;margin-bottom:12px;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.footer{text-align:center;padding:12px;color:#666}
button, input[type=number], select{padding:8px;border-radius:6px;border:1px solid #ddd}

--- js/data.js ---
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

--- js/utils.js ---
export function deepClone(v){return JSON.parse(JSON.stringify(v))}

// funzione per calcolare classifica da dati
export function calcolaClassifica(squadreArr, partiteArr){
  const cls = squadreArr.map(s => ({ nome: s.nome, giocate:0, vinte:0, pareggiate:0, perse:0, gf:0, gs:0, dg:0, punti:0 }));
  partiteArr.forEach(p=>{
    if (p.golCasa === null || p.golTrasferta === null) return; // partita non disputata
    const c = cls.find(x=>x.nome===p.casa);
    const t = cls.find(x=>x.nome===p.trasferta);
    c.giocate++; t.giocate++;
    c.gf += p.golCasa; c.gs += p.golTrasferta;
    t.gf += p.golTrasferta; t.gs += p.golCasa;
    if (p.golCasa > p.golTrasferta){ c.vinte++; t.perse++; c.punti += 3; }
    else if (p.golCasa < p.golTrasferta){ t.vinte++; c.perse++; t.punti += 3; }
    else { c.pareggiate++; t.pareggiate++; c.punti++; t.punti++; }
  });
  cls.forEach(x=> x.dg = x.gf - x.gs);
  cls.sort((a,b)=> b.punti - a.punti || b.dg - a.dg || b.gf - a.gf);
  return cls;
}

export function calcolaMarcatori(squadreArr){
  const lista = [];
  squadreArr.forEach(s=> s.giocatori.forEach(g=> lista.push({ nome: g.nome, squadra: s.nome, gol: g.gol || 0, assist: g.assist || 0, gialli: g.gialli || 0, rossi: g.rossi || 0 })));
  lista.sort((a,b)=> b.gol - a.gol || b.assist - a.assist);
  return lista;
}

--- js/classifica.js ---
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

--- js/calendario.js ---
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

--- js/marcatori.js ---
import { squadre } from './data.js';
import { calcolaMarcatori } from './utils.js';

const tbody = document.querySelector('#table-marcatori tbody');
function render(){
  const lista = calcolaMarcatori(squadre);
  tbody.innerHTML = '';
  lista.forEach((g, i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${g.nome}</td><td>${g.squadra}</td><td>${g.gol}</td><td>${g.assist}</td><td>${g.gialli}</td><td>${g.rossi}</td>`;
    tbody.appendChild(tr);
  });
}

render();

--- js/squadre.js ---
import { squadre } from './data.js';
import { calcolaMarcatori } from './utils.js';

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

--- END ---

