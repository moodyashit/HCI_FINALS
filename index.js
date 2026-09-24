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

function typeEffectiveness(attackerType, defenderType) {
  const row = TYPE_CHART[attackerType];
  if (!row || row[defenderType] === undefined) return 1;
  return row[defenderType];
}

// ---------- speed, real move types, stat moves, weather ----------
const VS = localStorage.getItem('vsMode') === '1';   // 2-player hot-seat battle
const SPEED = {Pikachu:90,Bulbasaur:45,Charmander:65,Squirtle:43,Blastoise:78,Charizard:100,Eevee:55,Jigglypuff:20,Gengar:110,Snorlax:30,Vulpix:65,Growlithe:60,Psyduck:55,Machop:35,Abra:90,Geodude:20,Meowth:90,Ekans:55,Sandshrew:40,Oddish:30,Poliwag:90,Ponyta:90,Magnemite:45,Doduo:75,Venusaur:80,Raichu:110,Arcanine:95,Alakazam:120,Machamp:55,Golem:45,Gyarados:81,Dragonite:80,Mewtwo:130,Lapras:60,Onix:70,Pidgeot:101,Scyther:105,Jynx:95,Electabuzz:105,Magmar:93,Haunter:95,Cubone:35,Dratini:50,Zubat:55,Butterfree:70,Nidoking:85,Vaporeon:65,Jolteon:130,Flareon:65,Lucario:90,Articuno:85};
// ---------- Pokémon #52-100 (compact form: name, type, speed, [move, power]...) ----------
const addMon = (name, type, speed, moves) => {
  const id = name.toLowerCase();
  POKEDEX[name] = { type, moves: moves.map(([n, power]) => ({ name: n, power })),
    front: `https://img.pokemondb.net/sprites/black-white/anim/normal/${id}.gif`,
    back:  `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${id}.gif` };
  SPEED[name] = speed;
};
addMon('Ivysaur','grass',60,[['Vine Whip',8],['Razor Leaf',11],['Body Slam',10],['Tackle',6]]);
addMon('Charmeleon','fire',80,[['Ember',8],['Slash',10],['Flamethrower',11],['Fire Fang',9]]);
addMon('Wartortle','water',58,[['Water Gun',8],['Bite',8],['Water Pulse',10],['Tackle',6]]);
addMon('Pidgey','flying',56,[['Gust',7],['Quick Attack',6],['Wing Attack',8],['Tackle',6]]);
addMon('Rattata','normal',72,[['Quick Attack',6],['Bite',8],['Tackle',6],['Headbutt',8]]);
addMon('Arbok','poison',80,[['Sludge Bomb',12],['Bite',8],['Crunch',10],['Wrap',7]]);
addMon('Sandslash','ground',65,[['Slash',10],['Earthquake',12],['Rollout',8],['Sand Attack',4]]);
addMon('Nidoqueen','poison',76,[['Poison Jab',10],['Earthquake',12],['Body Slam',10],['Sludge Bomb',12]]);
addMon('Clefairy','normal',35,[['Pound',6],['Double Slap',8],['Body Slam',10],['Swift',9]]);
addMon('Ninetales','fire',100,[['Flamethrower',12],['Fire Spin',10],['Quick Attack',6],['Bite',8]]);
addMon('Golbat','flying',90,[['Wing Attack',8],['Bite',8],['Air Cutter',9],['Leech Life',7]]);
addMon('Vileplume','grass',50,[['Razor Leaf',11],['Acid',7],['Solar Beam',14],['Poison Powder',6]]);
addMon('Venomoth','bug',90,[['Bug Buzz',11],['Psybeam',10],['Silver Wind',9],['Gust',7]]);
addMon('Dugtrio','ground',120,[['Earthquake',12],['Slash',10],['Bone Club',9],['Sand Attack',4]]);
addMon('Primeape','fighting',95,[['Karate Chop',9],['Cross Chop',12],['Low Kick',7],['Seismic Toss',11]]);
addMon('Poliwrath','water',70,[['Waterfall',11],['Body Slam',10],['Seismic Toss',11],['Water Pulse',9]]);
addMon('Kadabra','psychic',105,[['Psybeam',10],['Confusion',9],['Psychic',13],['Shadow Ball',11]]);
addMon('Machoke','fighting',45,[['Karate Chop',9],['Cross Chop',12],['Seismic Toss',11],['Body Slam',10]]);
addMon('Tentacool','water',70,[['Water Pulse',9],['Acid',7],['Bubble',7],['Poison Sting',6]]);
addMon('Rapidash','fire',105,[['Flame Wheel',11],['Stomp',9],['Flamethrower',12],['Quick Attack',6]]);
addMon('Slowbro','water',30,[['Water Pulse',10],['Confusion',9],['Surf',12],['Headbutt',8]]);
addMon('Dodrio','normal',100,[['Drill Peck',10],['Fury Attack',8],['Quick Attack',6],['Tackle',6]]);
addMon('Muk','poison',50,[['Sludge Bomb',12],['Poison Jab',10],['Body Slam',10],['Acid',7]]);
addMon('Gastly','ghost',80,[['Lick',6],['Shadow Ball',11],['Night Shade',9],['Smog',6]]);
addMon('Hitmonlee','fighting',87,[['Low Kick',7],['Karate Chop',9],['Close Combat',13],['Headbutt',8]]);
addMon('Hitmonchan','fighting',76,[['Ice Punch',11],['Thunder Punch',11],['Fire Punch',10],['Karate Chop',9]]);
addMon('Rhydon','ground',40,[['Earthquake',13],['Rock Slide',11],['Horn Attack',8],['Body Slam',10]]);
addMon('Chansey','normal',50,[['Pound',6],['Body Slam',10],['Double Slap',8],['Swift',9]]);
addMon('Tangela','grass',60,[['Vine Whip',8],['Absorb',6],['Razor Leaf',11],['Slam',9]]);
addMon('Kangaskhan','normal',90,[['Body Slam',10],['Crunch',10],['Slam',9],['Headbutt',8]]);
addMon('Starmie','water',115,[['Surf',12],['Psychic',13],['Ice Beam',12],['Swift',9]]);
addMon('Pinsir','bug',85,[['X-Scissor',12],['Slash',10],['Body Slam',10],['Bite',8]]);
addMon('Tauros','normal',110,[['Body Slam',10],['Earthquake',12],['Stomp',9],['Quick Attack',6]]);
addMon('Magikarp','water',80,[['Tackle',6],['Bubble',7],['Headbutt',8],['Bite',8]]);
addMon('Porygon','normal',40,[['Swift',9],['Psybeam',10],['Hyper Beam',14],['Thunder Shock',9]]);
addMon('Omanyte','rock',35,[['Water Gun',8],['Rock Throw',9],['Bite',8],['Water Pulse',9]]);
addMon('Kabuto','rock',55,[['Scratch',5],['Rock Throw',9],['Slash',10],['Bite',8]]);
addMon('Aerodactyl','rock',130,[['Rock Slide',11],['Wing Attack',8],['Crunch',10],['Hyper Beam',14]]);
addMon('Zapdos','electric',100,[['Thunder',13],['Drill Peck',10],['Air Slash',11],['Thunderbolt',13]]);
addMon('Moltres','fire',90,[['Flamethrower',12],['Wing Attack',9],['Air Slash',11],['Fire Spin',10]]);
addMon('Dragonair','dragon',70,[['Twister',9],['Dragon Rage',8],['Slam',9],['Body Slam',10]]);
addMon('Mew','psychic',100,[['Psychic',13],['Aura Sphere',12],['Shadow Ball',11],['Swift',9]]);
addMon('Exeggutor','grass',55,[['Solar Beam',14],['Confusion',9],['Razor Leaf',11],['Stomp',9]]);
addMon('Weezing','poison',60,[['Sludge Bomb',12],['Smog',6],['Shadow Ball',11],['Tackle',6]]);
addMon('Marowak','ground',45,[['Bonemerang',11],['Bone Club',9],['Earthquake',12],['Headbutt',8]]);
addMon('Cloyster','water',70,[['Ice Beam',12],['Surf',12],['Water Pulse',9],['Slam',9]]);
addMon('Seaking','water',68,[['Waterfall',11],['Water Pulse',9],['Horn Attack',8],['Peck',7]]);
addMon('Lickitung','normal',30,[['Lick',6],['Slam',9],['Body Slam',10],['Headbutt',8]]);
addMon('Horsea','water',60,[['Bubble',7],['Water Gun',8],['Twister',9],['Smog',6]]);
addMon('Umbreon','dark',65,[['Bite',8],['Feint Attack',8],['Crunch',10],['Quick Attack',6]]);
addMon('Steelix','steel',30,[['Iron Tail',10],['Iron Head',10],['Earthquake',13],['Rock Slide',11]]);
addMon('Clefable','fairy',60,[['Moonblast',12],['Double Slap',8],['Body Slam',10],['Pound',6]]);
// ---------- Pokémon #104-203 (added: full Gen1 remainder + Gen2 favourites) ----------
addMon('Caterpie','bug',45,[['Silver Wind',9],['String Shot',4],['Horn Attack',8],['Swift',9]]);
addMon('Metapod','bug',30,[['String Shot',4],['X-Scissor',12],['Body Slam',10],['Fury Attack',8]]);
addMon('Weedle','bug',50,[['String Shot',4],['Pin Missile',8],['Scratch',5],['Swift',9]]);
addMon('Kakuna','bug',35,[['Bug Buzz',11],['X-Scissor',12],['Swift',9],['Quick Attack',6]]);
addMon('Beedrill','poison',75,[['Sludge Bomb',12],['Poison Sting',6],['Wrap',7],['Body Slam',10]]);
addMon('Spearow','flying',70,[['Gust',7],['Air Slash',11],['Slam',9],['Double Slap',8]]);
addMon('Fearow','flying',90,[['Wing Attack',9],['Air Slash',11],['Slam',9],['Fury Attack',8]]);
addMon('Nidorina','poison',56,[['Acid',7],['Sludge',9],['Horn Attack',8],['Fury Swipes',9]]);
addMon('Nidorino','poison',65,[['Poison Powder',6],['Sludge',9],['Quick Attack',6],['Stomp',9]]);
addMon('Paras','bug',25,[['X-Scissor',12],['Pin Missile',8],['Wrap',7],['Horn Attack',8]]);
addMon('Parasect','bug',30,[['Leech Life',7],['Pin Missile',8],['Tackle',6],['Slash',10]]);
addMon('Venonat','bug',45,[['String Shot',4],['Pin Missile',8],['Body Slam',10],['Pound',6]]);
addMon('Diglett','ground',95,[['Earthquake',13],['Bonemerang',11],['Horn Attack',8],['Body Slam',10]]);
addMon('Persian','normal',115,[['Quick Attack',6],['Stomp',9],['Scratch',5],['Wrap',7]]);
addMon('Golduck','water',85,[['Water Cannon',10],['Hydro Pump',14],['Tackle',6],['Horn Attack',8]]);
addMon('Mankey','fighting',70,[['Close Combat',13],['Force Palm',10],['Scratch',5],['Fury Swipes',9]]);
addMon('Poliwhirl','water',60,[['Surf',12],['Bubble',7],['Slam',9],['Swift',9]]);
addMon('Bellsprout','grass',40,[['Solar Beam',14],['Seed Bomb',12],['Slash',10],['Fury Swipes',9]]);
addMon('Weepinbell','grass',55,[['Solar Beam',14],['Vine Whip',8],['Quick Attack',6],['Fury Swipes',9]]);
addMon('Victreebel','grass',70,[['Seed Bomb',12],['Solar Beam',14],['Slam',9],['Stomp',9]]);
addMon('Tentacruel','water',100,[['Surf',12],['Bubble',7],['Scratch',5],['Body Slam',10]]);
addMon('Graveler','rock',35,[['Rock Slide',11],['Rollout',8],['Fury Attack',8],['Slash',10]]);
addMon('Slowpoke','water',15,[['Water Cannon',10],['Surf',12],['Wrap',7],['Fury Swipes',9]]);
addMon('Farfetchd','flying',60,[['Drill Peck',10],['Wing Attack',9],['Slash',10],['Fury Attack',8]]);
addMon('Seel','water',65,[['Water Pulse',9],['Hydro Pump',14],['Double Slap',8],['Pound',6]]);
addMon('Dewgong','ice',70,[['Blizzard',14],['Ice Beam',12],['Quick Attack',6],['Stomp',9]]);
addMon('Grimer','poison',25,[['Poison Powder',6],['Sludge',9],['Tackle',6],['Stomp',9]]);
addMon('Shellder','water',40,[['Surf',12],['Hydro Pump',14],['Tackle',6],['Slash',10]]);
addMon('Drowzee','psychic',90,[['Dream Eater',10],['Psybeam',10],['Quick Attack',6],['Double Slap',8]]);
addMon('Hypno','psychic',96,[['Dream Eater',10],['Psychic',13],['Wrap',7],['Horn Attack',8]]);
addMon('Krabby','water',50,[['Water Cannon',10],['Bubble',7],['Swift',9],['Quick Attack',6]]);
addMon('Kingler','water',75,[['Water Pulse',9],['Surf',12],['Fury Attack',8],['Pound',6]]);
addMon('Voltorb','electric',100,[['Thunder Shock',9],['Thunder Fang',10],['Stomp',9],['Wrap',7]]);
addMon('Electrode','electric',140,[['Thunder Punch',11],['Thunder Shock',9],['Fury Attack',8],['Double Slap',8]]);
addMon('Exeggcute','grass',40,[['Seed Bomb',12],['Vine Whip',8],['Slam',9],['Slash',10]]);
addMon('Koffing','poison',35,[['Sludge Bomb',12],['Sludge',9],['Quick Attack',6],['Tackle',6]]);
addMon('Rhyhorn','ground',25,[['Bonemerang',11],['Earthquake',13],['Wrap',7],['Headbutt',8]]);
addMon('Seadra','water',85,[['Waterfall',11],['Water Gun',8],['Stomp',9],['Double Slap',8]]);
addMon('Goldeen','water',63,[['Waterfall',11],['Hydro Pump',14],['Stomp',9],['Pound',6]]);
addMon('Staryu','water',85,[['Water Gun',8],['Water Pulse',9],['Stomp',9],['Wrap',7]]);
addMon('Omastar','rock',55,[['Rock Slide',11],['Rollout',8],['Horn Attack',8],['Scratch',5]]);
addMon('Kabutops','rock',80,[['Rock Throw',9],['Rock Slide',11],['Swift',9],['Stomp',9]]);
addMon('Ditto','normal',48,[['Headbutt',8],['Stomp',9],['Wrap',7],['Slam',9]]);
addMon('Raticate','normal',97,[['Stomp',9],['Body Slam',10],['Horn Attack',8],['Swift',9]]);
addMon('Wigglytuff','normal',45,[['Swift',9],['Double Slap',8],['Stomp',9],['Headbutt',8]]);
addMon('Gloom','grass',40,[['Razor Leaf',11],['Solar Beam',14],['Swift',9],['Slam',9]]);
addMon('Magneton','electric',70,[['Thunder Fang',10],['Thunder',13],['Pound',6],['Headbutt',8]]);
addMon('Chikorita','grass',45,[['Seed Bomb',12],['Razor Leaf',11],['Fury Swipes',9],['Horn Attack',8]]);
addMon('Cyndaquil','fire',65,[['Flamethrower',12],['Ember',8],['Pound',6],['Double Slap',8]]);
addMon('Totodile','water',50,[['Bubble',7],['Surf',12],['Wrap',7],['Scratch',5]]);
addMon('Sentret','normal',60,[['Double Slap',8],['Headbutt',8],['Scratch',5],['Body Slam',10]]);
addMon('Furret','normal',97,[['Slam',9],['Body Slam',10],['Double Slap',8],['Scratch',5]]);
addMon('Hoothoot','flying',30,[['Air Cutter',9],['Wing Attack',9],['Wrap',7],['Fury Swipes',9]]);
addMon('Noctowl','flying',65,[['Air Slash',11],['Gust',7],['Body Slam',10],['Slam',9]]);
addMon('Ledyba','bug',55,[['Silver Wind',9],['Leech Life',7],['Fury Swipes',9],['Swift',9]]);
addMon('Ledian','bug',55,[['Silver Wind',9],['Bug Buzz',11],['Body Slam',10],['Wrap',7]]);
addMon('Spinarak','bug',40,[['Pin Missile',8],['Silver Wind',9],['Pound',6],['Headbutt',8]]);
addMon('Ariados','bug',52,[['X-Scissor',12],['Fury Cutter',8],['Pound',6],['Tackle',6]]);
addMon('Crobat','poison',130,[['Poison Sting',6],['Sludge Bomb',12],['Swift',9],['Quick Attack',6]]);
addMon('Chinchou','electric',67,[['Thunder Shock',9],['Thunder',13],['Double Slap',8],['Slash',10]]);
addMon('Lanturn','water',67,[['Water Cannon',10],['Surf',12],['Body Slam',10],['Slash',10]]);
addMon('Pichu','electric',60,[['Spark',10],['Thunder Punch',11],['Tackle',6],['Stomp',9]]);
addMon('Cleffa','fairy',35,[['Moonblast',12],['Stomp',9],['Slash',10],['Scratch',5]]);
addMon('Togepi','fairy',20,[['Moonblast',12],['Wrap',7],['Slash',10],['Horn Attack',8]]);
addMon('Togetic','fairy',40,[['Moonblast',12],['Swift',9],['Fury Swipes',9],['Double Slap',8]]);
addMon('Natu','psychic',70,[['Psybeam',10],['Dream Eater',10],['Headbutt',8],['Wrap',7]]);
addMon('Xatu','psychic',95,[['Psyshock',11],['Psybeam',10],['Pound',6],['Slam',9]]);
addMon('Mareep','electric',45,[['Thunder Punch',11],['Thunder',13],['Body Slam',10],['Pound',6]]);
addMon('Flaaffy','electric',55,[['Thunder',13],['Thunder Punch',11],['Scratch',5],['Horn Attack',8]]);
addMon('Ampharos','electric',65,[['Thunder',13],['Thunder Fang',10],['Wrap',7],['Quick Attack',6]]);
addMon('Bellossom','grass',50,[['Vine Whip',8],['Seed Bomb',12],['Pound',6],['Scratch',5]]);
addMon('Marill','water',40,[['Waterfall',11],['Water Gun',8],['Quick Attack',6],['Pound',6]]);
addMon('Azumarill','water',50,[['Water Cannon',10],['Surf',12],['Scratch',5],['Slash',10]]);
addMon('Sudowoodo','rock',30,[['Rock Throw',9],['Rollout',8],['Fury Attack',8],['Wrap',7]]);
addMon('Politoed','water',75,[['Water Pulse',9],['Hydro Pump',14],['Stomp',9],['Slam',9]]);
addMon('Hoppip','grass',70,[['Solar Beam',14],['Absorb',6],['Slam',9],['Tackle',6]]);
addMon('Skiploom','grass',80,[['Vine Whip',8],['Seed Bomb',12],['Double Slap',8],['Swift',9]]);
addMon('Jumpluff','grass',110,[['Vine Whip',8],['Solar Beam',14],['Swift',9],['Stomp',9]]);
addMon('Aipom','normal',85,[['Slash',10],['Double Slap',8],['Tackle',6],['Headbutt',8]]);
addMon('Sunkern','grass',30,[['Razor Leaf',11],['Vine Whip',8],['Body Slam',10],['Slam',9]]);
addMon('Sunflora','grass',30,[['Vine Whip',8],['Solar Beam',14],['Slash',10],['Horn Attack',8]]);
addMon('Yanma','bug',95,[['X-Scissor',12],['String Shot',4],['Tackle',6],['Headbutt',8]]);
addMon('Wooper','ground',15,[['Bone Club',9],['Sand Attack',4],['Pound',6],['Horn Attack',8]]);
addMon('Quagsire','water',35,[['Waterfall',11],['Surf',12],['Slam',9],['Scratch',5]]);
addMon('Espeon','psychic',110,[['Psyshock',11],['Psychic',13],['Slam',9],['Stomp',9]]);
addMon('Murkrow','dark',91,[['Feint Attack',8],['Bite',8],['Slam',9],['Body Slam',10]]);
addMon('Slowking','psychic',30,[['Confusion',9],['Psyshock',11],['Double Slap',8],['Swift',9]]);
addMon('Misdreavus','ghost',85,[['Shadow Ball',11],['Night Shade',9],['Wrap',7],['Scratch',5]]);
addMon('Wobbuffet','psychic',33,[['Dream Eater',10],['Confusion',9],['Body Slam',10],['Swift',9]]);
addMon('Girafarig','psychic',85,[['Confusion',9],['Psybeam',10],['Scratch',5],['Quick Attack',6]]);
addMon('Pineco','bug',15,[['Pin Missile',8],['String Shot',4],['Stomp',9],['Swift',9]]);
addMon('Forretress','steel',40,[['Iron Tail',10],['Metal Claw',9],['Stomp',9],['Slam',9]]);
addMon('Dunsparce','normal',45,[['Fury Swipes',9],['Horn Attack',8],['Quick Attack',6],['Double Slap',8]]);
addMon('Gligar','ground',85,[['Earthquake',13],['Sand Attack',4],['Scratch',5],['Swift',9]]);
addMon('Snubbull','fairy',60,[['Moonblast',12],['Pound',6],['Wrap',7],['Tackle',6]]);
addMon('Granbull','fairy',45,[['Moonblast',12],['Wrap',7],['Tackle',6],['Pound',6]]);
addMon('Qwilfish','poison',85,[['Sludge',9],['Acid',7],['Pound',6],['Wrap',7]]);
addMon('Scizor','steel',65,[['Iron Tail',10],['Iron Head',10],['Slash',10],['Tackle',6]]);
addMon('Shuckle','rock',5,[['Rock Throw',9],['Rock Slide',11],['Swift',9],['Fury Swipes',9]]);
addMon('Heracross','bug',85,[['Bug Buzz',11],['X-Scissor',12],['Pound',6],['Double Slap',8]]);

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
function markShiny(n) { const l = getShinies(); if (!l.includes(n)) { l.push(n); localStorage.setItem('shinies', JSON.stringify(l)); } }

const SAVE_KEYS = ['battleProfile','battleStats','pokeProgress','campaign','shinies','playerTeam','playerPokemon','difficulty','muted','teamSize','oppMode','campMode','seenTutorial','inventory','teamPresets'];
const SAVE_JSON_KEYS = ['battleProfile','battleStats','pokeProgress','campaign','shinies','playerTeam','inventory','teamPresets'];
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

// ---------- item bag (persistent across every battle/mode) + coins ----------
function getInventory() { try { return JSON.parse(localStorage.getItem('inventory')) || { ...BAG_START }; } catch (e) { return { ...BAG_START }; } }
function saveInventory(inv) { localStorage.setItem('inventory', JSON.stringify(inv)); }
function getCoins() { const s = getStats(); return s.coins || 0; }
function addCoins(n) { const s = getStats(); s.coins = (s.coins || 0) + n; saveStats(s); return s.coins; }
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
        presets[name].names.forEach(n => { if (POKEDEX[n]) team.push(n); });
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

// ---------- BATTLE SCREEN ----------
const trainerIntroEl = document.getElementById('trainerIntro');
if (trainerIntroEl) {
  const profile = getProfile();
  const teamNames = JSON.parse(localStorage.getItem('playerTeam') || 'null') || [localStorage.getItem('playerPokemon') || 'Blastoise'];
  const camp = getCampaign(), gym = camp && !camp.endless && GYM_LEADERS[camp.stage];
  const trainer = VS ? { name: 'Player 2', accent: '#e3350d', hat: 'cap' } : gym || OPPONENT_TRAINERS[Math.floor(Math.random() * OPPONENT_TRAINERS.length)];

  function levelToMaxHp(level) { return Math.round(80 + level * 1.6); }
  function makeMon(name, level) {
    const maxHp = levelToMaxHp(level);
    const d = POKEDEX[name], shiny = Math.random() < 1 / 64;   // 1-in-64 recolored sprite
    return { name, level, hp: maxHp, maxHp, ...d, shiny, speed: SPEED[name] || 60, stages: freshStages(),
      front: shiny ? d.front.replace('/anim/normal/', '/anim/shiny/') : d.front,
      back:  shiny ? d.back.replace('/anim/back-normal/', '/anim/back-shiny/') : d.back };
  }
  const prog = getProgress();
  const playerTeam = teamNames.map(n => makeMon(n, VS ? 50 : prog[n] ? prog[n].level : 40));
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
  document.getElementById('trainerText').textContent = VS
    ? `HOT-SEAT BATTLE! Player 1 picks a move, then hands the device to Player 2.${shinyNote}`
    : `${trainer.name} wants to battle! They sent out ${opponent.name}!${campTag}${shinyNote}`;

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
    message: document.getElementById('message'), actions: document.getElementById('actions'), restartButton: document.getElementById('restartButton'),
    switchBtn: document.getElementById('switchBtn'), itemBtn: document.getElementById('itemBtn'), switchPanel: document.getElementById('switchPanel'),
    oppDots: document.getElementById('oppDots'), playerDots: document.getElementById('playerDots'), handoffBtn: document.getElementById('handoffBtn')
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
    if (player.shiny && !VS) markShiny(player.name);
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
    const eff = typeEffectiveness(mt, defender.type);
    const crit = Math.random() < 1 / 12;
    const levelFactor = 0.6 + attacker.level / 100;
    const stab = mt === attacker.type ? 1.5 : 1;
    const stages = stageMult(attacker.stages.atk) / stageMult(defender.stages.def);
    const dmg = eff === 0 ? 0 : Math.max(1, Math.round(move.power * levelFactor * eff * stab * stages * weatherMult(mt) * (crit ? 1.5 : 1) * (attacker.status === 'brn' ? 0.5 : 1)));
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
  const expDmg = (m, a, d) => (m.power ? m.power * typeEffectiveness(moveType(m), d.type) * (moveType(m) === a.type ? 1.5 : 1) : 0);
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
    if (then) setTimeout(then, 1300); else roundEnd();
  }
  function foeAct(plan, then) {
    if (plan.kind === 'switch') {
      opponent.stages = freshStages(); opponent = oppTeam[plan.i]; showOpp();
      setMessage(`The rival withdrew and sent out ${opponent.name}!`);
      return setTimeout(then || roundEnd, 1300);
    }
    if (plan.kind === 'potion') {
      foePotions--; opponent.hp = Math.min(opponent.maxHp, opponent.hp + 50); updateHP('opp');
      setMessage(`The rival used a Potion on ${opponent.name}!`);
      return setTimeout(then || roundEnd, 1300);
    }
    attack(opponent, player, plan.move, els.oppSprite, els.playerSprite, 'anim-atk-o', !!then);
    if (player.hp <= 0) return playerFainted();
    if (opponent.hp <= 0) return foeFainted();
    if (then) setTimeout(then, 1300); else roundEnd();
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
    }, 700);
    els.restartButton.hidden = false;
  }

  // ---------- team logic: fainting and switching ----------
  function foeFainted() {
    if (oppTeam.every(p => p.hp <= 0)) return endGame(true, `${opponent.name} fainted. ${VS ? 'Player 1 wins!' : 'You win!'}`);
    setTimeout(() => { animate(els.oppSprite, 'anim-faint'); SFX.faint(); setMessage(`${opponent.name} fainted!`); }, 700);
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
    setTimeout(() => { animate(els.playerSprite, 'anim-faint'); SFX.faint(); setMessage(`${player.name} fainted! Pick your next Pokémon.`); }, 700);
    setTimeout(() => openSwitch(true), 1700);
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
      if (afterForced) { const f = afterForced; afterForced = null; return setTimeout(f, 1000); }
      if (VS) { vsChoice = null; vsStage = null; setMessage(`Go, ${player.name}! Player 1: choose a move.`); }
      return disableActions(false);
    }
    disableActions(true);
    setTimeout(opponentTurn, 1000);
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
    saveInventory(bag);
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
    els.restartButton.hidden = true;
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
      <span style="font-size:11px;">${profile.githubUsername || (cls ? cls.name : 'Trainer')}</span>`;
  }

  totalWinsEl.textContent = stats.wins;
  document.getElementById('bestWave').textContent = stats.bestWave || 0;
  document.getElementById('coinCount').textContent = `${getCoins()} COINS`;

  // ---------- shop: spend coins on items and a rare candy ----------
  const SHOP_ITEMS = [
    { key: 'potion', label: 'Potion', desc: '+50 HP in battle', cost: 20 },
    { key: 'superpotion', label: 'Super Potion', desc: '+100 HP in battle', cost: 45 },
    { key: 'fullheal', label: 'Full Heal', desc: 'Cures status in battle', cost: 30 }
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
        inv2[it.key] = (inv2[it.key] || 0) + 1;
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
    const known = Object.keys(prog).length ? Object.keys(prog) : Object.keys(POKEDEX).slice(0, 1);
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
  const prog = getProgress(), byMon = getStats().byMon || {}, shinySet = new Set(getShinies());
  const search = document.getElementById('dexSearch'), typeSel = document.getElementById('dexType');
  const types = [...new Set(Object.values(POKEDEX).map(p => p.type))].sort();
  typeSel.innerHTML = '<option value="">All types</option>' + types.map(t => `<option>${t}</option>`).join('');
  function renderDex() {
    const q = search.value.trim().toLowerCase();
    const list = Object.entries(POKEDEX).filter(([n, p]) => n.toLowerCase().includes(q) && (!typeSel.value || p.type === typeSel.value));
    dexGrid.innerHTML = list.map(([n, p]) => {
      const rec = byMon[n] || { wins: 0, losses: 0 }, tot = rec.wins + rec.losses;
      return `<div class="dex-card"><img src="${p.front}" alt="${n}" onerror="handleSpriteError(this)">
        <div class="dex-name">${n}${shinySet.has(n) ? ' ★' : ''}${typeBadge(p.type)}</div>
        <div>Lv ${prog[n] ? prog[n].level : '40 (base)'}</div>
        <div>${tot ? `${rec.wins}W / ${rec.losses}L (${Math.round((rec.wins / tot) * 100)}%)` : 'No battles yet'}</div>
        <ul class="dex-moves">${p.moves.map(m => `<li>${m.name} ${typeBadge(moveType(m))}<span>${m.power || 'STAT'}</span></li>`).join('')}</ul></div>`;
    }).join('') || '<p style="font-size:9px;">No Pokémon match.</p>';
    document.getElementById('dexCount').textContent = `${list.length}/${Object.keys(POKEDEX).length} SHOWN`;
  }
  search.addEventListener('input', renderDex);
  typeSel.addEventListener('change', renderDex);
  renderDex();
}

// ---------- install as an app (offline support) ----------
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
