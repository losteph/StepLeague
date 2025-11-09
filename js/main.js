document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // La pagina della classifica ora usa la funzione automatica
    if (path.endsWith('index.html') || path.endsWith('/')) {
        caricaClassificaAutomatica();
    } else if (path.endsWith('partite.html')) {
        caricaPartite(); // Questa funzione andrà aggiornata
    } else if (path.endsWith('marcatori.html')) {
        caricaMarcatori(); // Questa funzione va già bene!
    } else if (path.endsWith('squadre.html')) {
        caricaSquadre(); // Questa funzione va già bene
    }
});

// --- NUOVA FUNZIONE PER CLASSIFICA AUTOMATICA ---
async function caricaClassificaAutomatica() {
    // 1. Carica l'elenco delle squadre e tutte le partite
    const [squadreRes, partiteRes] = await Promise.all([
        fetch('dati/squadre.json'),
        fetch('dati/partite.json')
    ]);
    const squadreData = await squadreRes.json();
    const partite = await partiteRes.json();

    // 2. Prepara un oggetto "classifica" vuoto
    let classifica = {};
    squadreData.forEach(squadra => {
        classifica[squadra.nome] = {
            punti: 0,
            giocate: 0,
            vittorie: 0,
            pareggi: 0,
            sconfitte: 0,
            gf: 0,
            gs: 0,
            dr: 0
        };
    });

    // 3. Calcola i punteggi ciclando solo le partite "giocate"
    partite.forEach(partita => {
        if (partita.status === 'giocata') {
            const casa = partita.squadraCasa;
            const ospite = partita.squadraOspite;
            const golCasa = partita.golCasa;
            const golOspite = partita.golOspite;

            // Aggiorna partite giocate e gol
            classifica[casa].giocate++;
            classifica[ospite].giocate++;
            classifica[casa].gf += golCasa;
            classifica[casa].gs += golOspite;
            classifica[ospite].gf += golOspite;
            classifica[ospite].gs += golCasa;

            // Assegna punti
            if (golCasa > golOspite) { // Vittoria casa
                classifica[casa].vittorie++;
                classifica[casa].punti += 3;
                classifica[ospite].sconfitte++;
            } else if (golOspite > golCasa) { // Vittoria ospite
                classifica[ospite].vittorie++;
                classifica[ospite].punti += 3;
                classifica[casa].sconfitte++;
            } else { // Pareggio
                classifica[casa].pareggi++;
                classifica[ospite].pareggi++;
                classifica[casa].punti += 1;
                classifica[ospite].punti += 1;
            }
        }
    });

    // 4. Converti l'oggetto in un array per ordinarlo
    const classificaArray = Object.keys(classifica).map(nomeSquadra => {
        const stats = classifica[nomeSquadra];
        stats.dr = stats.gf - stats.gs; // Calcola la Diff. Reti
        stats.squadra = nomeSquadra;     // Aggiungi il nome per l'HTML
        return stats;
    });

    // 5. Ordina l'array (per punti, poi diff. reti)
    classificaArray.sort((a, b) => {
        if (a.punti !== b.punti) {
            return b.punti - a.punti;
        }
        return b.dr - a.dr;
    });

    // 6. Stampa l'HTML (identico a prima)
    const tbody = document.getElementById('corpo-classifica');
    tbody.innerHTML = ''; 

    classificaArray.forEach((squadra, index) => {
        const riga = `
            <tr>
                <td>${index + 1}</td>
                <td>${squadra.squadra}</td>
                <td><strong>${squadra.punti}</strong></td>
                <td>${squadra.giocate}</td>
                <td>${squadra.vittorie}</td>
                <td>${squadra.pareggi}</td>
                <td>${squadra.sconfitte}</td>
                <td>${squadra.gf}</td>
                <td>${squadra.gs}</td>
                <td>${squadra.dr}</td>
            </tr>
        `;
        tbody.innerHTML += riga;
    });
}

// --- CLASSIFICA MARCATORI (Questa va già bene!) ---
// Il tuo ragionamento è corretto: questa funzione legge il file
// che tu modifichi e lo ORDINA automaticamente.
async function caricaMarcatori() {
    const response = await fetch('dati/marcatori.json');
    const marcatori = await response.json();

    // Ordina per gol (più alto prima)
    marcatori.sort((a, b) => b.gol - a.gol);

    const tbody = document.getElementById('corpo-marcatori');
    tbody.innerHTML = '';

    marcatori.forEach((p, index) => {
        const riga = `
            <tr>
                <td>${index + 1}</td>
                <td>${p.nome}</td>
                <td>${p.squadra}</td>
                <td><strong>${p.gol}</strong></td>
                <td>${p.assist}</td>
                <td>${p.ammonizioni}</td>
                <td>${p.espulsioni}</td>
            </tr>
        `;
        tbody.innerHTML += riga;
    });
}

// ... includi qui anche le funzioni caricaSquadre() e caricaPartite() ...
// (caricaPartite dovrà essere aggiornata per leggere il nuovo formato)
