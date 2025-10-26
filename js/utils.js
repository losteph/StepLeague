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

