const POKEDEX = {
  Pikachu:    { type:'electric', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',    back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif',
    moves:[{name:'Thunder Shock',power:9},{name:'Quick Attack',power:6},{name:'Thunderbolt',power:13},{name:'Iron Tail',power:10}] },
  Bulbasaur:  { type:'grass', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',    back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif',
    moves:[{name:'Vine Whip',power:8},{name:'Tackle',power:6},{name:'Razor Leaf',power:11},{name:'Seed Bomb',power:12}] },
  Charmander: { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',    back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif',
    moves:[{name:'Ember',power:8},{name:'Scratch',power:5},{name:'Flame Burst',power:12},{name:'Metal Claw',power:9}] },
  Squirtle:   { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',     back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif',
    moves:[{name:'Bubble',power:7},{name:'Tackle',power:6},{name:'Water Gun',power:9},{name:'Bite',power:8}] },
  Blastoise:  { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',    back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif',
    moves:[{name:'Water Cannon',power:10},{name:'Water Pulse',power:8},{name:'Surf',power:12},{name:'Tackle',power:6}] },
  Charizard:  { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',     back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif',
    moves:[{name:'Flamethrower',power:11},{name:'Dragon Claw',power:10},{name:'Wing Attack',power:8},{name:'Fire Fang',power:9}] },
  Eevee:      { type:'normal', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/eevee.gif',
    moves:[{name:'Quick Attack',power:7},{name:'Tackle',power:6},{name:'Swift',power:9},{name:'Bite',power:8}] },
  Jigglypuff: { type:'normal', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',  back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/jigglypuff.gif',
    moves:[{name:'Double Slap',power:8},{name:'Pound',power:6},{name:'Rollout',power:9},{name:'Body Slam',power:10}] },
  Gengar:     { type:'ghost', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif',
    moves:[{name:'Shadow Ball',power:11},{name:'Lick',power:6},{name:'Sludge Bomb',power:12},{name:'Night Shade',power:9}] },
  Snorlax:    { type:'normal', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',     back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/snorlax.gif',
    moves:[{name:'Body Slam',power:11},{name:'Tackle',power:6},{name:'Hyper Beam',power:14},{name:'Crunch',power:10}] },
  Vulpix:     { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',        back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/vulpix.gif',
    moves:[{name:'Ember',power:8},{name:'Quick Attack',power:6},{name:'Fire Spin',power:10},{name:'Bite',power:8}] },
  Growlithe:  { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',     back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/growlithe.gif',
    moves:[{name:'Bite',power:8},{name:'Ember',power:8},{name:'Flame Wheel',power:11},{name:'Roar',power:5}] },
  Psyduck:    { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',      back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/psyduck.gif',
    moves:[{name:'Water Gun',power:8},{name:'Confusion',power:9},{name:'Scratch',power:5},{name:'Water Pulse',power:10}] },
  Machop:     { type:'fighting', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',    back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/machop.gif',
    moves:[{name:'Karate Chop',power:9},{name:'Low Kick',power:7},{name:'Seismic Toss',power:11},{name:'Tackle',power:6}] },
  Abra:       { type:'psychic', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/abra.gif',
    moves:[{name:'Confusion',power:9},{name:'Psybeam',power:10},{name:'Psyshock',power:11},{name:'Teleport Jab',power:5}] },
  Geodude:    { type:'rock', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/geodude.gif',
    moves:[{name:'Rock Throw',power:9},{name:'Tackle',power:6},{name:'Rollout',power:8},{name:'Rock Slide',power:11}] },
  Meowth:     { type:'normal', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',      back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/meowth.gif',
    moves:[{name:'Scratch',power:5},{name:'Bite',power:8},{name:'Fury Swipes',power:9},{name:'Pay Day',power:7}] },
  Ekans:      { type:'poison', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/ekans.gif',
    moves:[{name:'Wrap',power:7},{name:'Bite',power:8},{name:'Sludge',power:9},{name:'Poison Sting',power:6}] },
  Sandshrew:  { type:'ground', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif',   back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/sandshrew.gif',
    moves:[{name:'Scratch',power:5},{name:'Sand Attack',power:4},{name:'Slash',power:10},{name:'Rollout',power:8}] },
  Oddish:     { type:'grass', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/oddish.gif',
    moves:[{name:'Absorb',power:6},{name:'Acid',power:7},{name:'Razor Leaf',power:11},{name:'Poison Powder',power:6}] },
  Poliwag:    { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif',      back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwag.gif',
    moves:[{name:'Bubble',power:7},{name:'Water Gun',power:8},{name:'Double Slap',power:8},{name:'Body Slam',power:10}] },
  Ponyta:     { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif',        back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/ponyta.gif',
    moves:[{name:'Ember',power:8},{name:'Stomp',power:9},{name:'Flame Wheel',power:11},{name:'Tackle',power:6}] },
  Magnemite:  { type:'electric', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/magnemite.gif',
    moves:[{name:'Thunder Shock',power:9},{name:'Sonic Boom',power:8},{name:'Spark',power:10},{name:'Tackle',power:6}] },
  Doduo:      { type:'normal', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif',       back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/doduo.gif',
    moves:[{name:'Peck',power:7},{name:'Quick Attack',power:6},{name:'Fury Attack',power:8},{name:'Drill Peck',power:10}] },
  Venusaur:  { type:'grass', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif',
    moves:[{name:'Vine Whip',power:8},{name:'Razor Leaf',power:11},{name:'Solar Beam',power:14},{name:'Body Slam',power:10}] },
  Raichu:    { type:'electric', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/raichu.gif',
    moves:[{name:'Thunderbolt',power:13},{name:'Quick Attack',power:6},{name:'Thunder Punch',power:11},{name:'Iron Tail',power:10}] },
  Arcanine:  { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/arcanine.gif',
    moves:[{name:'Flamethrower',power:12},{name:'Fire Fang',power:10},{name:'Extreme Speed',power:11},{name:'Crunch',power:10}] },
  Alakazam:  { type:'psychic', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/alakazam.gif',
    moves:[{name:'Psychic',power:13},{name:'Psybeam',power:10},{name:'Confusion',power:9},{name:'Shadow Ball',power:11}] },
  Machamp:   { type:'fighting', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif',
    moves:[{name:'Cross Chop',power:12},{name:'Karate Chop',power:9},{name:'Seismic Toss',power:11},{name:'Body Slam',power:10}] },
  Golem:     { type:'rock', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/golem.gif',
    moves:[{name:'Rock Slide',power:11},{name:'Earthquake',power:13},{name:'Rollout',power:8},{name:'Tackle',power:6}] },
  Gyarados:  { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gyarados.gif',
    moves:[{name:'Hydro Pump',power:14},{name:'Bite',power:8},{name:'Waterfall',power:11},{name:'Dragon Rage',power:9}] },
  Dragonite: { type:'dragon', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif',
    moves:[{name:'Dragon Claw',power:11},{name:'Outrage',power:13},{name:'Wing Attack',power:8},{name:'Hyper Beam',power:14}] },
  Mewtwo:    { type:'psychic', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/mewtwo.gif',
    moves:[{name:'Psychic',power:13},{name:'Shadow Ball',power:11},{name:'Aura Sphere',power:12},{name:'Confusion',power:9}] },
  Lapras:    { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif',
    moves:[{name:'Surf',power:12},{name:'Ice Beam',power:12},{name:'Water Pulse',power:9},{name:'Body Slam',power:10}] },
  Onix:      { type:'rock', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/onix.gif',
    moves:[{name:'Rock Throw',power:9},{name:'Rock Slide',power:11},{name:'Slam',power:9},{name:'Iron Tail',power:10}] },
  Pidgeot:   { type:'flying', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeot.gif',
    moves:[{name:'Wing Attack',power:9},{name:'Gust',power:7},{name:'Air Slash',power:11},{name:'Quick Attack',power:6}] },
  Scyther:   { type:'bug', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/scyther.gif',
    moves:[{name:'Slash',power:10},{name:'X-Scissor',power:12},{name:'Wing Attack',power:8},{name:'Fury Cutter',power:8}] },
  Jynx:      { type:'ice', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/jynx.gif',
    moves:[{name:'Ice Punch',power:11},{name:'Powder Snow',power:8},{name:'Psychic',power:12},{name:'Pound',power:6}] },
  Electabuzz:{ type:'electric', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/electabuzz.gif',
    moves:[{name:'Thunder Punch',power:11},{name:'Thunderbolt',power:13},{name:'Quick Attack',power:6},{name:'Low Kick',power:7}] },
  Magmar:    { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/magmar.gif',
    moves:[{name:'Flamethrower',power:12},{name:'Fire Punch',power:10},{name:'Ember',power:8},{name:'Smog',power:6}] },
  Haunter:   { type:'ghost', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/haunter.gif',
    moves:[{name:'Shadow Ball',power:11},{name:'Lick',power:6},{name:'Night Shade',power:9},{name:'Dream Eater',power:10}] },
  Cubone:    { type:'ground', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/cubone.gif',
    moves:[{name:'Bone Club',power:9},{name:'Bonemerang',power:11},{name:'Headbutt',power:8},{name:'Earthquake',power:12}] },
  Dratini:   { type:'dragon', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/dratini.gif',
    moves:[{name:'Dragon Rage',power:8},{name:'Wrap',power:7},{name:'Twister',power:9},{name:'Slam',power:9}] },
  Zubat:     { type:'flying', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/zubat.gif',
    moves:[{name:'Wing Attack',power:8},{name:'Leech Life',power:7},{name:'Air Cutter',power:9},{name:'Bite',power:8}] },
  Butterfree:{ type:'bug', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/butterfree.gif',
    moves:[{name:'Bug Buzz',power:11},{name:'Gust',power:7},{name:'Psybeam',power:10},{name:'Silver Wind',power:9}] },
  Nidoking:  { type:'poison', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoking.gif',
    moves:[{name:'Poison Jab',power:10},{name:'Earthquake',power:13},{name:'Horn Attack',power:8},{name:'Sludge Bomb',power:12}] },
  Vaporeon:  { type:'water', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/vaporeon.gif',
    moves:[{name:'Water Pulse',power:9},{name:'Surf',power:12},{name:'Bite',power:8},{name:'Quick Attack',power:6}] },
  Jolteon:   { type:'electric', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/jolteon.gif',
    moves:[{name:'Thunder',power:13},{name:'Pin Missile',power:8},{name:'Quick Attack',power:6},{name:'Thunder Fang',power:10}] },
  Flareon:   { type:'fire', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/flareon.gif',
    moves:[{name:'Flamethrower',power:12},{name:'Fire Fang',power:10},{name:'Ember',power:8},{name:'Bite',power:8}] },
  Lucario:   { type:'fighting', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/lucario.gif',
    moves:[{name:'Aura Sphere',power:12},{name:'Force Palm',power:10},{name:'Close Combat',power:13},{name:'Metal Claw',power:9}] },
  Articuno:  { type:'ice', front:'https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif', back:'https://img.pokemondb.net/sprites/black-white/anim/back-normal/articuno.gif',
    moves:[{name:'Ice Beam',power:12},{name:'Blizzard',power:14},{name:'Wing Attack',power:8},{name:'Gust',power:7}] }
};

// Attacker type -> { defenderType: multiplier }. Unlisted pairs default to 1x.
const TYPE_CHART = {
  normal:   { rock: 0.5, ghost: 0 },
  fire:     { grass: 2, bug: 2, ice: 2, water: 0.5, fire: 0.5, rock: 0.5, dragon: 0.5 },
  water:    { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
  grass:    { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5 },
  electric: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 },
  ghost:    { psychic: 2, ghost: 2, normal: 0 },
  fighting: { normal: 2, rock: 2, ice: 2, ghost: 0, psychic: 0.5, flying: 0.5, poison: 0.5, bug: 0.5 },
  psychic:  { fighting: 2, poison: 2, psychic: 0.5 },
  rock:     { fire: 2, flying: 2, bug: 2, ice: 2, fighting: 0.5, ground: 0.5 },
  poison:   { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5 },
  ground:   { fire: 2, electric: 2, poison: 2, rock: 2, grass: 0.5, bug: 0.5, flying: 0 },
  flying:   { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5 },
  bug:      { grass: 2, psychic: 2, fire: 0.5, fighting: 0.5, flying: 0.5, ghost: 0.5, poison: 0.5 },
  ice:      { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5 },
  dragon:   { dragon: 2 }
};

function typeEffectiveness(attackerType, defenderType) {
  const row = TYPE_CHART[attackerType];
  if (!row || row[defenderType] === undefined) return 1;
  return row[defenderType];
}

// Small pixel pokeball used whenever a remote sprite/avatar fails to load.
const FALLBACK_SPRITE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' shape-rendering='crispEdges'%3E%3Ccircle cx='32' cy='32' r='28' fill='%23f4f0d8' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M4 32a28 28 0 0 1 56 0z' fill='%23e3350d' stroke='%23000' stroke-width='4'/%3E%3Crect x='4' y='30' width='56' height='4' fill='%23000'/%3E%3Ccircle cx='32' cy='32' r='9' fill='%23f4f0d8' stroke='%23000' stroke-width='4'/%3E%3Ccircle cx='32' cy='32' r='3' fill='%23000'/%3E%3C/svg%3E";

function handleSpriteError(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  img.src = FALLBACK_SPRITE;
}

const TRAINER_CLASSES = [
  { id:'youngster', name:'Youngster', accent:'#3b4cca', hat:'cap' },
  { id:'lass',       name:'Lass',       accent:'#ff6ec7', hat:'bow' },
  { id:'ace',        name:'Ace Trainer',accent:'#e3350d', hat:'none' },
  { id:'hiker',      name:'Hiker',      accent:'#a8a878', hat:'band' },
  { id:'swimmer',    name:'Swimmer',    accent:'#3ba7e3', hat:'none' },
  { id:'rocket',     name:'Rocket Grunt',accent:'#4a4a4a', hat:'r' }
];

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
  if (info) s.history = [{ won, ...info }, ...s.history].slice(0, 10);
  saveStats(s);
}

// ---------- type badges, move accuracy/PP, sound ----------
const TYPE_COLORS = {
  normal:'#a8a878', fire:'#e3350d', water:'#3b6cff', grass:'#4fa64f', electric:'#d4a800', ghost:'#705898',
  fighting:'#c03028', psychic:'#f85888', rock:'#b8a038', poison:'#a040a0', ground:'#c9a13f',
  flying:'#8a70e0', bug:'#8a9a10', ice:'#5cbcbc', dragon:'#7038f8'
};
function typeBadge(type) {
  return `<span class="type-badge" style="background:${TYPE_COLORS[type] || '#666'}">${type}</span>`;
}
function moveAccuracy(m) { return m.power >= 13 ? 85 : m.power >= 11 ? 95 : 100; }
function movePP(m) { return m.power >= 13 ? 5 : m.power >= 11 ? 10 : m.power >= 8 ? 15 : 25; }

let muted = localStorage.getItem('muted') === '1';
let audioCtx;
function beep(freq, dur, type = 'square', vol = 0.05, slide = 0) {
  if (muted) return;
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
  faint: () => beep(300, .7, 'sawtooth', .05, -250),
  win:   () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, .15), i * 140))
};

// ---------- XP / levels (saved per Pokémon) ----------
const XP_PER_LEVEL = 50, MAX_LEVEL = 100;
function getProgress() { try { return JSON.parse(localStorage.getItem('pokeProgress')) || {}; } catch (e) { return {}; } }
// Every Pokémon that fought in a won battle earns XP; returns "grew to Lv N" messages.
function grantXP(mons, foesBeaten) {
  const prog = getProgress(), lines = [];
  mons.filter(m => m.fought).forEach(m => {
    const p = prog[m.name] || { level: m.level, xp: 0 }, before = p.level;
    p.xp += 40 + 25 * foesBeaten;
    while (p.xp >= XP_PER_LEVEL && p.level < MAX_LEVEL) { p.xp -= XP_PER_LEVEL; p.level++; }
    if (p.level > before) lines.push(`${m.name} grew to Lv ${p.level}!`);
    prog[m.name] = p;
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
const BAG_START = { potion: 3, superpotion: 1, fullheal: 2 };
function getCampaign() { try { return JSON.parse(localStorage.getItem('campaign')); } catch (e) { return null; } }
function saveCampaign(c) { if (c) localStorage.setItem('campaign', JSON.stringify(c)); else localStorage.removeItem('campaign'); }

const OPPONENT_POOL = Object.keys(POKEDEX);

// ---------- TITLE SCREEN ----------
const startButton = document.getElementById('startButton');
if (startButton) {
  startButton.addEventListener('click', () => {
    document.getElementById('titleScreen').hidden = true;
    document.getElementById('profileScreen').hidden = false;
  });
}

// ---------- PROFILE / TRAINER SELECT SCREEN ----------
const trainerGrid = document.getElementById('trainerGrid');
if (trainerGrid) {
  const profile = getProfile();
  let selectedClass = profile.trainerClassId || null;

  TRAINER_CLASSES.forEach(tc => {
    const btn = document.createElement('button');
    btn.className = 'trainer-option' + (tc.id === selectedClass ? ' selected' : '');
    btn.innerHTML = `<img src="${trainerSilhouette(tc.accent, tc.hat)}" alt="${tc.name}"><span>${tc.name}</span>`;
    btn.addEventListener('click', () => {
      selectedClass = tc.id;
      document.querySelectorAll('.trainer-option').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('profileContinueBtn').disabled = false;
    });
    trainerGrid.appendChild(btn);
  });

  if (selectedClass) document.getElementById('profileContinueBtn').disabled = false;

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
      delete githubAvatar.dataset.fallbackApplied;
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
    btn.innerHTML = `<img src="${data.front}" alt="${name}"><span>${name}</span>${lvOf(name)}`;
    pokemonContainer.appendChild(btn);
  });
}

let teamSize = +localStorage.getItem('teamSize') || 3;
let oppMode = localStorage.getItem('oppMode') || 'random';
let campMode = localStorage.getItem('campMode') || 'single';
let phase = 'player';            // 'player' = pick your team, 'opp' = pick the opponent's team
const team = [], oppPick = [];
const teamBtn = document.getElementById('teamStartBtn');
function refreshTeamUI() {
  const picks = phase === 'player' ? team : oppPick;
  document.getElementById('pickCount').textContent = teamSize;
  document.getElementById('pickWho').textContent = phase === 'player' ? '' : 'OPPONENT ';
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('selected', +b.dataset.size === teamSize));
  document.querySelectorAll('.camp-btn').forEach(b => b.addEventListener('click', () => {
    campMode = b.dataset.camp;
    localStorage.setItem('campMode', campMode);
    refreshTeamUI();
  }));
  document.querySelectorAll('.opp-btn').forEach(b => b.classList.toggle('selected', b.dataset.mode === oppMode));
  document.querySelectorAll('.pokemon-card').forEach(c => {
    c.classList.toggle('picked', picks.includes(c.dataset.name));
    c.disabled = phase === 'opp' && team.includes(c.dataset.name);
  });
  document.querySelectorAll('.camp-btn').forEach(b => b.classList.toggle('selected', b.dataset.camp === campMode));
  document.getElementById('oppRow').hidden = campMode === 'campaign';
  const last = phase === 'opp' || oppMode === 'random' || campMode === 'campaign';
  teamBtn.textContent = `${last ? 'START BATTLE' : 'NEXT: PICK OPPONENT'} (${picks.length}/${teamSize})`;
  teamBtn.disabled = picks.length !== teamSize;
  document.getElementById('setupBars').hidden = phase === 'opp';
  document.getElementById('teamBackBtn').hidden = phase !== 'opp';
}
if (teamBtn) {
  teamBtn.addEventListener('click', () => {
    if (phase === 'player' && oppMode === 'choose' && campMode !== 'campaign') { phase = 'opp'; refreshTeamUI(); return; }
    localStorage.setItem('playerTeam', JSON.stringify(team));
    localStorage.setItem('playerPokemon', team[0]);
    saveCampaign(campMode === 'campaign' ? { stage: 0, badges: [], bag: { ...BAG_START } } : null);
    if (oppMode === 'choose' && campMode !== 'campaign') localStorage.setItem('oppTeam', JSON.stringify(oppPick));
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

// ---------- BATTLE SCREEN ----------
const trainerIntroEl = document.getElementById('trainerIntro');
if (trainerIntroEl) {
  const profile = getProfile();
  const teamNames = JSON.parse(localStorage.getItem('playerTeam') || 'null') || [localStorage.getItem('playerPokemon') || 'Blastoise'];
  const camp = getCampaign(), gym = camp && GYM_LEADERS[camp.stage];
  const trainer = gym || OPPONENT_TRAINERS[Math.floor(Math.random() * OPPONENT_TRAINERS.length)];

  function levelToMaxHp(level) { return Math.round(80 + level * 1.6); }
  function makeMon(name, level) {
    const maxHp = levelToMaxHp(level);
    return { name, level, hp: maxHp, maxHp, ...POKEDEX[name] };
  }
  const prog = getProgress();
  const playerTeam = teamNames.map(n => makeMon(n, prog[n] ? prog[n].level : 40));
  const avgLv = Math.round(playerTeam.reduce((a, p) => a + p.level, 0) / playerTeam.length);
  // gym leaders scale with the stage; other opponents track your team's level (±3)
  const foeLevel = () => (gym ? 40 + camp.stage * 2 : Math.max(5, avgLv + Math.floor(Math.random() * 7) - 3));
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
  document.getElementById('trainerText').textContent = `${trainer.name} wants to battle! They sent out ${opponent.name}!${camp ? ` [GYM ${camp.stage + 1}/${GYM_LEADERS.length}]` : ''}`;

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
  document.getElementById('forfeitBtn').addEventListener('click', () => {
    saveCampaign(null);
    recordResult(false, opponent.type, { me: player.name, foe: opponent.name });
    window.location.href = 'index.html';
  });
}

function startBattle(playerTeam, oppTeam) {
  let player = playerTeam[0], opponent = oppTeam[0];
  const campState = getCampaign();
  const bag = campState ? campState.bag : { ...BAG_START };
  let nextGym = false;
  const els = {
    oppName: document.getElementById('oppName'), oppLevel: document.getElementById('oppLevel'),
    oppSprite: document.getElementById('oppSprite'), oppHPBar: document.getElementById('oppHPBar'), oppHPText: document.getElementById('oppHPText'),
    playerName: document.getElementById('playerName'), playerLevel: document.getElementById('playerLevel'),
    playerSprite: document.getElementById('playerSprite'), playerHPBar: document.getElementById('playerHPBar'), playerHPText: document.getElementById('playerHPText'),
    message: document.getElementById('message'), actions: document.getElementById('actions'), restartButton: document.getElementById('restartButton'),
    switchBtn: document.getElementById('switchBtn'), itemBtn: document.getElementById('itemBtn'), switchPanel: document.getElementById('switchPanel'),
    oppDots: document.getElementById('oppDots'), playerDots: document.getElementById('playerDots')
  };

  function showOpp() {
    els.oppName.innerHTML = opponent.name + typeBadge(opponent.type);
    els.oppLevel.textContent = opponent.level;
    els.oppSprite.classList.remove('anim-faint');
    delete els.oppSprite.dataset.fallbackApplied;
    els.oppSprite.src = opponent.front;
    updateHP('opp'); renderTeamDots();
  }
  function showPlayer() {
    player.fought = true;
    els.playerName.innerHTML = player.name + typeBadge(player.type);
    els.playerLevel.textContent = player.level;
    els.playerSprite.classList.remove('anim-faint');
    delete els.playerSprite.dataset.fallbackApplied;
    els.playerSprite.src = player.back;
    updateHP('player'); renderMoves(); renderTeamDots();
  }
  function renderTeamDots() {
    const dots = t => t.map(p => (p.hp > 0 ? '●' : '○')).join(' ');
    els.oppDots.textContent = dots(oppTeam); els.playerDots.textContent = dots(playerTeam);
  }
  function init() {
    els.oppSprite.addEventListener('error', () => handleSpriteError(els.oppSprite));
    els.playerSprite.addEventListener('error', () => handleSpriteError(els.playerSprite));
    playerTeam.forEach(p => (p.pp = p.moves.map(movePP)));
    els.oppDots.hidden = els.playerDots.hidden = els.switchBtn.hidden = playerTeam.length < 2;
    showOpp(); showPlayer();
  }

  function updateHP(who) {
    const mob = who === 'opp' ? opponent : player;
    const bar = who === 'opp' ? els.oppHPBar : els.playerHPBar;
    const text = who === 'opp' ? els.oppHPText : els.playerHPText;
    const pct = Math.max(0, (mob.hp / mob.maxHp) * 100);
    bar.style.width = pct + '%';
    bar.style.background = pct > 50 ? 'var(--hp-green)' : pct > 20 ? 'var(--hp-yellow)' : 'var(--hp-red)';
    text.textContent = `${Math.max(0, mob.hp)}/${mob.maxHp}`;
    (who === 'opp' ? els.oppName : els.playerName).innerHTML = mob.name + typeBadge(mob.type) + statusTag(mob);
    renderTeamDots();
  }

  function renderMoves() {
    els.actions.innerHTML = '';
    player.moves.forEach((move, i) => {
      const btn = document.createElement('button');
      btn.className = 'retro-btn'; btn.dataset.idx = i;
      btn.style.setProperty('--tc', TYPE_COLORS[player.type] || '');
      btn.textContent = `${i + 1}. ${move.name} ${player.pp[i]}/${movePP(move)}`;
      btn.addEventListener('click', () => playerTurn(move, i));
      els.actions.appendChild(btn);
    });
  }

  function setMessage(t) { els.message.textContent = t; }
  function disableActions(d) {
    els.actions.querySelectorAll('button').forEach(b => (b.disabled = d || player.pp[b.dataset.idx] <= 0));
    els.switchBtn.disabled = d || playerTeam.filter(p => p.hp > 0).length < 2;
    els.itemBtn.disabled = d;
  }
  function animate(el, cls) {
    el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
    if (cls !== 'anim-faint') el.addEventListener('animationend', () => el.classList.remove(cls), { once: true });
  }

  // Misses (by move accuracy), 1-in-12 crits, and type effectiveness. Returns { dmg, eff, crit, miss }.
  function computeDamage(move, attacker, defender) {
    if (Math.random() * 100 >= moveAccuracy(move)) return { dmg: 0, eff: 1, miss: true };
    const eff = typeEffectiveness(attacker.type, defender.type);
    const crit = Math.random() < 1 / 12;
    const levelFactor = 0.6 + attacker.level / 100;
    const dmg = eff === 0 ? 0 : Math.max(1, Math.round(move.power * levelFactor * eff * (crit ? 1.5 : 1) * (attacker.status === 'brn' ? 0.5 : 1)));
    return { dmg, eff, crit };
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
  const INFLICTS = { fire: 'brn', ghost: 'brn', electric: 'par', poison: 'psn', grass: 'slp' };
  const IMMUNE = { brn: 'fire', par: 'electric', psn: 'poison' };
  const STATUS_INFO = { brn: ['BRN', '#e3350d'], par: ['PAR', '#d4a800'], psn: ['PSN', '#a040a0'], slp: ['SLP', '#777'] };
  function statusTag(mon) {
    const i = STATUS_INFO[mon.status];
    return i ? `<span class="type-badge" style="background:${i[1]}">${i[0]}</span>` : '';
  }
  // Returns a message if the Pokémon can't act this turn (asleep / fully paralyzed).
  function cantMove(mon) {
    if (mon.status === 'slp') {
      if (mon.sleepTurns-- > 0) return `${mon.name} is fast asleep.`;
      mon.status = null;
      return `${mon.name} woke up!`;
    }
    if (mon.status === 'par' && Math.random() < 0.25) return `${mon.name} is paralyzed! It can't move!`;
    return '';
  }
  function tryInflict(att, def) {
    const st = INFLICTS[att.type];
    if (!st || def.status || IMMUNE[st] === def.type || Math.random() > 0.2) return '';
    def.status = st;
    if (st === 'slp') def.sleepTurns = 1 + Math.floor(Math.random() * 2);
    return { brn: ` ${def.name} was burned!`, par: ` ${def.name} is paralyzed!`, psn: ` ${def.name} was poisoned!`, slp: ` ${def.name} fell asleep!` }[st];
  }
  function residual(mon) {
    if (mon.status !== 'brn' && mon.status !== 'psn') return '';
    mon.hp = Math.max(0, mon.hp - Math.max(1, Math.floor(mon.maxHp / (mon.status === 'brn' ? 16 : 8))));
    return ` ${mon.name} is hurt by its ${mon.status === 'brn' ? 'burn' : 'poison'}!`;
  }

  // One attack: status check, lunge animation, sound, damage, hit flash, message.
  function attack(att, def, move, attSprite, defSprite, atkClass) {
    const blocked = cantMove(att);
    if (blocked) { setMessage(blocked); setTimeout(() => { updateHP('opp'); updateHP('player'); }, 250); return; }
    const r = computeDamage(move, att, def);
    animate(attSprite, atkClass);
    def.hp = Math.max(0, def.hp - r.dmg);
    let msg = describe(att, move, def, r);
    if (r.dmg > 0) msg += tryInflict(att, def);
    if (def.hp > 0) msg += residual(att);
    setTimeout(() => {
      if (r.miss) SFX.miss();
      else if (r.eff === 0) SFX.weak();
      else {
        animate(defSprite, 'anim-hit');
        if (r.eff > 1) SFX.super(); else if (r.eff < 1) SFX.weak(); else if (r.crit) SFX.crit(); else SFX.hit();
      }
      updateHP('opp'); updateHP('player');
    }, 250);
    setMessage(msg);
  }

  function playerTurn(move, i) {
    player.pp[i]--;
    attack(player, opponent, move, els.playerSprite, els.oppSprite, 'anim-atk-p', 'opp');
    renderMoves(); disableActions(true);
    if (opponent.hp <= 0) return foeFainted();
    if (player.hp <= 0) return playerFainted(opponentTurn);
    setTimeout(opponentTurn, 1300);
  }

  // easy = random, normal = 50% strongest move, hard = always strongest move
  function pickMove() {
    const best = opponent.moves.reduce((a, b) => (b.power > a.power ? b : a));
    const rnd = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    const d = localStorage.getItem('difficulty') || 'normal';
    return d === 'hard' || (d === 'normal' && Math.random() < 0.5) ? best : rnd;
  }

  function opponentTurn() {
    attack(opponent, player, pickMove(), els.oppSprite, els.playerSprite, 'anim-atk-o', 'player');
    if (player.hp <= 0) return playerFainted();
    if (opponent.hp <= 0) return foeFainted();
    disableActions(false);
  }

  function endGame(won, text) {
    if (won) text += ' ' + grantXP(playerTeam, oppTeam.length).join(' ');
    text += campaignResult(won);
    setMessage(text);
    disableActions(true);
    recordResult(won, opponent.type, { me: playerTeam[0].name, foe: oppTeam[0].name });
    setTimeout(() => {
      animate(won ? els.oppSprite : els.playerSprite, 'anim-faint');
      if (won) SFX.win(); else SFX.faint();
    }, 700);
    els.restartButton.hidden = false;
  }

  // ---------- team logic: fainting and switching ----------
  function foeFainted() {
    if (oppTeam.every(p => p.hp <= 0)) return endGame(true, `${opponent.name} fainted. You win!`);
    setTimeout(() => { animate(els.oppSprite, 'anim-faint'); SFX.faint(); setMessage(`${opponent.name} fainted!`); }, 700);
    setTimeout(() => {
      opponent = oppTeam.find(p => p.hp > 0);
      showOpp(); setMessage(`The rival sent out ${opponent.name}!`); disableActions(false);
    }, 2000);
  }
  let afterForced = null;   // what happens after a forced switch (e.g. the foe's turn)
  function playerFainted(next) {
    afterForced = next || null;
    if (playerTeam.every(p => p.hp <= 0)) return endGame(false, `${player.name} fainted. You lose!`);
    setTimeout(() => { animate(els.playerSprite, 'anim-faint'); SFX.faint(); setMessage(`${player.name} fainted! Pick your next Pokémon.`); }, 700);
    setTimeout(() => openSwitch(true), 1700);
  }
  function openSwitch(forced) {
    els.switchPanel.innerHTML = '';
    playerTeam.forEach((p, i) => {
      const b = document.createElement('button');
      b.className = 'retro-btn';
      b.style.setProperty('--tc', TYPE_COLORS[p.type] || '');
      b.textContent = `${p.name} ${p.hp}/${p.maxHp}`;
      b.disabled = p.hp <= 0 || p === player;
      b.addEventListener('click', () => switchTo(i, forced));
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
  function closeSwitch() { els.switchPanel.hidden = true; els.actions.hidden = false; els.switchBtn.hidden = playerTeam.length < 2; els.itemBtn.hidden = false; }
  function switchTo(i, forced) {
    player = playerTeam[i];
    closeSwitch(); showPlayer();
    setMessage(`Go, ${player.name}!`);
    if (forced) {
      disableActions(true);
      if (afterForced) { const f = afterForced; afterForced = null; return setTimeout(f, 1000); }
      return disableActions(false);
    }
    disableActions(true);
    setTimeout(opponentTurn, 1000);
  }
  els.switchBtn.addEventListener('click', () => openSwitch(false));

  // ---------- items (using one costs your turn) ----------
  const ITEMS = {
    potion:      { label: 'Potion +50 HP',        need: m => m.hp < m.maxHp, use: m => { m.hp = Math.min(m.maxHp, m.hp + 50);  return `${m.name} recovered HP!`; } },
    superpotion: { label: 'Super Potion +100 HP', need: m => m.hp < m.maxHp, use: m => { m.hp = Math.min(m.maxHp, m.hp + 100); return `${m.name} recovered a lot of HP!`; } },
    fullheal:    { label: 'Full Heal',            need: m => !!m.status,     use: m => { m.status = null; return `${m.name} was cured of its status!`; } }
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
    const msg = ITEMS[k].use(player);
    closeSwitch(); updateHP('opp'); updateHP('player');
    setMessage(msg); disableActions(true);
    setTimeout(opponentTurn, 1000);
  }
  els.itemBtn.addEventListener('click', openItems);

  // ---------- XP + gym campaign progress ----------
  function campaignResult(won) {
    const camp = getCampaign();
    if (!camp) return '';
    if (!won) { saveCampaign(null); return ' Your gym run is over.'; }
    const badge = GYM_LEADERS[camp.stage].badge;
    camp.badges.push(badge);
    camp.stage++;
    camp.bag = bag; camp.bag.potion = (camp.bag.potion || 0) + 1;
    if (camp.stage >= GYM_LEADERS.length) { saveCampaign(null); return ' You are the CHAMPION! Every badge is yours!'; }
    saveCampaign(camp);
    nextGym = true; els.restartButton.textContent = 'NEXT GYM';
    return ` You won the ${badge} Badge and a Potion!`;
  }

  // keyboard: 1-4 pick a move
  document.addEventListener('keydown', e => {
    if (e.key < '1' || e.key > '4' || els.actions.hidden) return;
    const b = els.actions.children[+e.key - 1];
    if (b && !b.disabled) b.click();
  });

  els.restartButton.addEventListener('click', () => { if (nextGym) window.location.reload(); else window.location.href = 'index.html'; });
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
      <span style="font-size:11px;">${profile.githubUsername || (cls ? cls.name : 'Trainer')}</span>`;
  }

  totalWinsEl.textContent = stats.wins;
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
