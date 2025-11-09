document.addEventListener('DOMContentLoaded', () => {
    caricaPartite();
});

async function caricaPartite() {
    try {
        const response = await fetch('dati/partite.json');
        const partite = await response.json();

        const container = document.getElementById('calendario-completo');
        container.innerHTML = '';

        let currentGiornata = 0;
        let giornataHtml = '';

        partite.forEach(partita => {
            // Se è una nuova giornata, crea un nuovo titolo
            if (partita.giornata !== currentGiornata) {
                // Se non è la prima giornata, chiudi il div precedente
                if (currentGiornata !== 0) {
                    container.innerHTML += giornataHtml; // Aggiungi il blocco della giornata
                }
                // Inizia una nuova giornata
                currentGiornata = partita.giornata;
                giornataHtml = `<h3>Giornata ${currentGiornata}</h3>`;
            }

            // Determina il risultato
            const risultato = partita.status === 'giocata' 
                ? `${partita.golCasa} - ${partita.golOspite}` 
                : 'vs';

            // Aggiungi la partita al blocco HTML della giornata
            giornataHtml += `
                <div class="match">
                    <span class="match-squadra">${partita.squadraCasa}</span>
                    <span class="match-risultato">${risultato}</span>
                    <span class="match-squadra" style="text-align: left;">${partita.squadraOspite}</span>
                </div>
            `;
        });

        // Aggiungi l'ultimo blocco di giornate
        container.innerHTML += giornataHtml;

    } catch (error) {
        console.error("Errore nel caricamento delle partite:", error);
        container.innerHTML = '<p>Errore nel caricamento del calendario.</p>';
    }
}
