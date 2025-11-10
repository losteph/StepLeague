# Gestore Torneo di Calcio ⚽

Un semplice sito web statico per gestire e visualizzare in tempo reale la classifica, le partite, i marcatori e le squadre di un torneo di calcio a 6 squadre.

Il sito è ospitato gratuitamente tramite **GitHub Pages** e utilizza JavaScript per caricare i dati da file JSON, calcolando automaticamente le classifiche ogni volta che un utente visita la pagina.

---

## 🏆 Caratteristiche Principali

* **Classifica Automatica:** La classifica generale (punti, V, N, S, GF, GS, DR) si calcola automaticamente in base ai risultati inseriti.
* **Calendario e Risultati:** Mostra tutte le partite, divise per giornata, con data, ora e risultato (o "vs" se non ancora giocata).
* **Classifica Marcatori:** Ordina automaticamente i giocatori per numero di gol, mostrando anche assist e cartellini.
* **Rose delle Squadre:** Elenca tutti i giocatori e il loro ruolo per ogni squadra.
* **Legenda:** Una chiara legenda spiega il significato di ogni acronimo della classifica.

---

## 🛠️ Tecnologie Utilizzate

* **HTML5:** Per la struttura delle pagine.
* **CSS3:** Per lo stile e il layout.
* **JavaScript (ES6+):** Per la logica, i calcoli e il caricamento dinamico dei dati.
* **JSON:** Usato come un "mini-database" per contenere tutti i dati del torneo.
* **GitHub Pages:** Per l'hosting gratuito del sito.

---

## ⚙️ Come Funziona

Questo sito utilizza un approccio "statico-dinamico". Non c'è un vero database. Tutta la logica è gestita dal JavaScript nel browser del visitatore.

1.  I **dati** del torneo (squadre, giocatori, partite) sono memorizzati in file `.json` nella cartella `/dati/`.
2.  Quando un utente visita una pagina (es. `index.html`), il file JavaScript associato (es. `js/classifica.js`) viene eseguito.
3.  Lo script:
    * Carica i file `.json` necessari.
    * Esegue tutti i calcoli (es. calcola i punti di ogni squadra).
    * Genera l'HTML (es. le righe della tabella) e lo inserisce nella pagina.

Il "tempo reale" si ottiene semplicemente modificando i file `.json` e salvandoli (facendo "commit") su GitHub.

---

## 🚀 Guida Rapida all'Aggiornamento

Per aggiornare il sito **non devi MAI toccare i file `.html` o `.js`**. Devi modificare **solo** i file nella cartella `/dati/`.

### 1. Per aggiornare una Partita (e la Classifica)
Dopo che una partita è terminata:

1.  Apri il file `dati/partite.json`.
2.  Trova la partita giusta.
3.  Modifica i tre campi: `golCasa`, `golOspite` e `status`.

**Prima (partita da giocare):**
```json
{
  "giornata": 1,
  "squadraCasa": "I Titanici",
  "squadraOspite": "I Bomber",
  "golCasa": null,
  "golOspite": null,
  "status": "da giocare",
  "data": "Sab 15/11", "ora": "18:00"
}
```

**Dopo (Partita giocata):**
```json
{
  "giornata": 1,
  "squadraCasa": "I Titanici",
  "squadraOspite": "I Bomber",
  "golCasa": 1,
  "golOspite": 2,
  "status": "giocata",
  "data": "Sab 15/11", "ora": "18:00"
}
```

### 2. Per aggiornare la Classifica Marcatori:

1.  Apri il file `dati/marcatori.json`.
2.  Trova il giocatore giusto (per trovarlo rapitamente si può usare `Ctrl+F` o `Cmd+F`).
3.  Modifica i valori.

### 3. Per modificare le Rose:
Devi cambiare eventualmente un nome o un ruolo in entrambi i file: `dati/squadre.json` e `dati/marcatori.json`.


---
# 📁 Struttura del Progetto

```
/
|-- index.html       (Pagina Classifica)
|-- partite.html     (Pagina Calendario)
|-- marcatori.html   (Pagina Marcatori)
|-- squadre.html     (Pagina Squadre)
|
|-- /css/
|   |-- style.css    (Stile)
|
|-- /js/
|   |-- classifica.js (Logica per la Classifica)
|   |-- partite.js    (Logica per le Partite)
|   |-- marcatori.js  (Logica per i Marcatori)
|   |-- squadre.js    (Logica per le Squadre)
|
|-- /dati/
|   |-- partite.json     (Risultati, Date, Ore)
|   |-- marcatori.json   (Gol, Assist, Cartellini)
|   |-- squadre.json     (Rose delle squadre)
|
|-- README.md        (Questo file)
```


