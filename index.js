// Attacker type -> { defenderType: multiplier }. Unlisted pairs default to 1x.
const TYPE_CHART = {
  normal:   { rock: 0.5, ghost: 0, steel: 0.5 },
  fire:     { grass: 2, bug: 2, ice: 2, steel: 2, water: 0.5, fire: 0.5, rock: 0.5, dragon: 0.5 },
  water:    { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
  grass:    { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 },
  electric: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 },
  ghost:    { psychic: 2, ghost: 2, normal: 0, dark: 0.5 },
  fighting: { normal: 2, rock: 2, ice: 2, dark: 2, steel: 2, ghost: 0, psychic: 0.5, flying: 0.5, poison: 0.5, bug: 0.5, fairy: 0.5 },
  psychic:  { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  rock:     { fire: 2, flying: 2, bug: 2, ice: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
  poison:   { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
  ground:   { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0 },
  flying:   { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 },
  bug:      { grass: 2, psychic: 2, fire: 0.5, fighting: 0.5, flying: 0.5, ghost: 0.5, poison: 0.5, steel: 0.5, fairy: 0.5 },
  ice:      { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5, fairy: 0.5 },
  dragon:   { dragon: 2, steel: 0.5, fairy: 0 },
  dark:     { psychic: 2, ghost: 2, dark: 0.5, fighting: 0.5, fairy: 0.5 },
  steel:    { ice: 2, rock: 2, fairy: 2, steel: 0.5, fire: 0.5, water: 0.5, electric: 0.5 },
  fairy:    { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5 }
};

function typeEffectiveness(attackerType, defenderType, defenderType2) {
  const row = TYPE_CHART[attackerType], f = t => (!row || row[t] === undefined ? 1 : row[t]);
  return f(defenderType) * (defenderType2 ? f(defenderType2) : 1);
}
const statRatio = (a, d) => (a.bs && d.bs ? Math.min(1.35, Math.max(0.75, Math.sqrt(a.bs.atk / d.bs.def))) : 1);
const hpMult = n => { const b = POKEDEX[n] && POKEDEX[n].bs; return b ? Math.min(1.4, Math.max(0.7, b.hp / 100)) : 1; };
const T = ms => ms * ({ slow: 1.6, normal: 1, fast: 0.5 }[localStorage.getItem('battleSpeed')] || 1);   // battle speed setting
if (localStorage.getItem('reduceMotion') === '1') document.documentElement.classList.add('reduce-motion');

// ---------- speed, real move types, stat moves, weather ----------
const VS = localStorage.getItem('vsMode') === '1';   // 2-player hot-seat battle
const PRIORITY = { 'Quick Attack': 1, 'Extreme Speed': 2 };
// Every move has its own type; anything not listed is Normal.
const MOVE_TYPE = {
  'Thunder Shock':'electric','Thunderbolt':'electric','Thunder':'electric','Thunder Punch':'electric','Thunder Fang':'electric','Spark':'electric',
  'Vine Whip':'grass','Razor Leaf':'grass','Seed Bomb':'grass','Absorb':'grass','Solar Beam':'grass',
  'Ember':'fire','Flame Burst':'fire','Flamethrower':'fire','Fire Fang':'fire','Fire Spin':'fire','Flame Wheel':'fire','Fire Punch':'fire',
  'Bubble':'water','Water Gun':'water','Water Cannon':'water','Water Pulse':'water','Surf':'water','Hydro Pump':'water','Waterfall':'water',
  'Shadow Ball':'ghost','Lick':'ghost','Night Shade':'ghost',
  'Sludge Bomb':'poison','Sludge':'poison','Poison Sting':'poison','Acid':'poison','Poison Jab':'poison','Smog':'poison','Poison Powder':'poison',
  'Karate Chop':'fighting','Low Kick':'fighting','Seismic Toss':'fighting','Cross Chop':'fighting','Aura Sphere':'fighting','Close Combat':'fighting','Force Palm':'fighting',
  'Confusion':'psychic','Psybeam':'psychic','Psyshock':'psychic','Psychic':'psychic','Dream Eater':'psychic',
  'Rock Throw':'rock','Rock Slide':'rock','Rollout':'rock',
  'Bone Club':'ground','Bonemerang':'ground','Earthquake':'ground','Sand Attack':'ground',
  'Wing Attack':'flying','Gust':'flying','Air Slash':'flying','Air Cutter':'flying','Peck':'flying','Drill Peck':'flying',
  'X-Scissor':'bug','Fury Cutter':'bug','Bug Buzz':'bug','Silver Wind':'bug','Leech Life':'bug','Pin Missile':'bug','String Shot':'bug',
  'Ice Beam':'ice','Ice Punch':'ice','Powder Snow':'ice','Blizzard':'ice',
  'Dragon Claw':'dragon','Dragon Rage':'dragon','Outrage':'dragon','Twister':'dragon',
  'Bite':'dark','Crunch':'dark','Feint Attack':'dark',
  'Iron Tail':'steel','Metal Claw':'steel','Iron Head':'steel',
  'Moonblast':'fairy'
};
const moveType = m => MOVE_TYPE[m.name] || 'normal';

// Stat-changing moves: stat = [stat, stages, targetsSelf]. They replace one weak move on a few Pokémon.
const STAT_MOVES = {
  'Swords Dance': { name:'Swords Dance', power:0, stat:['atk', 2, true] },
  'Growl':        { name:'Growl',        power:0, stat:['atk', -1, false] },
  'Leer':         { name:'Leer',         power:0, stat:['def', -1, false] },
  'Harden':       { name:'Harden',       power:0, stat:['def', 1, true] },
  'Agility':      { name:'Agility',      power:0, stat:['spd', 2, true] },
  'String Shot':  { name:'String Shot',  power:0, stat:['spd', -1, false] }
};
const MOVE_SWAPS = { Charmander:[1,'Growl'], Squirtle:[1,'Leer'], Bulbasaur:[1,'Growl'], Machop:[1,'Swords Dance'], Scyther:[2,'Swords Dance'],
  Onix:[2,'Harden'], Golem:[3,'Harden'], Pikachu:[3,'Agility'], Butterfree:[1,'String Shot'], Dragonite:[2,'Swords Dance'], Lucario:[3,'Swords Dance'],
  Meowth:[0,'Growl'], Eevee:[1,'Growl'], Zubat:[1,'Leer'], Gyarados:[3,'Swords Dance'], Ekans:[0,'Leer'], Jolteon:[1,'Agility'],
  Charmeleon:[1,'Growl'], Wartortle:[1,'Leer'], Hitmonchan:[3,'Swords Dance'], Pinsir:[3,'Swords Dance'] };
Object.entries(MOVE_SWAPS).forEach(([n, [i, m]]) => { POKEDEX[n].moves[i] = { ...STAT_MOVES[m] }; });

const stageMult = s => (s >= 0 ? (2 + s) / 2 : 2 / (2 - s));
const freshStages = () => ({ atk: 0, def: 0, spd: 0 });
const stageTag = m => Object.entries(m.stages || {}).filter(([, v]) => v)
  .map(([k, v]) => `<span class="type-badge" style="background:${v > 0 ? '#2e8b57' : '#8b2e2e'}">${k.toUpperCase()}${v > 0 ? '+' : ''}${v}</span>`).join('');
function effSpeed(m) { return (m.speed || 60) * stageMult((m.stages || {}).spd || 0) * (m.status === 'par' ? 0.5 : 1); }
// true if attacker `a` (using move am) acts before `b` (using bm): priority first, then speed, ties are a coin flip
function moveFirst(a, am, b, bm) {
  const pa = PRIORITY[am.name] || 0, pb = PRIORITY[bm.name] || 0;
  if (pa !== pb) return pa > pb;
  const sa = effSpeed(a), sb = effSpeed(b);
  return sa === sb ? Math.random() < 0.5 : sa > sb;
}

const WEATHER = {
  rain: { label:'RAIN',      icon:'🌧', boost:'water', cut:'fire',  up:1.5, start:'It started to rain!' },
  sun:  { label:'HARSH SUN', icon:'☀',  boost:'fire',  cut:'water', up:1.5, start:'The sunlight turned harsh!' },
  sand: { label:'SANDSTORM', icon:'🌪', boost:'rock',  cut:null,    up:1.3, start:'A sandstorm kicked up!' }
};

// ---------- shinies + export/import save ----------
const getShinies = () => { try { return JSON.parse(localStorage.getItem('shinies')) || []; } catch (e) { return []; } };
const getCaught = () => { try { const l = JSON.parse(localStorage.getItem('caught')); return Array.isArray(l) ? l : []; } catch (e) { return []; } };
// ---------- starters: a brand-new player owns only these 3; everything else has to be caught ----------
// `caught` is the player's roster. It is seeded once (only while the key doesn't exist), so an imported save
// that contains its own `caught` list is respected as-is. Older saves with no `caught` list keep the Pokémon
// they already have progress on.
const STARTERS = ['Bulbasaur', 'Charmander', 'Squirtle'];
(function seedStarters() {
  try {
    if (localStorage.getItem('caught') !== null) return;
    let prog = {}; try { prog = JSON.parse(localStorage.getItem('pokeProgress')) || {}; } catch (e) {}
    const seed = [...new Set([...STARTERS, ...Object.keys(prog)])].filter(n => POKEDEX[n]);
    localStorage.setItem('caught', JSON.stringify(seed));
  } catch (e) {}
})();
function markCaught(n) { const l = getCaught(); if (!l.includes(n)) { l.push(n); localStorage.setItem('caught', JSON.stringify(l)); } }
function markShiny(n) { const l = getShinies(); if (!l.includes(n)) { l.push(n); localStorage.setItem('shinies', JSON.stringify(l)); } }

const SAVE_KEYS = ['battleProfile','battleStats','pokeProgress','campaign','shinies','caught','playerTeam','playerPokemon','difficulty','muted','teamSize','oppMode','campMode','seenTutorial','inventory','teamPresets','volume','battleSpeed','reduceMotion'];
const SAVE_JSON_KEYS = ['battleProfile','battleStats','pokeProgress','campaign','shinies','caught','playerTeam','inventory','teamPresets'];
function exportSave() {
  const data = {};
  SAVE_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v !== null) data[k] = v; });
  const blob = new Blob([JSON.stringify({ app:'pokemon-battle-arena', version:1, savedAt:new Date().toISOString(), data }, null, 2)], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'pokemon-battle-save.json'; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
// Validates everything first, so a bad file never half-overwrites a good save.
function importSave(text) {
  const obj = JSON.parse(text);
  if (!obj || obj.app !== 'pokemon-battle-arena' || !obj.data || typeof obj.data !== 'object') throw new Error('This is not a Battle Arena save file.');
  const entries = Object.entries(obj.data).filter(([k, v]) => SAVE_KEYS.includes(k) && typeof v === 'string');
  entries.forEach(([k, v]) => { if (SAVE_JSON_KEYS.includes(k)) JSON.parse(v); });
  const st = obj.data.battleStats && JSON.parse(obj.data.battleStats);
  if (st && (typeof st.wins !== 'number' || typeof st.losses !== 'number')) throw new Error('Save file stats look corrupted.');
  entries.forEach(([k, v]) => localStorage.setItem(k, v));
  return entries.length;
}

// Small pixel pokeball used whenever a remote sprite/avatar fails to load.
const FALLBACK_SPRITE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' shape-rendering='crispEdges'%3E%3Ccircle cx='32' cy='32' r='28' fill='%23f4f0d8' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M4 32a28 28 0 0 1 56 0z' fill='%23e3350d' stroke='%23000' stroke-width='4'/%3E%3Crect x='4' y='30' width='56' height='4' fill='%23000'/%3E%3Ccircle cx='32' cy='32' r='9' fill='%23f4f0d8' stroke='%23000' stroke-width='4'/%3E%3Ccircle cx='32' cy='32' r='3' fill='%23000'/%3E%3C/svg%3E";

function handleSpriteError(img) {
  if (img.dataset.fallbackApplied) return;
  const m = img.src.match(/black-white\/anim\/(?:back-)?(?:normal|shiny)\/([^/.]+)\.gif$/);
  if (m && !img.dataset.triedHome) {   // animated sprite missing: try the static HOME sprite before the Poké Ball
    img.dataset.triedHome = '1'; if (img.id === 'playerSprite') img.classList.add('flip');
    img.src = `https://img.pokemondb.net/sprites/home/normal/${m[1]}.png`; return;
  }
  img.dataset.fallbackApplied = '1';
  img.src = FALLBACK_SPRITE;
}

const TRAINER_CLASSES = [
  { id:'youngster', name:'Youngster', accent:'#3b4cca', hat:'cap',  perk:{ coin:1.2 }, perkText:'+20% coins from wins', line:"My Pokémon are in the top percentage!" },
  { id:'lass',      name:'Lass',      accent:'#ff6ec7', hat:'bow',  perk:{ t:['fairy','normal'], m:1.08 }, perkText:'+8% Fairy and Normal moves', line:"Let's have a cute little battle!" },
  { id:'ace',       name:'Ace Trainer', accent:'#e3350d', hat:'none', perk:{ all:1.03 }, perkText:'+3% damage on every move', line:"I only train the best." },
  { id:'hiker',     name:'Hiker',     accent:'#a8a878', hat:'band', perk:{ t:['rock','ground'], m:1.1 }, perkText:'+10% Rock and Ground moves', line:"The mountains made me tough!" },
  { id:'swimmer',   name:'Swimmer',   accent:'#3ba7e3', hat:'none', perk:{ t:['water','ice'], m:1.1 }, perkText:'+10% Water and Ice moves', line:"Dive in, the water's great!" },
  { id:'rocket',    name:'Rocket Grunt', accent:'#4a4a4a', hat:'r', perk:{ crit:1/8 }, perkText:'Crits land 1 in 8 (not 1 in 12)', line:"Prepare for trouble!" },
  { id:'bugcatcher',name:'Bug Catcher', accent:'#6aa84f', hat:'cap', perk:{ t:['bug','grass'], m:1.1 }, perkText:'+10% Bug and Grass moves', line:"I caught tons of bugs today!" },
  { id:'scientist', name:'Scientist', accent:'#d9d9d9', hat:'glass', perk:{ t:['electric','steel'], m:1.1 }, perkText:'+10% Electric and Steel moves', line:"Let's run an experiment." },
  { id:'psychic',   name:'Psychic',   accent:'#9b59b6', hat:'band', perk:{ t:['psychic','ghost'], m:1.1 }, perkText:'+10% Psychic and Ghost moves', line:"I foresaw this battle." },
  { id:'ranger',    name:'Ranger',    accent:'#2e8b57', hat:'cap', perk:{ t:['flying','fighting'], m:1.08 }, perkText:'+8% Flying and Fighting moves', line:"Nature is on my side." },
  { id:'gymleader', name:'Gym Leader', accent:'#ff9800', hat:'star', unlock:10, perk:{ all:1.05, coin:1.1 }, perkText:'+5% damage, +10% coins (unlock: 10 wins)', line:"Show me your best badge-worthy moves!" },
  { id:'champion',  name:'Champion',  accent:'#ffcb05', hat:'star', unlock:25, perk:{ all:1.07, crit:1/10 }, perkText:'+7% damage, crits 1 in 10 (unlock: 25 wins)', line:"Welcome to the top." }
];
const RANKS = [[0, 'Rookie'], [5, 'Trainer'], [15, 'Ace'], [30, 'Elite'], [60, 'Champion']];
const rankOf = w => RANKS.filter(r => w >= r[0]).pop()[1];
const myPerk = () => { const c = TRAINER_CLASSES.find(t => t.id === getProfile().trainerClassId); return (c && c.perk) || {}; };

const OPPONENT_TRAINERS = [
  { name:'Rival Gary', accent:'#e3350d', hat:'cap' },
  { name:'Bug Catcher Sam', accent:'#78c850', hat:'band' },
  { name:'Ace Trainer Mia', accent:'#3b4cca', hat:'none' },
  { name:'Gym Leader Koa', accent:'#f8d030', hat:'none' },
  { name:'Hiker Brock', accent:'#a8a878', hat:'band' },
  { name:'Psychic Naomi', accent:'#705898', hat:'bow' }
];

function trainerSilhouette(accent, hat) {
  const c = accent.replace('#', '%23');
  let extra = '';
  if (hat === 'cap') extra = "%3Crect x='14' y='4' width='36' height='10' rx='4' fill='%23222'/%3E";
  if (hat === 'band') extra = "%3Crect x='12' y='10' width='40' height='6' fill='%23222'/%3E";
  if (hat === 'bow') extra = "%3Cpolygon points='24,8 32,14 24,20' fill='%23222'/%3E%3Cpolygon points='40,8 32,14 40,20' fill='%23222'/%3E";
  if (hat === 'glass') extra = "%3Crect x='18' y='16' width='28' height='7' fill='%23222' opacity='.8'/%3E";
  if (hat === 'star') extra = "%3Ctext x='32' y='25' font-size='16' text-anchor='middle' fill='%23222'%3E%E2%98%85%3C/text%3E";
  if (hat === 'r') extra = "%3Ctext x='32' y='24' font-size='14' text-anchor='middle' fill='%23fff' font-family='monospace'%3ER%3C/text%3E";
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='20' r='14' fill='" + c + "'/%3E%3Crect x='12' y='36' width='40' height='26' rx='10' fill='" + c + "'/%3E" + extra + "%3C/svg%3E";
}

function getProfile() {
  try { return JSON.parse(localStorage.getItem('battleProfile')) || {}; }
  catch (e) { return {}; }
}
function saveProfile(p) { localStorage.setItem('battleProfile', JSON.stringify(p)); }

function getStats() {
  try {
    return JSON.parse(localStorage.getItem('battleStats')) || { wins: 0, losses: 0, byType: {} };
  } catch (e) { return { wins: 0, losses: 0, byType: {} }; }
}
function saveStats(s) { localStorage.setItem('battleStats', JSON.stringify(s)); }
function recordResult(won, opponentType, info) {
  const s = getStats();
  s.history = s.history || []; s.streak = s.streak || 0; s.best = s.best || 0;
  if (won) s.wins++; else s.losses++;
  if (!s.byType[opponentType]) s.byType[opponentType] = { wins: 0, losses: 0 };
  if (won) s.byType[opponentType].wins++; else s.byType[opponentType].losses++;
  s.streak = won ? s.streak + 1 : 0;
  s.best = Math.max(s.best, s.streak);
  s.byMon = s.byMon || {};
  ((info && info.used) || (info ? [info.me] : [])).forEach(n => {
    const r = s.byMon[n] || (s.byMon[n] = { wins: 0, losses: 0 });
    if (won) r.wins++; else r.losses++;
  });
  if (info) { const { used, ...entry } = info; s.history = [{ won, ...entry }, ...s.history].slice(0, 10); }
  saveStats(s);
}

// ---------- type badges, move accuracy/PP, sound ----------
const TYPE_COLORS = {
  normal:'#a8a878', fire:'#e3350d', water:'#3b6cff', grass:'#4fa64f', electric:'#d4a800', ghost:'#705898',
  fighting:'#c03028', psychic:'#f85888', rock:'#b8a038', poison:'#a040a0', ground:'#c9a13f',
  flying:'#8a70e0', bug:'#8a9a10', ice:'#5cbcbc', dragon:'#7038f8', dark:'#705848', steel:'#b8b8d0', fairy:'#ee99ac'
};
function typeBadge(type) {
  return `<span class="type-badge" style="background:${TYPE_COLORS[type] || '#666'}">${type}</span>`;
}
function moveAccuracy(m) { return (m.stat || m.heal) ? 100 : m.power >= 13 ? 85 : m.power >= 11 ? 95 : 100; }
function movePP(m) { return m.heal ? 10 : m.stat ? 20 : m.power >= 13 ? 5 : m.power >= 11 ? 10 : m.power >= 8 ? 15 : 25; }

// ---------- deeper battle mechanics: recover, flinch, recoil, multi-hit ----------
const RECOVER_MOVE = { name: 'Recover', power: 0, heal: 0.5 };
// Bulky Pokémon get a healing move in place of one of their filler moves.
const HEAL_SWAPS = { Snorlax:[1,'Recover'], Chansey:[1,'Recover'], Blastoise:[2,'Recover'], Lapras:[3,'Recover'], Slowbro:[2,'Recover'] };
Object.entries(HEAL_SWAPS).forEach(([n, [i]]) => { if (POKEDEX[n]) POKEDEX[n].moves[i] = { ...RECOVER_MOVE }; });

const MULTI_HIT = new Set(['Double Slap', 'Fury Attack', 'Fury Swipes', 'Pin Missile']);
const FLINCH_MOVES = new Set(['Bite', 'Rock Slide', 'Air Slash', 'Iron Head', 'Stomp']);
const RECOIL_MOVES = { 'Slam': 0.2, 'Body Slam': 0.15, 'Close Combat': 0.25 };

let muted = localStorage.getItem('muted') === '1';
let audioCtx;
function beep(freq, dur, type = 'square', vol = 0.05, slide = 0) {
  if (muted) return;
  { const v = localStorage.getItem('volume'); if (v !== null) vol *= +v; }
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime, o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(audioCtx.destination); o.start(t); o.stop(t + dur);
  } catch (e) {}
}
const SFX = {
  hit:   () => beep(220, .15, 'square', .06, -120),
  weak:  () => beep(150, .2, 'triangle', .06),
  miss:  () => beep(400, .15, 'sine', .04, -200),
  super: () => { beep(330, .1); setTimeout(() => beep(660, .18), 90); },
  crit:  () => { beep(600, .08); setTimeout(() => beep(300, .18, 'square', .07, -100), 80); },
  stat:  () => beep(420, .18, 'triangle', .06, 260),
  faint: () => beep(300, .7, 'sawtooth', .05, -250),
  win:   () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, .15), i * 140))
};

// ---------- XP / levels (saved per Pokémon) ----------
const XP_PER_LEVEL = 50, MAX_LEVEL = 100;
function getProgress() { try { return JSON.parse(localStorage.getItem('pokeProgress')) || {}; } catch (e) { return {}; } }
// Every Pokémon that fought in a won battle earns XP; returns "grew to Lv N" messages.
function grantXP(mons, foesBeaten) {
  const prog = getProgress(), lines = [], inv = getInventory(), egg = (inv.luckyegg || 0) > 0;
  if (egg) { inv.luckyegg--; saveInventory(inv); lines.push('Lucky Egg: +50% XP!'); }
  mons.filter(m => m.fought).forEach(m => {
    const p = prog[m.name] || { level: m.level, xp: 0 }, before = p.level;
    p.xp += Math.round((40 + 25 * foesBeaten) * (egg ? 1.5 : 1));
    while (p.xp >= XP_PER_LEVEL && p.level < MAX_LEVEL) { p.xp -= XP_PER_LEVEL; p.level++; }
    if (p.level > before) lines.push(`${m.name} grew to Lv ${p.level}!`);
    prog[m.name] = p;
    const ev = EVOLVE[m.name];
    if (ev && p.level >= ev.at) {   // evolution: progress and team slot move to the new form
      prog[ev.to] = p; delete prog[m.name]; markCaught(ev.to); if (getShinies().includes(m.name)) markShiny(ev.to); lines.push(`${m.name} evolved into ${ev.to}!`);
      try { localStorage.setItem('playerTeam', JSON.stringify(JSON.parse(localStorage.getItem('playerTeam') || '[]').map(x => (x === m.name ? ev.to : x))));
        if (localStorage.getItem('playerPokemon') === m.name) localStorage.setItem('playerPokemon', ev.to); } catch (e) {}
    }
  });
  localStorage.setItem('pokeProgress', JSON.stringify(prog));
  return lines;
}

// ---------- gym campaign ----------
const GYM_LEADERS = [
  { name:'Gym Leader Brock',   badge:'Boulder',  accent:'#b8a038', hat:'band', team:['Onix','Geodude','Golem'] },
  { name:'Gym Leader Misty',   badge:'Cascade',  accent:'#3ba7e3', hat:'none', team:['Lapras','Psyduck','Gyarados'] },
  { name:'Gym Leader Surge',   badge:'Thunder',  accent:'#d4a800', hat:'cap',  team:['Raichu','Electabuzz','Magnemite'] },
  { name:'Gym Leader Erika',   badge:'Rainbow',  accent:'#4fa64f', hat:'bow',  team:['Venusaur','Bulbasaur','Oddish'] },
  { name:'Gym Leader Sabrina', badge:'Marsh',    accent:'#f85888', hat:'bow',  team:['Alakazam','Abra','Gengar'] },
  { name:'Gym Leader Blaine',  badge:'Volcano',  accent:'#e3350d', hat:'band', team:['Arcanine','Magmar','Charizard'] },
  { name:'Gym Leader Giovanni',badge:'Earth',    accent:'#4a4a4a', hat:'r',    team:['Nidoking','Cubone','Sandshrew'] },
  { name:'Champion Lance',     badge:'Champion', accent:'#7038f8', hat:'cap',  team:['Dragonite','Dratini','Mewtwo'] }
];
const BAG_START = { potion: 3, superpotion: 1, fullheal: 2, pokeball: 3 };
function getCampaign() { try { return JSON.parse(localStorage.getItem('campaign')); } catch (e) { return null; } }
function saveCampaign(c) { if (c) localStorage.setItem('campaign', JSON.stringify(c)); else localStorage.removeItem('campaign'); }

// ---------- item bag (persistent across every battle/mode) + coins ----------
function getInventory() {
  let inv = null; try { inv = JSON.parse(localStorage.getItem('inventory')); } catch (e) {}
  inv = inv || { ...BAG_START };
  if (inv.pokeball === undefined) inv.pokeball = BAG_START.pokeball;   // saves from before Poké Balls existed start with 3
  return inv;
}
function saveInventory(inv) { localStorage.setItem('inventory', JSON.stringify(inv)); }
function getCoins() { const s = getStats(); return s.coins || 0; }
function addCoins(n) { const s = getStats(); if (n > 0 && myPerk().coin) n = Math.round(n * myPerk().coin); s.coins = (s.coins || 0) + n; saveStats(s); return s.coins; }
function spendCoins(n) { const s = getStats(); if ((s.coins || 0) < n) return false; s.coins -= n; saveStats(s); return true; }

// ---------- named team presets ----------
function getPresets() { try { return JSON.parse(localStorage.getItem('teamPresets')) || {}; } catch (e) { return {}; } }
function savePresets(p) { localStorage.setItem('teamPresets', JSON.stringify(p)); }

const OPPONENT_POOL = Object.keys(POKEDEX);

// ---------- TITLE SCREEN ----------
const startButton = document.getElementById('startButton');
if (startButton) {
  let after = 'profileScreen';
  const show = id => ['titleScreen', 'profileScreen', 'tutorialScreen'].forEach(x => { document.getElementById(x).hidden = x !== id; });
  startButton.addEventListener('click', () => {
    if (localStorage.getItem('seenTutorial')) return show('profileScreen');
    after = 'profileScreen'; show('tutorialScreen');   // first launch shows the tutorial once
  });
  document.getElementById('howToLink').addEventListener('click', e => { e.preventDefault(); after = 'titleScreen'; show('tutorialScreen'); });
  document.getElementById('tutorialDoneBtn').addEventListener('click', () => { localStorage.setItem('seenTutorial', '1'); show(after); });
}

// ---------- PROFILE / TRAINER SELECT SCREEN ----------
const trainerGrid = document.getElementById('trainerGrid');
if (trainerGrid) {
  const profile = getProfile();
  let selectedClass = profile.trainerClassId || null;
  const winsNow = getStats().wins || 0, nameInput = document.getElementById('trainerName');
  nameInput.value = profile.trainerName || '';
  const showPreview = tc => { if (!tc) return; document.getElementById('trainerPreview').innerHTML =
    `<img class="pixel-avatar" src="${trainerSilhouette(tc.accent, tc.hat)}" alt=""><div>${tc.name.toUpperCase()}<br><span style="color:var(--accent-yellow)">${tc.perkText}</span><br>RANK: ${rankOf(winsNow).toUpperCase()} (${winsNow} WINS)</div>`; };

  TRAINER_CLASSES.forEach(tc => {
    const btn = document.createElement('button');
    btn.className = 'trainer-option' + (tc.id === selectedClass ? ' selected' : '');
    const locked = (tc.unlock || 0) > winsNow;
    btn.innerHTML = `<img src="${trainerSilhouette(tc.accent, tc.hat)}" alt="${tc.name}"><span>${locked ? '🔒 ' + tc.unlock + ' WINS' : tc.name}</span>`;
    btn.disabled = locked; btn.style.opacity = locked ? .4 : 1;
    btn.addEventListener('click', () => {
      selectedClass = tc.id; showPreview(tc);
      document.querySelectorAll('.trainer-option').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('profileContinueBtn').disabled = false;
    });
    trainerGrid.appendChild(btn);
  });

  if (selectedClass) document.getElementById('profileContinueBtn').disabled = false;
  showPreview(TRAINER_CLASSES.find(t => t.id === selectedClass && (t.unlock || 0) <= winsNow));

  const githubAvatar = document.getElementById('githubAvatar');
  const githubStatus = document.getElementById('githubStatus');
  githubAvatar.src = profile.avatarUrl || FALLBACK_SPRITE;
  githubAvatar.addEventListener('error', () => handleSpriteError(githubAvatar));
  if (profile.githubUsername) document.getElementById('githubInput').value = profile.githubUsername;

  document.getElementById('githubConnectBtn').addEventListener('click', async () => {
    const username = document.getElementById('githubInput').value.trim();
    if (!username) return;
    githubStatus.textContent = 'Looking up...';
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
      if (!res.ok) throw new Error('not found');
      const data = await res.json();
      delete githubAvatar.dataset.fallbackApplied; delete githubAvatar.dataset.triedHome;
      githubAvatar.src = data.avatar_url;
      githubStatus.textContent = `Connected as ${data.login}`;
      const p = getProfile();
      p.githubUsername = data.login;
      p.avatarUrl = data.avatar_url;
      saveProfile(p);
    } catch (e) {
      githubStatus.textContent = 'User not found — public profile only, no password needed.';
    }
  });

  document.getElementById('profileContinueBtn').addEventListener('click', () => {
    const p = getProfile();
    p.trainerClassId = selectedClass;
    p.trainerName = nameInput.value.trim().slice(0, 12);
    saveProfile(p);
    document.getElementById('profileScreen').hidden = true;
    document.getElementById('pokemonSelection').hidden = false;
  });
}

// ---------- POKEMON SELECTION ----------
// Cards are generated from POKEDEX, so adding a Pokémon only takes one entry above.
const pokemonContainer = document.getElementById('pokemonContainer');
if (pokemonContainer) {
  const prog = getProgress();
  const lvOf = n => (prog[n] ? `<span style="font-size:7px;color:var(--accent-yellow)">Lv ${prog[n].level}</span>` : '');
  Object.entries(POKEDEX).forEach(([name, data]) => {
    const btn = document.createElement('button');
    btn.className = 'pokemon-card';
    btn.dataset.name = name;
    btn.dataset.type = data.type;
    btn.innerHTML = `<img src="${data.front}" alt="${name}" loading="lazy"><span>${name}</span>${lvOf(name)}`;
    pokemonContainer.appendChild(btn);
  });
}

const ownedSet = new Set(getCaught());   // your picks are limited to caught Pokémon; the foe / Player 2 pick screen still lists everyone
let teamSize = +localStorage.getItem('teamSize') || 3;
let oppMode = localStorage.getItem('oppMode') || 'random';
let campMode = localStorage.getItem('campMode') || 'single';
let phase = 'player';            // 'player' = pick your team, 'opp' = pick the opponent's team
const team = [], oppPick = [];
const teamBtn = document.getElementById('teamStartBtn');
// 2-player always needs a second pick screen; "choose foe" only applies to single battles
const needOpp = () => campMode === 'versus' || (oppMode === 'choose' && campMode === 'single');
function refreshTeamUI() {
  const picks = phase === 'player' ? team : oppPick;
  document.getElementById('pickCount').textContent = teamSize;
  document.getElementById('pickWho').textContent = campMode === 'versus' ? (phase === 'player' ? 'PLAYER 1 ' : 'PLAYER 2 ') : (phase === 'player' ? '' : 'OPPONENT ');
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('selected', +b.dataset.size === teamSize));
  document.querySelectorAll('.opp-btn').forEach(b => b.classList.toggle('selected', b.dataset.mode === oppMode));
  document.querySelectorAll('.pokemon-card').forEach(c => {
    c.classList.toggle('picked', picks.includes(c.dataset.name));
    c.classList.toggle('locked', phase === 'player' && !ownedSet.has(c.dataset.name));
    c.disabled = phase === 'opp' && team.includes(c.dataset.name);
  });
  document.querySelectorAll('.camp-btn').forEach(b => b.classList.toggle('selected', b.dataset.camp === campMode));
  document.getElementById('oppRow').hidden = campMode !== 'single';
  const last = phase === 'opp' || !needOpp();
  teamBtn.textContent = `${last ? 'START BATTLE' : 'NEXT: PICK OPPONENT'} (${picks.length}/${teamSize})`;
  teamBtn.disabled = picks.length !== teamSize;
  document.getElementById('setupBars').hidden = phase === 'opp';
  document.getElementById('teamBackBtn').hidden = phase !== 'opp';
  const presetBar = document.getElementById('presetBar');
  if (presetBar) {
    presetBar.hidden = phase !== 'player';
    document.getElementById('savePresetBtn').disabled = team.length !== teamSize;
  }
}
if (teamBtn) {
  teamBtn.addEventListener('click', () => {
    if (phase === 'player' && needOpp()) { phase = 'opp'; refreshTeamUI(); return; }
    localStorage.setItem('playerTeam', JSON.stringify(team));
    localStorage.setItem('playerPokemon', team[0]);
    localStorage.setItem('vsMode', campMode === 'versus' ? '1' : '0');
    saveCampaign(campMode === 'campaign' ? { stage: 0, badges: [] } : campMode === 'endless' ? { endless: true, stage: 0, badges: [] } : null);
    if (needOpp()) localStorage.setItem('oppTeam', JSON.stringify(oppPick));
    else localStorage.removeItem('oppTeam');
    window.location.href = 'main.html';
  });
  document.getElementById('teamBackBtn').addEventListener('click', () => { phase = 'player'; oppPick.length = 0; refreshTeamUI(); });
  document.querySelectorAll('.mode-btn').forEach(b => b.addEventListener('click', () => {
    teamSize = +b.dataset.size;
    localStorage.setItem('teamSize', teamSize);
    team.splice(teamSize);
    refreshTeamUI();
  }));
  document.querySelectorAll('.opp-btn').forEach(b => b.addEventListener('click', () => {
    oppMode = b.dataset.mode;
    localStorage.setItem('oppMode', oppMode);
    refreshTeamUI();
  }));
  document.querySelectorAll('.camp-btn').forEach(b => b.addEventListener('click', () => {
    campMode = b.dataset.camp;
    localStorage.setItem('campMode', campMode);
    refreshTeamUI();
  }));

  // ---------- named team presets: save the current pick, or load one back in ----------
  function renderPresets() {
    const list = document.getElementById('presetList');
    const presets = getPresets();
    list.innerHTML = '';
    const names = Object.keys(presets);
    if (!names.length) list.innerHTML = '<span style="font-size:8px;opacity:.6;">No saved teams yet.</span>';
    names.forEach(name => {
      const wrap = document.createElement('span');
      wrap.style.display = 'inline-flex'; wrap.style.gap = '4px';
      const b = document.createElement('button');
      b.className = 'retro-btn small';
      b.textContent = `${name} (${presets[name].names.length})`;
      b.addEventListener('click', () => {
        if (phase !== 'player') return;
        teamSize = presets[name].names.length;
        localStorage.setItem('teamSize', teamSize);
        team.length = 0;
        presets[name].names.forEach(n => { if (POKEDEX[n] && ownedSet.has(n)) team.push(n); });
        refreshTeamUI();
      });
      const del = document.createElement('button');
      del.className = 'retro-btn small'; del.textContent = '×'; del.title = 'Delete preset';
      del.addEventListener('click', e => { e.stopPropagation(); const p = getPresets(); delete p[name]; savePresets(p); renderPresets(); });
      wrap.appendChild(b); wrap.appendChild(del);
      list.appendChild(wrap);
    });
  }
  document.getElementById('savePresetBtn').addEventListener('click', () => {
    if (team.length !== teamSize) return;
    const name = (prompt('Name this team preset:') || '').trim().slice(0, 20);
    if (!name) return;
    const presets = getPresets();
    presets[name] = { names: [...team] };
    savePresets(presets);
    renderPresets();
  });
  renderPresets();

  refreshTeamUI();
}
document.querySelectorAll('.pokemon-card').forEach(card => {
  card.addEventListener('click', () => {
    const picks = phase === 'player' ? team : oppPick;
    const name = card.dataset.name, i = picks.indexOf(name);
    if (i >= 0) picks.splice(i, 1); else if (picks.length < teamSize) picks.push(name); else return;
    refreshTeamUI();
  });
  const img = card.querySelector('img');
  if (img) img.addEventListener('error', () => handleSpriteError(img));
});

// ---------- picker utilities: search, type filter, random / clear team, type chart ----------
if (teamBtn) {
  const $ = id => document.getElementById(id);
  const typeSel = $('pickType');
  [...new Set(Object.values(POKEDEX).map(p => p.type))].sort().forEach(t => typeSel.add(new Option(t.toUpperCase(), t)));
  const applyFilter = () => {
    const q = $('pickSearch').value.trim().toLowerCase(), t = typeSel.value;
    document.querySelectorAll('.pokemon-card').forEach(c => { c.hidden = !(c.dataset.name.toLowerCase().includes(q) && (!t || c.dataset.type === t)); });
    pokemonContainer.scrollTop = 0;
  };
  $('pickSearch').addEventListener('input', applyFilter);
  typeSel.addEventListener('change', applyFilter);
  $('randomTeamBtn').addEventListener('click', () => {
    const picks = phase === 'player' ? team : oppPick;
    const pool = Object.keys(POKEDEX).filter(n => !picks.includes(n) && (phase === 'opp' ? !team.includes(n) : ownedSet.has(n)));
    while (picks.length < teamSize && pool.length) picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    refreshTeamUI();
  });
  $('clearTeamBtn').addEventListener('click', () => { (phase === 'player' ? team : oppPick).length = 0; refreshTeamUI(); });
  $('typeChartBtn').addEventListener('click', () => {
    const d = $('typeChartDlg'), fmt = (row, v) => Object.keys(row).filter(k => row[k] === v).map(typeBadge).join('') || '-';
    d.querySelector('.chart-body').innerHTML = Object.entries(TYPE_CHART).map(([t, row]) =>
      `<p>${typeBadge(t)}<br>2x: ${fmt(row, 2)}<br>1/2x: ${fmt(row, 0.5)}<br>0x: ${fmt(row, 0)}</p>`).join('');
    d.showModal();
  });
  $('typeChartClose').addEventListener('click', () => $('typeChartDlg').close());
}

// ---------- BATTLE SCREEN ----------
const trainerIntroEl = document.getElementById('trainerIntro');
if (trainerIntroEl) {
  const profile = getProfile();
  const teamNames = JSON.parse(localStorage.getItem('playerTeam') || 'null') || [localStorage.getItem('playerPokemon') || 'Blastoise'];
  const camp = getCampaign(), gym = camp && !camp.endless && GYM_LEADERS[camp.stage];
  const trainer = VS ? { name: 'Player 2', accent: '#e3350d', hat: 'cap' } : gym || OPPONENT_TRAINERS[Math.floor(Math.random() * OPPONENT_TRAINERS.length)];

  function levelToMaxHp(level) { return Math.round(80 + level * 1.6); }
  function makeMon(name, level, mine) {
    const maxHp = Math.round(levelToMaxHp(level) * hpMult(name));
    // Your own Pokémon are shiny only if you recruited a shiny one (kept in `shinies`); foes and 2-player teams roll 1-in-64
    const d = POKEDEX[name], shiny = mine && !VS ? getShinies().includes(name) : Math.random() < 1 / 64;
    return { name, level, hp: maxHp, maxHp, ...d, shiny, speed: SPEED[name] || 60, stages: freshStages(),
      front: shiny ? d.front.replace('/anim/normal/', '/anim/shiny/') : d.front,
      back:  shiny ? d.back.replace('/anim/back-normal/', '/anim/back-shiny/') : d.back };
  }
  const prog = getProgress();
  const playerTeam = teamNames.map(n => makeMon(n, VS ? 50 : prog[n] ? prog[n].level : 40, true));
  const avgLv = Math.round(playerTeam.reduce((a, p) => a + p.level, 0) / playerTeam.length);
  // gym leaders scale with the stage; other opponents track your team's level (±3)
  const foeLevel = () => (VS ? 50 : camp && camp.endless ? Math.min(100, Math.max(5, avgLv - 2 + camp.stage * 2)) : gym ? 40 + camp.stage * 2 : Math.max(5, avgLv + Math.floor(Math.random() * 7) - 3));
  const chosen = JSON.parse(localStorage.getItem('oppTeam') || 'null');
  const oppNames = gym
    ? gym.team.slice(0, teamNames.length)
    : chosen && chosen.length === teamNames.length && chosen.every(n => POKEDEX[n])
      ? chosen
      : OPPONENT_POOL.filter(n => !teamNames.includes(n)).sort(() => Math.random() - 0.5).slice(0, teamNames.length);
  const oppTeam = oppNames.map(n => makeMon(n, foeLevel()));
  const player = playerTeam[0];
  const opponent = oppTeam[0];

  const trainerAvatarEl = document.getElementById('trainerAvatar');
  trainerAvatarEl.src = trainerSilhouette(trainer.accent, trainer.hat);
  trainerAvatarEl.addEventListener('error', () => handleSpriteError(trainerAvatarEl));
  const campTag = !camp ? '' : camp.endless ? ` [ENDLESS WAVE ${camp.stage + 1}]` : ` [GYM ${camp.stage + 1}/${GYM_LEADERS.length}]`;
  const shinyNote = [...playerTeam, ...oppTeam].filter(m => m.shiny).map(m => ` ★ Shiny ${m.name}!`).join('');
  const _me = getProfile(), _mc = TRAINER_CLASSES.find(t => t.id === _me.trainerClassId) || TRAINER_CLASSES[0];
  const flavor = VS ? '' : ` ${_mc.name} ${_me.trainerName || ''}: "${_mc.line}"`;
  document.getElementById('trainerText').textContent = VS
    ? `HOT-SEAT BATTLE! Player 1 picks a move, then hands the device to Player 2.${shinyNote}`
    : `${trainer.name} wants to battle! They sent out ${opponent.name}!${campTag}${shinyNote}${flavor}`;

  const playerBadge = document.getElementById('playerBadge');
  const playerClass = TRAINER_CLASSES.find(tc => tc.id === profile.trainerClassId) || TRAINER_CLASSES[0];
  playerBadge.src = profile.avatarUrl || trainerSilhouette(playerClass.accent, playerClass.hat);
  playerBadge.addEventListener('error', () => handleSpriteError(playerBadge));

  document.getElementById('battleStartBtn').addEventListener('click', () => {
    trainerIntroEl.hidden = true;
    document.getElementById('battleFrame').hidden = false;
    startBattle(playerTeam, oppTeam);
  });

  // dropdown menu
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');
  menuBtn.addEventListener('click', () => { menuDropdown.hidden = !menuDropdown.hidden; });
  const muteBtn = document.getElementById('muteBtn');
  const paintMute = () => { muteBtn.textContent = muted ? '🔇 Sound: Off' : '🔊 Sound: On'; };
  paintMute();
  muteBtn.addEventListener('click', () => { muted = !muted; localStorage.setItem('muted', muted ? '1' : '0'); paintMute(); });
  const diffSel = document.getElementById('difficulty');
  diffSel.value = localStorage.getItem('difficulty') || 'normal';
  diffSel.addEventListener('change', () => localStorage.setItem('difficulty', diffSel.value));
  diffSel.hidden = VS;
  document.getElementById('forfeitBtn').addEventListener('click', () => {
    saveCampaign(null);
    if (!VS) recordResult(false, opponent.type, { me: player.name, foe: opponent.name });
    window.location.href = 'index.html';
  });
}

function startBattle(playerTeam, oppTeam) {
  let player = playerTeam[0], opponent = oppTeam[0];
  const campState = getCampaign();
  const bag = getInventory();
  let nextGym = false;
  const weatherEl = document.getElementById('weather');
  let weather = null, weatherTurns = 0, foeSwitchCooldown = 0, vsChoice = null, vsStage = null;
  let foePotions = (localStorage.getItem('difficulty') || 'normal') === 'hard' && !VS ? 2 : 0;
  const els = {
    oppName: document.getElementById('oppName'), oppLevel: document.getElementById('oppLevel'),
    oppSprite: document.getElementById('oppSprite'), oppHPBar: document.getElementById('oppHPBar'), oppHPText: document.getElementById('oppHPText'),
    playerName: document.getElementById('playerName'), playerLevel: document.getElementById('playerLevel'),
    playerSprite: document.getElementById('playerSprite'), playerHPBar: document.getElementById('playerHPBar'), playerHPText: document.getElementById('playerHPText'),
    message: document.getElementById('message'), actions: document.getElementById('actions'), restartButton: document.getElementById('restartButton'), recruitPanel: document.getElementById('recruitPanel'),
    switchBtn: document.getElementById('switchBtn'), itemBtn: document.getElementById('itemBtn'), switchPanel: document.getElementById('switchPanel'),
    oppDots: document.getElementById('oppDots'), playerDots: document.getElementById('playerDots'), handoffBtn: document.getElementById('handoffBtn')
  };

  function showOpp() {
    els.oppName.innerHTML = opponent.name + typeBadge(opponent.type);
    els.oppLevel.textContent = opponent.level;
    els.oppSprite.classList.remove('anim-faint');
    delete els.oppSprite.dataset.fallbackApplied; delete els.oppSprite.dataset.triedHome;
    els.oppSprite.src = opponent.front;
    updateHP('opp'); renderTeamDots();
  }
  function showPlayer() {
    player.fought = true;
    els.playerName.innerHTML = player.name + typeBadge(player.type);
    els.playerLevel.textContent = player.level;
    els.playerSprite.classList.remove('anim-faint');
    delete els.playerSprite.dataset.fallbackApplied; delete els.playerSprite.dataset.triedHome;
    els.playerSprite.src = player.back;
    els.playerSprite.classList.toggle('flip', player.back === player.front);   // HOME sprites only face front: mirror them
    updateHP('player'); renderMoves(); renderTeamDots();
  }
  function renderTeamDots() {
    const dots = t => t.map(p => (p.hp > 0 ? '●' : '○')).join(' ');
    els.oppDots.textContent = dots(oppTeam); els.playerDots.textContent = dots(playerTeam);
  }
  function init() {
    els.oppSprite.addEventListener('error', () => handleSpriteError(els.oppSprite));
    els.playerSprite.addEventListener('error', () => handleSpriteError(els.playerSprite));
    (VS ? [...playerTeam, ...oppTeam] : playerTeam).forEach(p => (p.pp = p.moves.map(movePP)));
    els.oppDots.hidden = els.playerDots.hidden = els.switchBtn.hidden = playerTeam.length < 2;
    showOpp(); showPlayer();
    if (VS) els.switchBtn.hidden = els.itemBtn.hidden = true;   // hot-seat: moves + forced switches only
    const w0 = Math.random() < 0.5 ? rollWeather() : '';
    setMessage((w0 ? w0 + ' ' : '') + (VS ? 'Player 1: choose a move.' : 'What will you do?'));
  }

  function updateHP(who) {
    const mob = who === 'opp' ? opponent : player;
    const bar = who === 'opp' ? els.oppHPBar : els.playerHPBar;
    const text = who === 'opp' ? els.oppHPText : els.playerHPText;
    const pct = Math.max(0, (mob.hp / mob.maxHp) * 100);
    bar.style.width = pct + '%';
    bar.style.background = pct > 50 ? 'var(--hp-green)' : pct > 20 ? 'var(--hp-yellow)' : 'var(--hp-red)';
    text.textContent = `${Math.max(0, mob.hp)}/${mob.maxHp}`;
    (who === 'opp' ? els.oppName : els.playerName).innerHTML = (mob.shiny ? '★ ' : '') + mob.name + typeBadge(mob.type) + statusTag(mob) + stageTag(mob);
    renderTeamDots();
  }

  function renderMoves(mon = player) {
    els.actions.innerHTML = '';
    mon.moves.forEach((move, i) => {
      const btn = document.createElement('button');
      btn.className = 'retro-btn'; btn.dataset.idx = i;
      btn.style.setProperty('--tc', TYPE_COLORS[moveType(move)] || '');
      btn.textContent = `${i + 1}. ${move.name} ${mon.pp[i]}/${movePP(move)}`;
      btn.addEventListener('click', () => (vsStage === 'p2' ? foeChoose(move, i) : playerTurn(move, i)));
      els.actions.appendChild(btn);
    });
  }

  function setMessage(t) { els.message.textContent = t; }
  function disableActions(d) {
    els.actions.querySelectorAll('button').forEach(b => (b.disabled = d || (vsStage === 'p2' ? opponent : player).pp[b.dataset.idx] <= 0));
    els.switchBtn.disabled = d || playerTeam.filter(p => p.hp > 0).length < 2;
    els.itemBtn.disabled = d;
  }
  function animate(el, cls) {
    el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
    if (cls !== 'anim-faint') el.addEventListener('animationend', () => el.classList.remove(cls), { once: true });
  }

  // ---------- weather ----------
  function paintWeather() { weatherEl.textContent = weather ? `${WEATHER[weather].icon} ${WEATHER[weather].label} (${weatherTurns})` : ''; }
  function rollWeather() { weather = Object.keys(WEATHER)[Math.floor(Math.random() * 3)]; weatherTurns = 5; paintWeather(); return WEATHER[weather].start; }
  const weatherMult = t => { const w = weather && WEATHER[weather]; return !w ? 1 : t === w.boost ? w.up : t === w.cut ? 0.5 : 1; };

  // Single hit's damage, no accuracy check (used directly for each hit of a multi-hit move).
  function calcHitDamage(move, attacker, defender) {
    const mt = moveType(move);
    const eff = typeEffectiveness(mt, defender.type, defender.type2);
    const pk = !VS && playerTeam.includes(attacker) ? myPerk() : {};
    const crit = Math.random() < (pk.crit || 1 / 12);
    const perkMult = (pk.all || 1) * (pk.t && pk.t.includes(mt) ? pk.m : 1);
    const levelFactor = 0.6 + attacker.level / 100;
    const stab = mt === attacker.type || mt === attacker.type2 ? 1.5 : 1;
    const stages = stageMult(attacker.stages.atk) / stageMult(defender.stages.def);
    const dmg = eff === 0 ? 0 : Math.max(1, Math.round(move.power * levelFactor * eff * stab * perkMult * statRatio(attacker, defender) * stages * weatherMult(mt) * (crit ? 1.5 : 1) * (attacker.status === 'brn' ? 0.5 : 1)));
    return { dmg, eff, crit };
  }
  // Misses (by move accuracy), then a single hit's damage. Returns { dmg, eff, crit, miss }.
  function computeDamage(move, attacker, defender) {
    if (Math.random() * 100 >= moveAccuracy(move)) return { dmg: 0, eff: 1, miss: true };
    return calcHitDamage(move, attacker, defender);
  }

  function statMove(att, def, move) {
    const [k, n, self] = move.stat, t = self ? att : def, label = { atk: 'Attack', def: 'Defense', spd: 'Speed' }[k];
    const before = t.stages[k];
    t.stages[k] = Math.max(-6, Math.min(6, before + n));
    let msg = `${att.name} used ${move.name}! `;
    msg += t.stages[k] === before ? `${t.name}'s ${label} won't go any ${n > 0 ? 'higher' : 'lower'}!` : `${t.name}'s ${label} ${Math.abs(n) > 1 ? 'sharply ' : ''}${n > 0 ? 'rose' : 'fell'}!`;
    if (att.hp > 0) msg += residual(att);
    setTimeout(() => { SFX.stat(); updateHP('opp'); updateHP('player'); }, 250);
    setMessage(msg);
  }

  function healMove(att, move) {
    const before = att.hp;
    att.hp = Math.min(att.maxHp, att.hp + Math.round(att.maxHp * move.heal));
    let msg = `${att.name} used ${move.name}! `;
    msg += att.hp === before ? `${att.name}'s HP is already full!` : `${att.name} recovered HP!`;
    if (att.hp > 0) msg += residual(att);
    setTimeout(() => { SFX.stat(); updateHP('opp'); updateHP('player'); }, 250);
    setMessage(msg);
  }

  function describe(att, move, def, r) {
    let msg = `${att.name} used ${move.name}!`;
    if (r.miss) return msg + ' But it missed!';
    if (r.crit) msg += ' A critical hit!';
    if (r.eff === 0) msg += ` It had no effect on ${def.name}...`;
    else if (r.eff > 1) msg += " It's super effective!";
    else if (r.eff < 1) msg += " It's not very effective...";
    return msg;
  }

  // ---------- status effects ----------
  // Damaging hits from these types have a 20% chance to inflict a status.
  const INFLICTS = { fire: 'brn', ghost: 'brn', electric: 'par', poison: 'psn', grass: 'slp', psychic: 'confuse' };
  const IMMUNE = { brn: 'fire', par: 'electric', psn: 'poison' };
  const STATUS_INFO = { brn: ['BRN', '#e3350d'], par: ['PAR', '#d4a800'], psn: ['PSN', '#a040a0'], slp: ['SLP', '#777'], confuse: ['CNF', '#8b5cf6'] };
  function statusTag(mon) {
    const i = STATUS_INFO[mon.status];
    return i ? `<span class="type-badge" style="background:${i[1]}">${i[0]}</span>` : '';
  }
  // Returns a message if the Pokémon can't act this turn (asleep / fully paralyzed).
  function cantMove(mon) {
    if (mon.flinch) { mon.flinch = false; return `${mon.name} flinched and couldn't move!`; }
    if (mon.status === 'slp') {
      if (mon.sleepTurns-- > 0) return `${mon.name} is fast asleep.`;
      mon.status = null;
      return `${mon.name} woke up!`;
    }
    if (mon.status === 'confuse') {
      if (--mon.confuseTurns <= 0) { mon.status = null; }
      else if (Math.random() < 1 / 3) {
        const dmg = Math.max(1, Math.round(mon.maxHp / 12));
        mon.hp = Math.max(0, mon.hp - dmg);
        return `${mon.name} is confused! It hurt itself in its confusion!`;
      }
    }
    if (mon.status === 'par' && Math.random() < 0.25) return `${mon.name} is paralyzed! It can't move!`;
    return '';
  }
  function tryInflict(att, def, move) {
    const st = INFLICTS[moveType(move)];
    if (!st || def.status || IMMUNE[st] === def.type || Math.random() > 0.2) return '';
    def.status = st;
    if (st === 'slp') def.sleepTurns = 1 + Math.floor(Math.random() * 2);
    if (st === 'confuse') def.confuseTurns = 2 + Math.floor(Math.random() * 3);
    return { brn: ` ${def.name} was burned!`, par: ` ${def.name} is paralyzed!`, psn: ` ${def.name} was poisoned!`, slp: ` ${def.name} fell asleep!`, confuse: ` ${def.name} became confused!` }[st];
  }
  function residual(mon) {
    if (mon.status !== 'brn' && mon.status !== 'psn') return '';
    mon.hp = Math.max(0, mon.hp - Math.max(1, Math.floor(mon.maxHp / (mon.status === 'brn' ? 16 : 8))));
    return ` ${mon.name} is hurt by its ${mon.status === 'brn' ? 'burn' : 'poison'}!`;
  }

  // One attack: status check, lunge animation, sound, damage (possibly multiple hits), hit flash, message.
  // canFlinch is only true when this attacker is moving first this round (the defender hasn't acted yet).
  function attack(att, def, move, attSprite, defSprite, atkClass, canFlinch) {
    const blocked = cantMove(att);
    if (blocked) { setMessage(blocked); setTimeout(() => { updateHP('opp'); updateHP('player'); }, 250); return; }
    if (move.stat) return statMove(att, def, move);
    if (move.heal) return healMove(att, move);

    animate(attSprite, atkClass);
    if (Math.random() * 100 >= moveAccuracy(move)) {
      setTimeout(() => { SFX.miss(); updateHP('opp'); updateHP('player'); }, 250);
      return setMessage(`${att.name} used ${move.name}! But it missed!`);
    }

    const hitTable = [2, 2, 3, 3, 4, 5];
    const hits = MULTI_HIT.has(move.name) ? hitTable[Math.floor(Math.random() * hitTable.length)] : 1;
    let totalDmg = 0, lastEff = 1, anyCrit = false, landed = 0;
    for (let h = 0; h < hits; h++) {
      if (h > 0 && def.hp - totalDmg <= 0) break;
      const r = calcHitDamage(move, att, def);
      totalDmg += r.dmg; lastEff = r.eff; anyCrit = anyCrit || r.crit; landed++;
      if (r.eff === 0) break;
    }
    def.hp = Math.max(0, def.hp - totalDmg);

    let msg = `${att.name} used ${move.name}!`;
    if (landed > 1) msg += ` Hit ${landed} times!`;
    if (anyCrit) msg += ' A critical hit!';
    if (lastEff === 0) msg += ` It had no effect on ${def.name}...`;
    else if (lastEff > 1) msg += " It's super effective!";
    else if (lastEff < 1) msg += " It's not very effective...";

    if (totalDmg > 0) msg += tryInflict(att, def, move);

    const recoilFrac = RECOIL_MOVES[move.name];
    if (recoilFrac && totalDmg > 0) {
      const recoilDmg = Math.max(1, Math.round(totalDmg * recoilFrac));
      att.hp = Math.max(0, att.hp - recoilDmg);
      msg += ` ${att.name} is hit with recoil!`;
    }
    if (canFlinch && totalDmg > 0 && FLINCH_MOVES.has(move.name) && Math.random() < 0.3) def.flinch = true;

    if (def.hp > 0) msg += residual(att);
    setTimeout(() => {
      if (lastEff === 0) SFX.weak();
      else {
        animate(defSprite, 'anim-hit');
        if (lastEff > 1) SFX.super(); else if (lastEff < 1) SFX.weak(); else if (anyCrit) SFX.crit(); else SFX.hit();
      }
      updateHP('opp'); updateHP('player');
    }, 250);
    setMessage(msg);
  }

  // ---------- opponent AI ----------
  const diff = () => localStorage.getItem('difficulty') || 'normal';
  const expDmg = (m, a, d) => (m.power ? m.power * typeEffectiveness(moveType(m), d.type, d.type2) * (moveType(m) === a.type || moveType(m) === a.type2 ? 1.5 : 1) : 0);
  const bestScore = (a, d) => Math.max(...a.moves.map(m => expDmg(m, a, d)));

  // easy = random, normal = 50% best move, hard = best move (+ buffs/debuffs when it is safe)
  function pickMove() {
    const best = opponent.moves.filter(m => m.power).reduce((a, b) => (expDmg(b, opponent, player) > expDmg(a, opponent, player) ? b : a));
    const rnd = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    const d = diff();
    if (d === 'hard') {
      const setup = opponent.moves.find(m => m.stat && (m.stat[2] ? opponent.stages[m.stat[0]] < 2 : player.stages[m.stat[0]] > -2));
      return setup && opponent.hp > opponent.maxHp * 0.5 && Math.random() < 0.3 ? setup : best;
    }
    return d === 'normal' && Math.random() < 0.5 ? best : rnd;
  }
  // Hard: heal at low HP (2 potions) and switch out of bad type matchups (3-turn cooldown).
  function aiPlan() {
    if (VS || diff() !== 'hard') return { kind: 'move', move: pickMove() };
    if (foeSwitchCooldown > 0) foeSwitchCooldown--;
    if (foePotions > 0 && opponent.hp < opponent.maxHp * 0.3 && Math.random() < 0.7) return { kind: 'potion' };
    const bench = oppTeam.filter(p => p !== opponent && p.hp > 0);
    const now = bestScore(opponent, player) - bestScore(player, opponent);
    if (bench.length && !foeSwitchCooldown && now < -6) {
      const pick = bench.map(p => ({ p, s: bestScore(p, player) - bestScore(player, p) })).sort((a, b) => b.s - a.s)[0];
      if (pick.s > now + 6 && Math.random() < 0.6) { foeSwitchCooldown = 3; return { kind: 'switch', i: oppTeam.indexOf(pick.p) }; }
    }
    return { kind: 'move', move: pickMove() };
  }

  // ---------- turn order ----------
  function playerTurn(move, i) {
    player.pp[i]--;
    renderMoves(); disableActions(true);
    if (VS) {   // hot-seat: hide P1's moves and wait for P2
      vsChoice = { move };
      els.actions.hidden = true; els.handoffBtn.hidden = false;
      setMessage('Player 1 is locked in! Hand the device to Player 2, then press READY.');
      return;
    }
    runRound(move, aiPlan());
  }
  function foeChoose(move, i) {
    opponent.pp[i]--; vsStage = null;
    renderMoves(); disableActions(true);
    runRound(vsChoice.move, { kind: 'move', move });
  }
  // Switches and potions go first; otherwise higher priority, then higher Speed, acts first.
  function runRound(pm, plan) {
    const foeFirst = plan.kind !== 'move' || moveFirst(opponent, plan.move, player, pm);
    if (foeFirst) foeAct(plan, () => playerAct(pm));
    else playerAct(pm, () => foeAct(plan));
  }
  function playerAct(move, then) {
    attack(player, opponent, move, els.playerSprite, els.oppSprite, 'anim-atk-p', !!then);
    if (opponent.hp <= 0) return foeFainted();
    if (player.hp <= 0) return playerFainted(VS ? null : then);
    if (then) setTimeout(then, T(1300)); else roundEnd();
  }
  function foeAct(plan, then) {
    if (plan.kind === 'switch') {
      opponent.stages = freshStages(); opponent = oppTeam[plan.i]; showOpp();
      setMessage(`The rival withdrew and sent out ${opponent.name}!`);
      return setTimeout(then || roundEnd, T(1300));
    }
    if (plan.kind === 'potion') {
      foePotions--; opponent.hp = Math.min(opponent.maxHp, opponent.hp + 50); updateHP('opp');
      setMessage(`The rival used a Potion on ${opponent.name}!`);
      return setTimeout(then || roundEnd, T(1300));
    }
    attack(opponent, player, plan.move, els.oppSprite, els.playerSprite, 'anim-atk-o', !!then);
    if (player.hp <= 0) return playerFainted();
    if (opponent.hp <= 0) return foeFainted();
    if (then) setTimeout(then, T(1300)); else roundEnd();
  }
  const opponentTurn = () => foeAct(aiPlan());

  // End of a full round: weather ticks, sandstorm chip damage, then the next turn begins.
  function roundEnd() {
    let msg = '';
    if (weather) {
      if (weather === 'sand') [player, opponent].forEach(m => { if (m.type !== 'rock' && m.type !== 'ground') m.hp = Math.max(0, m.hp - Math.max(1, Math.floor(m.maxHp / 16))); });
      msg = weather === 'sand' ? ' The sandstorm rages.' : '';
      if (--weatherTurns <= 0) { msg += ` The ${WEATHER[weather].label.toLowerCase()} subsided.`; weather = null; }
      paintWeather();
    } else if (Math.random() < 0.06) msg = ' ' + rollWeather();
    updateHP('opp'); updateHP('player');
    if (msg) els.message.textContent += msg;
    if (player.hp <= 0) return playerFainted();
    if (opponent.hp <= 0) return foeFainted();
    if (VS) { vsStage = null; vsChoice = null; renderMoves(); els.message.textContent += ' Player 1: choose a move.'; }
    disableActions(false);
  }
  els.handoffBtn.addEventListener('click', () => {
    els.handoffBtn.hidden = true; vsStage = 'p2';
    renderMoves(opponent); els.actions.hidden = false; disableActions(false);
    setMessage('Player 2: choose a move.');
  });

  function endGame(won, text) {
    if (won && !VS) text += ' ' + grantXP(playerTeam, oppTeam.length).join(' ');
    if (won && !VS && !campState) { const coinsWon = 10 + oppTeam.length * 5; addCoins(coinsWon); text += ` +${coinsWon} coins!`; }
    if (!VS) text += campaignResult(won);
    setMessage(text);
    disableActions(true);
    if (!VS) recordResult(won, opponent.type, { me: playerTeam[0].name, foe: oppTeam[0].name, used: playerTeam.filter(p => p.fought).map(p => p.name) });
    setTimeout(() => {
      animate(won ? els.oppSprite : els.playerSprite, 'anim-faint');
      if (won) SFX.win(); else SFX.faint();
    }, T(700));
    els.restartButton.hidden = false;
    if (won && !VS) showRecruit();
  }

  // ---------- recruit: after a win, spend Poké Balls to try to recruit the Pokémon you beat ----------
  const recruitChance = m => (POKEDEX[m.name].legend ? 0.15 : 0.5);
  function showRecruit() {
    const panel = els.recruitPanel; if (!panel) return;
    const owned = new Set(getCaught());
    panel.innerHTML = ''; panel.hidden = false;
    els.actions.hidden = true; els.switchBtn.hidden = true; els.itemBtn.hidden = true;   // the spent move buttons only push the panel off screen
    const head = document.createElement('p'), status = document.createElement('p');
    status.className = 'recruit-status';
    const refresh = () => { head.textContent = `RECRUIT? POKÉ BALLS: ${bag.pokeball || 0}`; };
    refresh(); panel.appendChild(head);
    const rows = [];
    const sync = () => rows.forEach(b => { if (!b.dataset.done) b.disabled = (bag.pokeball || 0) <= 0; });
    oppTeam.forEach(m => {
      const b = document.createElement('button');
      b.className = 'retro-btn'; b.style.setProperty('--tc', TYPE_COLORS[m.type] || '');
      if (owned.has(m.name)) { b.textContent = `${m.name}: ALREADY CAUGHT`; b.disabled = true; b.dataset.done = '1'; }
      else b.textContent = `Throw at ${m.name} (${Math.round(recruitChance(m) * 100)}%)`;
      b.addEventListener('click', () => {
        if ((bag.pokeball || 0) <= 0 || b.dataset.done) return;
        bag.pokeball--; saveInventory(bag); refresh();
        b.dataset.done = '1'; b.disabled = true;
        if (Math.random() < recruitChance(m)) {
          markCaught(m.name);
          if (m.shiny) markShiny(m.name);   // a shiny recruit stays shiny
          const prog = getProgress();   // a recruit joins your roster at the level you beat it at
          if (!prog[m.name] || prog[m.name].level < m.level) { prog[m.name] = { level: m.level, xp: 0 }; localStorage.setItem('pokeProgress', JSON.stringify(prog)); }
          b.textContent = `${m.name}: RECRUITED`;
          status.textContent = `Gotcha! ${m.shiny ? '★ Shiny ' : ''}${m.name} was recruited at Lv ${prog[m.name].level}!`;
          try { SFX.win(); } catch (e) {}
        } else {
          b.textContent = `${m.name}: BROKE FREE`;
          status.textContent = `Oh no! ${m.name} broke free!`;
          try { SFX.faint(); } catch (e) {}
        }
        if ((bag.pokeball || 0) <= 0 && rows.some(x => !x.dataset.done)) status.textContent += ' Out of Poké Balls - buy more in the Stats shop.';
        sync();
      });
      rows.push(b); panel.appendChild(b);
    });
    sync(); panel.appendChild(status);
    if ((bag.pokeball || 0) <= 0 && rows.some(x => !x.dataset.done)) status.textContent = 'Out of Poké Balls - buy more in the Stats shop.';
  }

  // ---------- team logic: fainting and switching ----------
  function foeFainted() {
    if (oppTeam.every(p => p.hp <= 0)) return endGame(true, `${opponent.name} fainted. ${VS ? 'Player 1 wins!' : 'You win!'}`);
    setTimeout(() => { animate(els.oppSprite, 'anim-faint'); SFX.faint(); setMessage(`${opponent.name} fainted!`); }, T(700));
    setTimeout(() => {
      if (VS) { setMessage(`${opponent.name} fainted! Player 2, pick your next Pokémon.`); return openSwitch(true, true); }
      opponent = oppTeam.find(p => p.hp > 0);
      showOpp(); setMessage(`The rival sent out ${opponent.name}!`); disableActions(false);
    }, 2000);
  }
  let afterForced = null;   // what happens after a forced switch (e.g. the foe's turn)
  function playerFainted(next) {
    afterForced = next || null;
    if (playerTeam.every(p => p.hp <= 0)) return endGame(false, `${player.name} fainted. ${VS ? 'Player 2 wins!' : 'You lose!'}`);
    setTimeout(() => { animate(els.playerSprite, 'anim-faint'); SFX.faint(); setMessage(`${player.name} fainted! Pick your next Pokémon.`); }, T(700));
    setTimeout(() => openSwitch(true), T(1700));
  }
  function openSwitch(forced, foe) {
    els.switchPanel.innerHTML = '';
    (foe ? oppTeam : playerTeam).forEach((p, i) => {
      const b = document.createElement('button');
      b.className = 'retro-btn';
      b.style.setProperty('--tc', TYPE_COLORS[p.type] || '');
      b.textContent = `${p.name} ${p.hp}/${p.maxHp}`;
      b.disabled = p.hp <= 0 || p === (foe ? opponent : player);
      b.addEventListener('click', () => (foe ? foeSwitchTo(i) : switchTo(i, forced)));
      els.switchPanel.appendChild(b);
    });
    if (!forced) {
      const back = document.createElement('button');
      back.className = 'retro-btn'; back.textContent = 'BACK';
      back.addEventListener('click', closeSwitch);
      els.switchPanel.appendChild(back);
    }
    els.switchPanel.hidden = false; els.actions.hidden = true; els.switchBtn.hidden = true; els.itemBtn.hidden = true;
  }
  function closeSwitch() { els.switchPanel.hidden = true; els.actions.hidden = false; els.switchBtn.hidden = VS || playerTeam.length < 2; els.itemBtn.hidden = VS; }
  function switchTo(i, forced) {
    player.stages = freshStages(); player = playerTeam[i];
    closeSwitch(); showPlayer();
    setMessage(`Go, ${player.name}!`);
    if (forced) {
      disableActions(true);
      if (afterForced) { const f = afterForced; afterForced = null; return setTimeout(f, T(1000)); }
      if (VS) { vsChoice = null; vsStage = null; setMessage(`Go, ${player.name}! Player 1: choose a move.`); }
      return disableActions(false);
    }
    disableActions(true);
    setTimeout(opponentTurn, T(1000));
  }
  function foeSwitchTo(i) {   // hot-seat: Player 2's forced switch
    opponent.stages = freshStages(); opponent = oppTeam[i];
    closeSwitch(); showOpp(); vsStage = null; vsChoice = null; renderMoves();
    setMessage(`Player 2 sent out ${opponent.name}! Player 1: choose a move.`); disableActions(false);
  }
  els.switchBtn.addEventListener('click', () => openSwitch(false));

  // ---------- items (using one costs your turn) ----------
  const ITEMS = {
    potion:      { label: 'Potion +50 HP',        need: m => m.hp < m.maxHp, use: m => { m.hp = Math.min(m.maxHp, m.hp + 50);  return `${m.name} recovered HP!`; } },
    superpotion: { label: 'Super Potion +100 HP', need: m => m.hp < m.maxHp, use: m => { m.hp = Math.min(m.maxHp, m.hp + 100); return `${m.name} recovered a lot of HP!`; } },
    fullheal:    { label: 'Full Heal',            need: m => !!m.status,     use: m => { m.status = null; return `${m.name} was cured of its status!`; } },
    revive:      { label: 'Revive', need: () => playerTeam.some(m => m.hp <= 0), use: () => { const f = playerTeam.find(m => m.hp <= 0); f.hp = Math.floor(f.maxHp / 2); return `${f.name} was revived!`; } },
    xattack:     { label: 'X Attack', need: m => m.stages.atk < 6, use: m => { m.stages.atk = Math.min(6, m.stages.atk + 1); return `${m.name}'s Attack rose!`; } }
  };
  function openItems() {
    els.switchPanel.innerHTML = '';
    Object.keys(ITEMS).forEach(k => {
      const b = document.createElement('button');
      b.className = 'retro-btn'; b.textContent = `${ITEMS[k].label} x${bag[k] || 0}`;
      b.disabled = !(bag[k] > 0) || !ITEMS[k].need(player);
      b.addEventListener('click', () => useItem(k));
      els.switchPanel.appendChild(b);
    });
    const back = document.createElement('button');
    back.className = 'retro-btn'; back.textContent = 'BACK';
    back.addEventListener('click', closeSwitch);
    els.switchPanel.appendChild(back);
    els.switchPanel.hidden = false; els.actions.hidden = true; els.switchBtn.hidden = true; els.itemBtn.hidden = true;
  }
  function useItem(k) {
    bag[k]--;
    saveInventory(bag);
    const msg = ITEMS[k].use(player);
    closeSwitch(); updateHP('opp'); updateHP('player');
    setMessage(msg); disableActions(true);
    setTimeout(opponentTurn, T(1000));
  }
  els.itemBtn.addEventListener('click', openItems);

  // ---------- XP + gym campaign progress ----------
  function campaignResult(won) {
    const camp = getCampaign();
    if (!camp) return '';
    if (camp.endless) {   // endless: fight stronger waves until you lose; best wave is saved in stats
      const s = getStats(), cleared = won ? camp.stage + 1 : camp.stage;
      s.bestWave = Math.max(s.bestWave || 0, cleared); saveStats(s);
      if (!won) { saveCampaign(null); return ` Endless run over: ${cleared} wave${cleared === 1 ? '' : 's'} cleared (best ${s.bestWave}).`; }
      camp.stage++;
      bag.potion = (bag.potion || 0) + 1;
      if (camp.stage % 5 === 0) bag.superpotion = (bag.superpotion || 0) + 1;
      saveInventory(bag);
      const coinsWon = 15 + camp.stage * 3;
      addCoins(coinsWon);
      saveCampaign(camp); nextGym = true; els.restartButton.textContent = 'NEXT WAVE';
      return ` Wave ${camp.stage} cleared! +1 Potion${camp.stage % 5 === 0 ? ' and a Super Potion' : ''}. +${coinsWon} coins!`;
    }
    if (!won) { saveCampaign(null); return ' Your gym run is over.'; }
    const badge = GYM_LEADERS[camp.stage].badge;
    camp.badges.push(badge);
    camp.stage++;
    bag.potion = (bag.potion || 0) + 1;
    saveInventory(bag);
    const coinsWon = 40;
    addCoins(coinsWon);
    if (camp.stage >= GYM_LEADERS.length) { saveCampaign(null); return ` You are the CHAMPION! Every badge is yours! +${coinsWon} coins!`; }
    saveCampaign(camp);
    nextGym = true; els.restartButton.textContent = 'NEXT GYM';
    return ` You won the ${badge} Badge, a Potion and ${coinsWon} coins!`;
  }

  // keyboard: 1-4 pick a move
  document.addEventListener('keydown', e => {
    if (e.key < '1' || e.key > '4' || els.actions.hidden) return;
    const b = els.actions.children[+e.key - 1];
    if (b && !b.disabled) b.click();
  });

  // ---------- Endless draft: pick 1 of 3 random Pokémon to swap into your team ----------
  function showDraft() {
    els.restartButton.hidden = true; if (els.recruitPanel) els.recruitPanel.hidden = true;
    const pool = OPPONENT_POOL.filter(n => !playerTeam.some(p => p.name === n));
    const picks = pool.sort(() => Math.random() - 0.5).slice(0, 3);
    els.switchPanel.hidden = true; els.actions.hidden = false; els.actions.innerHTML = '';
    setMessage('Draft time! Pick a Pokémon to add to your team, or skip.');
    picks.forEach(name => {
      const d = POKEDEX[name];
      const btn = document.createElement('button');
      btn.className = 'retro-btn';
      btn.style.setProperty('--tc', TYPE_COLORS[d.type] || '');
      btn.innerHTML = `${name} ${typeBadge(d.type)}`;
      btn.addEventListener('click', () => chooseDraftSlot(name));
      els.actions.appendChild(btn);
    });
    const skip = document.createElement('button');
    skip.className = 'retro-btn'; skip.textContent = 'SKIP DRAFT';
    skip.addEventListener('click', () => window.location.reload());
    els.actions.appendChild(skip);
  }
  function chooseDraftSlot(name) {
    els.actions.hidden = true; els.switchPanel.innerHTML = ''; els.switchPanel.hidden = false;
    setMessage(`Choose a Pokémon to swap out for ${name}.`);
    playerTeam.forEach((p, i) => {
      const b = document.createElement('button');
      b.className = 'retro-btn';
      b.style.setProperty('--tc', TYPE_COLORS[p.type] || '');
      b.textContent = `Swap out ${p.name}`;
      b.addEventListener('click', () => {
        const names = playerTeam.map(p => p.name);
        names[i] = name;
        localStorage.setItem('playerTeam', JSON.stringify(names));
        localStorage.setItem('playerPokemon', names[0]);
        window.location.reload();
      });
      els.switchPanel.appendChild(b);
    });
    const back = document.createElement('button');
    back.className = 'retro-btn'; back.textContent = 'BACK';
    back.addEventListener('click', showDraft);
    els.switchPanel.appendChild(back);
  }

  els.restartButton.addEventListener('click', () => {
    if (nextGym && campState && campState.endless) return showDraft();
    if (nextGym) window.location.reload(); else window.location.href = 'index.html';
  });
  init();
}

// ---------- STATS PAGE ----------
const totalWinsEl = document.getElementById('totalWins');
if (totalWinsEl) {
  const profile = getProfile();
  const stats = getStats();
  const total = stats.wins + stats.losses;

  const summary = document.getElementById('profileSummary');
  if (profile.avatarUrl || profile.trainerClassId) {
    const cls = TRAINER_CLASSES.find(tc => tc.id === profile.trainerClassId);
    const img = profile.avatarUrl || (cls ? trainerSilhouette(cls.accent, cls.hat) : '');
    summary.innerHTML = `<img class="pixel-avatar round" style="width:48px;height:48px;" src="${img}" alt="Trainer" onerror="handleSpriteError(this)">
      <div style="font-size:11px;line-height:1.9;text-align:left;">${profile.trainerName || profile.githubUsername || (cls ? cls.name : 'Trainer')}<br><span style="font-size:8px;color:var(--accent-yellow)">${cls ? cls.name.toUpperCase() + ' · ' : ''}${rankOf(getStats().wins || 0).toUpperCase()}</span></div>`;
  }

  totalWinsEl.textContent = stats.wins;
  document.getElementById('bestWave').textContent = stats.bestWave || 0;
  document.getElementById('coinCount').textContent = `${getCoins()} COINS`;

  // ---------- shop: spend coins on items and a rare candy ----------
  const SHOP_ITEMS = [
    { key: 'potion', label: 'Potion', desc: '+50 HP in battle', cost: 20 },
    { key: 'superpotion', label: 'Super Potion', desc: '+100 HP in battle', cost: 45 },
    { key: 'fullheal', label: 'Full Heal', desc: 'Cures status in battle', cost: 30 },
    { key: 'revive', label: 'Revive', desc: 'Revives a fainted teammate at half HP', cost: 60 },
    { key: 'xattack', label: 'X Attack', desc: '+1 Attack in battle', cost: 25 },
    { key: 'pokeball', label: 'Poké Balls x5', desc: 'try to recruit a beaten foe after a win', cost: 50, qty: 5 },
    { key: 'luckyegg', label: 'Lucky Egg', desc: '+50% XP for your next 5 wins; count = wins left', cost: 80, qty: 5 }
  ];
  const RARE_CANDY_COST = 100;
  function renderShop() {
    const shopMsg = document.getElementById('shopMsg');
    const list = document.getElementById('shopList');
    list.innerHTML = '';
    const inv = getInventory();
    SHOP_ITEMS.forEach(it => {
      const row = document.createElement('div');
      row.className = 'stat-row';
      row.innerHTML = `<span>${it.label} <span style="opacity:.7;">(${it.desc}) — have ${inv[it.key] || 0}</span></span>`;
      const b = document.createElement('button');
      b.className = 'retro-btn small';
      b.textContent = `BUY (${it.cost}c)`;
      b.disabled = getCoins() < it.cost;
      b.addEventListener('click', () => {
        if (!spendCoins(it.cost)) return;
        const inv2 = getInventory();
        inv2[it.key] = (inv2[it.key] || 0) + (it.qty || 1);
        saveInventory(inv2);
        shopMsg.textContent = `Bought a ${it.label}!`;
        document.getElementById('coinCount').textContent = `${getCoins()} COINS`;
        renderShop();
      });
      row.appendChild(b);
      list.appendChild(row);
    });
    // Rare Candy: pick any Pokémon you've used and bump it a level.
    const prog = getProgress();
    const ownedNow = getCaught();
    const known = Object.keys(prog).filter(n => ownedNow.includes(n)).length ? Object.keys(prog).filter(n => ownedNow.includes(n)) : ownedNow.slice(0, 1);
    const row = document.createElement('div');
    row.className = 'stat-row';
    const sel = document.createElement('select');
    sel.style.cssText = "font-family:'Press Start 2P',monospace;font-size:7px;padding:4px;";
    known.forEach(n => {
      const o = document.createElement('option');
      const lvl = prog[n] ? prog[n].level : 40;
      o.value = n; o.textContent = `${n} (Lv ${lvl})`;
      sel.appendChild(o);
    });
    row.innerHTML = `<span>Rare Candy <span style="opacity:.7;">(+1 level to a Pokémon)</span></span>`;
    const wrap = document.createElement('span');
    wrap.style.display = 'flex'; wrap.style.gap = '6px'; wrap.style.alignItems = 'center';
    const b = document.createElement('button');
    b.className = 'retro-btn small';
    b.textContent = `BUY (${RARE_CANDY_COST}c)`;
    b.disabled = getCoins() < RARE_CANDY_COST;
    b.addEventListener('click', () => {
      if (!spendCoins(RARE_CANDY_COST)) return;
      const p = getProgress();
      const name = sel.value;
      const cur = p[name] || { level: 40, xp: 0 };
      cur.level = Math.min(MAX_LEVEL, cur.level + 1);
      p[name] = cur;
      localStorage.setItem('pokeProgress', JSON.stringify(p));
      shopMsg.textContent = `${name} grew to Lv ${cur.level}!`;
      document.getElementById('coinCount').textContent = `${getCoins()} COINS`;
      renderShop();
    });
    wrap.appendChild(sel); wrap.appendChild(b);
    row.appendChild(wrap);
    list.appendChild(row);
  }
  renderShop();
  const saveMsg = document.getElementById('saveMsg'), fileIn = document.getElementById('importFile');
  document.getElementById('exportSaveBtn').addEventListener('click', () => { exportSave(); saveMsg.textContent = 'Save file downloaded.'; });
  document.getElementById('importSaveBtn').addEventListener('click', () => fileIn.click());
  fileIn.addEventListener('change', () => {
    const f = fileIn.files[0]; if (!f) return;
    f.text().then(t => { const n = importSave(t); saveMsg.textContent = `Imported ${n} items. Reloading...`; setTimeout(() => location.reload(), 700); })
      .catch(e => { saveMsg.textContent = 'Import failed: ' + (e.message || 'invalid file'); });
    fileIn.value = '';
  });
  document.getElementById('totalLosses').textContent = stats.losses;
  document.getElementById('winRate').textContent = total ? Math.round((stats.wins / total) * 100) + '%' : '0%';
  document.getElementById('streak').textContent = stats.streak || 0;
  document.getElementById('bestStreak').textContent = stats.best || 0;
  const hist = document.getElementById('history');
  const rows = stats.history || [];
  if (!rows.length) hist.innerHTML = '<p style="font-size:9px;opacity:.6;">No battles yet.</p>';
  rows.forEach(h => {
    const d = document.createElement('div');
    d.className = 'stat-row';
    d.innerHTML = `<span>${h.me} vs ${h.foe}</span><span style="color:${h.won ? 'var(--hp-green)' : 'var(--accent-red)'}">${h.won ? 'WIN' : 'LOSS'}</span>`;
    hist.appendChild(d);
  });

  const breakdown = document.getElementById('typeBreakdown');
  const types = Object.keys(stats.byType);
  if (types.length === 0) {
    breakdown.innerHTML = '<p style="font-size:9px;opacity:.6;">No battles yet.</p>';
  } else {
    types.forEach(t => {
      const row = stats.byType[t];
      const div = document.createElement('div');
      div.className = 'stat-row';
      div.innerHTML = `<span>${t}</span><span>${row.wins}W / ${row.losses}L</span>`;
      breakdown.appendChild(div);
    });
  }

  document.getElementById('resetStatsBtn').addEventListener('click', () => {
    localStorage.removeItem('battleStats');
    localStorage.removeItem('pokeProgress');
    location.reload();
  });
}

// ---------- POKEDEX PAGE ----------
const dexGrid = document.getElementById('dexGrid');
if (dexGrid) {
  const prog = getProgress(), byMon = getStats().byMon || {}, shinySet = new Set(getShinies()), caughtSet = new Set(getCaught());
  const $ = id => document.getElementById(id), search = $('dexSearch'), typeSel = $('dexType'), eraSel = $('dexEra'), legSel = $('dexLegend'), dlg = $('dexDlg');
  const all = Object.values(POKEDEX);
  typeSel.innerHTML = '<option value="">All types</option>' + [...new Set(all.flatMap(p => [p.type, p.type2].filter(Boolean)))].sort().map(t => `<option>${t}</option>`).join('');
  eraSel.innerHTML = '<option value="">All eras</option>' + [...new Set(all.map(p => p.era))].map(e => `<option>${e}</option>`).join('');
  const seen = n => caughtSet.has(n), badges = p => typeBadge(p.type) + (p.type2 ? typeBadge(p.type2) : '');
  const caughtCount = Object.keys(POKEDEX).filter(seen).length;
  function renderDex() {
    const q = search.value.trim().toLowerCase();
    const list = Object.entries(POKEDEX).filter(([n, p]) => n.toLowerCase().includes(q) && (!typeSel.value || p.type === typeSel.value || p.type2 === typeSel.value)
      && (!eraSel.value || p.era === eraSel.value) && (!legSel.value || p.legend));
    dexGrid.innerHTML = list.map(([n, p]) => {
      const s = seen(n), rec = byMon[n] || { wins: 0, losses: 0 }, tot = rec.wins + rec.losses;
      return `<div class="dex-card${s ? '' : ' unseen'}" data-name="${n}"><img src="${p.front}" alt="${s ? n : '???'}" loading="lazy" onerror="handleSpriteError(this)">
        <div class="dex-name">${s ? n : '???'}${shinySet.has(n) ? ' ★' : ''}${p.legend ? ' ✦' : ''}${s ? badges(p) : ''}</div>
        <div>${s ? 'Lv ' + (prog[n] ? prog[n].level : '40 (base)') : 'Not caught yet'}</div>
        ${caughtSet.has(n) ? '<div style="color:var(--hp-green)">CAUGHT</div>' : ''}
        <div>${s && tot ? `${rec.wins}W / ${rec.losses}L (${Math.round((rec.wins / tot) * 100)}%)` : ''}</div></div>`;
    }).join('') || '<p style="font-size:9px;">No Pokémon match.</p>';
    $('dexCount').textContent = `${caughtCount}/${all.length} CAUGHT · ${list.length} SHOWN · tap a card for details`;
  }
  const bar = (l, v) => `<div class="bs"><span>${l}</span><i style="width:${Math.min(100, v / 1.6)}%"></i><b>${v}</b></div>`;
  dexGrid.addEventListener('click', e => {
    const c = e.target.closest('.dex-card'); if (!c) return;
    const n = c.dataset.name, p = POKEDEX[n], rec = byMon[n] || { wins: 0, losses: 0 }, ev = EVOLVE[n], from = EVOLVES_FROM[n];
    dlg.querySelector('.dex-body').innerHTML = !seen(n)
      ? `<img src="${p.front}" class="unseenimg" alt=""><p>???</p><p style="opacity:.7">Win a battle, then catch it with a Poké Ball, to unlock its entry.</p>`
      : `<img src="${p.front}" alt="${n}" onerror="handleSpriteError(this)"><h3>${n}${p.legend ? ' ✦' : ''}</h3><p>${badges(p)}<br>${p.era}${shinySet.has(n) ? ' · ★ shiny' : ''}${caughtSet.has(n) ? ' · CAUGHT' : ''}</p>
        ${bar('HP', p.bs.hp)}${bar('ATK', p.bs.atk)}${bar('DEF', p.bs.def)}${bar('SPD', p.bs.spe)}
        <p>${from ? `Evolves from ${from}. ` : ''}${ev ? `Evolves into ${ev.to} at Lv ${ev.at}.` : from ? '' : 'Does not evolve.'}</p>
        <p>Lv ${prog[n] ? prog[n].level : '40 (base)'} · ${rec.wins}W / ${rec.losses}L</p>
        <ul class="dex-moves">${p.moves.map(m => `<li>${m.name} ${typeBadge(moveType(m))}<span>${m.power || 'STAT'}</span></li>`).join('')}</ul>`;
    dlg.showModal();
  });
  $('dexClose').addEventListener('click', () => dlg.close());
  [search, typeSel, eraSel, legSel].forEach(el => el.addEventListener(el === search ? 'input' : 'change', renderDex));
  renderDex();
}

// ---------- settings page ----------
if (document.getElementById('settingsPage')) {
  const $ = id => document.getElementById(id), vol = $('setVolume'), spd = $('setSpeed'), red = $('setMotion');
  const v0 = localStorage.getItem('volume'); vol.value = v0 === null ? 100 : Math.round(v0 * 100);
  spd.value = localStorage.getItem('battleSpeed') || 'normal'; red.checked = localStorage.getItem('reduceMotion') === '1';
  vol.addEventListener('input', () => { localStorage.setItem('volume', vol.value / 100); $('volLabel').textContent = vol.value + '%'; });
  vol.addEventListener('change', () => beep(660, .12));
  spd.addEventListener('change', () => localStorage.setItem('battleSpeed', spd.value));
  red.addEventListener('change', () => { localStorage.setItem('reduceMotion', red.checked ? '1' : '0'); document.documentElement.classList.toggle('reduce-motion', red.checked); });
  $('volLabel').textContent = vol.value + '%';
}

// ---------- back buttons: a sticky BACK bar on top of every screen (Esc works too) ----------
(() => {
  const $ = id => document.getElementById(id), goHome = () => { window.location.href = 'index.html'; };
  const bar = (host, fn) => { if (!host) return; const d = document.createElement('div'); d.className = 'back-bar';
    const b = document.createElement('button'); b.className = 'retro-btn small'; b.textContent = '◀ BACK'; b.addEventListener('click', fn); d.appendChild(b); host.prepend(d); };
  const back = () => { let same = false; try { same = document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {} same && history.length > 1 ? history.back() : goHome(); };
  if ($('tutorialScreen')) {
    bar($('tutorialScreen'), () => $('tutorialDoneBtn').click());
    bar($('profileScreen'), () => { $('profileScreen').hidden = true; $('titleScreen').hidden = false; });
    bar($('pokemonSelection'), () => { if (phase === 'opp') $('teamBackBtn').click(); else { $('pokemonSelection').hidden = true; $('profileScreen').hidden = false; } });
  } else if ($('trainerIntro')) {
    bar($('trainerIntro'), goHome);
    const m = $('menuDropdown');
    if (m) { const b = document.createElement('button'); b.textContent = '◀ Back (forfeit)';
      b.addEventListener('click', () => { if (confirm('Leave this battle? It counts as a forfeit.')) $('forfeitBtn').click(); }); m.prepend(b); }
  } else if ($('dexGrid') || $('totalWins') || $('settingsPage')) bar(document.querySelector('.panel'), back);
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || document.querySelector('dialog[open]')) return;
    const b = [...document.querySelectorAll('.back-bar button')].find(x => x.offsetParent); if (b) b.click();
  });
})();

// ---------- install as an app (offline support) ----------
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
