document.addEventListener('DOMContentLoaded', () => {
    
    const path = window.location.pathname;

    if (path.endsWith('index.html') || path.endsWith('/') || path.endsWith('torneo-calcio/')) {
        caricaClassificaAutomatica();
    } else if (path.endsWith('partite.html')) {
        caricaPartite();
    } else if (path.endsWith('marcatori.html')) {
        caricaMarcatori();
    } else if (path.endsWith('squadre.html')) {
        caricaSquadre();
    }
});

// --- FUNZIONE CLASSIFICA AUTOMATICA ---
async function caricaClassificaAutomatica() {
    try {
        const [squadreRes, partiteRes] = await Promise.all([
            fetch('dati/squadre.json'),
            fetch('dati/partite.json')
        ]);
        const squadreData = await squadreRes.json();
        const partite = await partiteRes.json();

        let classifica = {};
        squadreData.forEach(squadra => {
            classifica[squadra.nome] = {
                punti: 0, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0,
                gf: 0, gs: 0, dr: 0
            };
        });

        partite.forEach(partita => {
            if (partita.status === 'giocata') {
                const casa = partita.squadraCasa;
                const ospite = partita.squadraOspite;
                const golCasa = partita.golCasa;
                const golOspite = partita.golOspite;

                classifica[casa].giocate++;
                classifica[ospite].giocate++;
                classifica[casa].gf += golCasa;
                classifica[casa].gs += golOspite;
                classifica[ospite].gf += golOspite;
                classifica[ospite].gs += golCasa;

                if (golCasa > golOspite) {
                    classifica[casa].vittorie++;
                    classifica[casa].punti += 3;
                    classifica[ospite].sconfitte++;
                } else if (golOspite > golCasa) {
                    classifica[ospite].vittorie++;
                    classifica[ospite].punti += 3;
                    classifica[casa].sconfitte++;
                } else {
                    classifica[casa].pareggi++;
                    classifica[ospite].pareggi++;
                    classifica[casa].punti += 1;
                    classifica[ospite].punti += 1;
                }
            }
        });

        const classificaArray = Object.keys(classifica).map(nomeSquadra => {
            const stats = classifica[nomeSquadra];
            stats.dr = stats.gf - stats.gs;
            stats.squadra = nomeSquadra;
            return stats;
        });

        classificaArray.sort((a, b) => {
            if (a.punti !== b.punti) return b.punti - a.punti;
            if (a.dr !== b.dr) return b.dr - a.dr;
            return b.gf - a.gf; // In caso di parità, chi ha fatto più gol
        });

        const tbody = document.getElementById('corpo-classifica');
        tbody.innerHTML = ''; 

        classificaArray.forEach((squadra, index) => {
            const riga = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${squadra.squadra}</td>
                    <td>${squadra.punti}</td>
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
    } catch (error) {
        console.error("Errore nel caricamento della classifica:", error);
        document.getElementById('corpo-classifica').innerHTML = '<tr><td colspan="10">Errore nel caricamento dati.</td></tr>';
    }
}

// --- FUNZIONE PARTITE (AGGIORNATA) ---
async function caricaPartite() {
    try {
        const response = await fetch('dati/partite.json');
        const partite = await response.json();

        const giocateContainer = document.getElementById('partite-giocate');
        const daGiocareContainer = document.getElementById('partite-da-giocare');

        giocateContainer.innerHTML = '<h3>Partite Giocate</h3>';
        daGiocareContainer.innerHTML = '<h3>Partite da Giocare</h3>';

        let giocateContent = '';
        let daGiocareContent = '';

        partite.forEach(partita => {
            // Se la partita è "da giocare", il risultato è "vs"
            // Se è "giocata", mostriamo il punteggio
            const risultato = partita.status === 'giocata' 
                ? `${partita.golCasa} - ${partita.golOspite}` 
                : 'vs';

            const matchHtml = `
                <div class="match">
                    <span class="match-giornata">(G ${partita.giornata})</span>
                    <span class="match-squadra">${partita.squadraCasa}</span>
                    <span class="match-risultato">${risultato}</span>
                    <span class="match-squadra" style="text-align: left;">${partita.squadraOspite}</span>
                </div>
            `;
            
            if (partita.status === 'giocata') {
                giocateContent += matchHtml;
            } else {
                daGiocareContent += matchHtml;
            }
        });

        giocateContainer.innerHTML += giocateContent || "<p>Nessuna partita ancora giocata.</p>";
        daGiocareContainer.innerHTML += daGiocareContent || "<p>Tutte le partite sono state giocate.</p>";

    } catch (error) {
        console.error("Errore nel caricamento delle partite:", error);
    }
}

// --- FUNZIONE MARCATORI ---
async function caricaMarcatori() {
    try {
        const response = await fetch('dati/marcatori.json');
        const marcatori = await response.json();

        marcatori.sort((a, b) => b.gol - a.gol);

        const tbody = document.getElementById('corpo-marcatori');
        tbody.innerHTML = '';

        marcatori.forEach((p, index) => {
            // Mostriamo solo giocatori che hanno statistiche (o almeno 1 gol)
            // if (p.gol > 0 || p.assist > 0 || p.ammonizioni > 0 || p.espulsioni > 0) {
                const riga = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${p.nome}</td>
                        <td>${p.squadra}</td>
                        <td>${p.gol}</td>
                        <td>${p.assist}</td>
                        <td>${p.ammonizioni}</td>
                        <td>${p.espulsioni}</td>
                    </tr>
                `;
                tbody.innerHTML += riga;
            // }
        });
    } catch (error) {
        console.error("Errore nel caricamento dei marcatori:", error);
        document.getElementById('corpo-marcatori').innerHTML = '<tr><td colspan="7">Errore nel caricamento dati.</td></tr>';
    }
}

// --- FUNZIONE SQUADRE ---
async function caricaSquadre() {
    try {
        const response = await fetch('dati/squadre.json');
        const squadre = await response.json();

        const container = document.getElementById('elenco-squadre');
        container.innerHTML = '';

        squadre.forEach(squadra => {
            let giocatoriHtml = '<ul>';
            squadra.rosa.forEach(giocatore => {
                giocatoriHtml += `<li>${giocatore.nome} <em>(${giocatore.ruolo})</em></li>`;
            });
            giocatoriHtml += '</ul>';

            const squadraHtml = `
                <div class="squadra-card">
                    <h3>${squadra.nome}</h3>
                    ${giocatoriHtml}
                </div>
            `;
            container.innerHTML += squadraHtml;
        });
    } catch (error) {
        console.error("Errore nel caricamento delle squadre:", error);
        document.getElementById('elenco-squadre').innerHTML = '<p>Errore nel caricamento dati.</p>';
    }
}
