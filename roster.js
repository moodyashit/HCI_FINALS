// Roster data: POKEDEX, speeds, dual types, evolution lines and base stats (loaded before index.js)
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

// ---------- Roster expansion: +500 Pokémon (Gen 2-6), generated from compact lists ----------
// Moves are built from per-type pools (STAB x2, a Normal move, a coverage move); '*' marks legendaries. Gen 6 uses HOME sprites.
(() => {
  const POOL = {
    normal:'Pound6,Tackle6,Double Slap8,Headbutt8,Stomp9,Swift9,Slash10,Body Slam10', fire:'Ember8,Flame Wheel9,Fire Fang9,Fire Punch10,Flame Burst10,Flamethrower11',
    water:'Bubble6,Water Gun8,Water Pulse10,Waterfall10,Surf12,Hydro Pump14', grass:'Absorb6,Vine Whip8,Razor Leaf11,Seed Bomb11,Solar Beam14',
    electric:'Thunder Shock7,Spark8,Thunder Fang9,Thunder Punch10,Thunderbolt12,Thunder14', ice:'Powder Snow7,Ice Punch10,Ice Beam12,Blizzard14',
    fighting:'Karate Chop8,Low Kick8,Seismic Toss9,Cross Chop12,Aura Sphere12,Close Combat13', poison:'Poison Sting6,Acid7,Sludge9,Poison Jab10,Sludge Bomb12',
    ground:'Bone Club8,Bonemerang9,Earthquake13', flying:'Peck7,Gust7,Wing Attack8,Air Cutter9,Air Slash11,Drill Peck11',
    psychic:'Confusion9,Psybeam10,Psyshock11,Psychic13', bug:'Fury Cutter6,Leech Life8,Silver Wind9,Bug Buzz11,X-Scissor12',
    rock:'Rollout8,Rock Throw9,Rock Slide11', ghost:'Lick6,Night Shade9,Shadow Ball11', dragon:'Twister8,Dragon Rage9,Dragon Claw11,Outrage13',
    dark:'Bite8,Feint Attack8,Crunch10', steel:'Metal Claw9,Iron Tail10,Iron Head10', fairy:'Moonblast12,Pound6,Swift9,Moonblast12'
  };
  let ERA = 'Gen 2-5';
  const P = {}; Object.entries(POOL).forEach(([t, s]) => { P[t] = s.split(',').map(x => { const m = x.match(/^(.*?)(\d+)$/); return [m[1], +m[2]]; }); });
  const types = Object.keys(P);
  const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
  const pick = (t, i) => P[t][Math.min(P[t].length - 1, Math.max(0, i))];
  const add = (type, list, hd) => list.split(' ').forEach(raw => {
    const legend = raw.endsWith('*'), name0 = raw.replace('*', ''), name = name0[0].toUpperCase() + name0.slice(1);
    if (POKEDEX[name]) return;
    const h = hash(name), tier = legend ? 4 : h % 3, id = name.toLowerCase();
    const cov = types[(h >>> 3) % types.length], nrm = pick('normal', (h >>> 5) % 6);
    const mv = [pick(type, tier + 1), pick(type, tier - 1 + (h >>> 7) % 2), nrm, pick(cov, tier)];
    const seen = new Set(); const moves = mv.filter(m => !seen.has(m[0]) && seen.add(m[0]));
    while (moves.length < 4) { const m = pick('normal', moves.length); if (!seen.has(m[0])) { seen.add(m[0]); moves.push(m); } else moves.push(pick('normal', (h >>> 9) % 8 + moves.length)); }
    POKEDEX[name] = { type, era: ERA, legend, moves: moves.slice(0, 4).map(([n, power]) => ({ name: n, power })),
      front: hd ? `https://img.pokemondb.net/sprites/home/normal/${id}.png` : `https://img.pokemondb.net/sprites/black-white/anim/normal/${id}.gif`,
      back:  hd ? `https://img.pokemondb.net/sprites/home/normal/${id}.png` : `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${id}.gif` };
    SPEED[name] = 30 + h % 85 + (legend ? 30 : 0);
  });
  const G = [
    ['normal','sentret furret hoothoot noctowl aipom ambipom teddiursa ursaring miltank blissey stantler smeargle porygon2 zigzagoon linoone slakoth vigoroth slaking whismur loudred exploud skitty delcatty spinda swablu kecleon zangoose castform bidoof bibarel buneary lopunny glameow purugly chatot porygon-z munchlax lickilicky patrat watchog lillipup herdier stoutland minccino cinccino audino bouffalant rufflet braviary regigigas* arceus* meloetta* azurill togepi'],
    ['fire','cyndaquil quilava typhlosion slugma magcargo houndour houndoom entei* torchic combusken blaziken numel camerupt torkoal chimchar monferno infernape magmortar heatran* ho-oh* pansear simisear tepig pignite emboar darumaka darmanitan litwick lampent chandelure heatmor victini* reshiram* larvesta volcarona'],
    ['water','totodile croconaw feraligatr chinchou lanturn marill azumarill politoed wooper quagsire slowking remoraid octillery mantine kingdra suicune* mudkip marshtomp swampert lotad lombre ludicolo wingull pelipper carvanha sharpedo wailmer wailord corphish crawdaunt feebas milotic spheal sealeo walrein clamperl huntail gorebyss relicanth luvdisc kyogre* piplup prinplup empoleon buizel floatzel shellos gastrodon finneon lumineon mantyke palkia* phione manaphy* oshawott dewott samurott panpour simipour tympole palpitoad seismitoad tirtouga carracosta ducklett swanna frillish jellicent alomomola keldeo* corsola'],
    ['grass','chikorita bayleef meganium hoppip skiploom jumpluff sunkern sunflora treecko grovyle sceptile seedot nuzleaf shiftry shroomish breloom roselia cacnea cacturne tropius turtwig grotle torterra budew roserade cherubi cherrim carnivine snover abomasnow leafeon tangrowth shaymin* snivy servine serperior pansage simisage cottonee whimsicott petilil lilligant maractus foongus amoonguss deerling sawsbuck virizion* ferroseed ferrothorn'],
    ['electric','pichu elekid electrike manectric plusle minun raikou* shinx luxio luxray pachirisu electivire blitzle zebstrika joltik galvantula emolga tynamo eelektrik eelektross thundurus* zekrom* stunfisk rotom'],
    ['ice','swinub piloswine delibird snorunt glalie regice* froslass mamoswine glaceon vanillite vanillish vanilluxe cubchoo beartic cryogonal kyurem* smoochum sneasel weavile'],
    ['fighting','tyrogue hitmontop makuhita hariyama meditite medicham riolu toxicroak gallade timburr gurdurr conkeldurr throh sawk mienfoo mienshao cobalion* terrakion* scraggy scrafty croagunk'],
    ['poison','gulpin swalot seviper skorupi drapion stunky skuntank trubbish garbodor'],
    ['ground','phanpy donphan trapinch vibrava flygon gible gabite garchomp hippopotas hippowdon drilbur excadrill sandile krokorok krookodile groudon* landorus* golett golurk rhyperior rhydon nosepass'],
    ['flying','natu xatu togetic togekiss skarmory taillow swellow starly staravia staraptor pidove tranquill unfezant woobat swoobat vullaby mandibuzz lugia* tornadus* yanma yanmega altaria'],
    ['psychic','unown ralts kirlia gardevoir spoink grumpig lunatone solrock baltoy claydol chimecho beldum metang metagross latias* latios* jirachi* deoxys* bronzor bronzong uxie* mesprit* azelf* cresselia* munna musharna sigilyph gothita gothorita gothitelle solosis duosion reuniclus elgyem beheeyem'],
    ['bug','ledyba ledian spinarak ariados wurmple silcoon beautifly cascoon dustox surskit masquerain nincada ninjask shedinja volbeat illumise kricketot kricketune burmy mothim combee vespiquen sewaddle swadloon leavanny venipede whirlipede scolipede karrablast escavalier shelmet accelgor genesect* dwebble crustle'],
    ['rock','sudowoodo larvitar pupitar tyranitar probopass lileep cradily anorith armaldo regirock* cranidos rampardos shieldon bastiodon roggenrola boldore gigalith archen archeops'],
    ['ghost','shuppet banette duskull dusclops dusknoir drifloon drifblim mismagius spiritomb giratina* yamask cofagrigus'],
    ['dragon','bagon shelgon salamence rayquaza* axew fraxure haxorus druddigon deino zweilous hydreigon dialga* latias'],
    ['dark','murkrow honchkrow poochyena mightyena sableye absol purrloin liepard zorua zoroark pawniard bisharp darkrai* umbreon'],
    ['steel','mawile aron lairon aggron registeel* klink klang klinklang durant magnezone'],
    ['fairy','snubbull cleffa igglybuff']
  ];
  G.forEach(([t, l]) => add(t, l, false));
  ERA = 'Gen 6';
  [['grass','chespin quilladin chesnaught skiddo gogoat phantump trevenant'],['fire','fennekin braixen delphox litleo pyroar fletchinder talonflame volcanion*'],
   ['water','froakie frogadier greninja clauncher clawitzer binacle barbaracle'],['fighting','pancham pangoro hawlucha'],['normal','bunnelby diggersby fletchling furfrou'],
   ['electric','helioptile heliolisk dedenne'],['ice','bergmite avalugg'],['rock','tyrunt tyrantrum amaura aurorus carbink diancie*'],['poison','skrelp dragalge'],
   ['bug','scatterbug spewpa vivillon'],['psychic','espurr meowstic'],['dark','inkay malamar yveltal*'],['ghost','pumpkaboo gourgeist'],['steel','honedge doublade aegislash klefki'],
   ['fairy','flabebe floette florges spritzee aromatisse swirlix slurpuff sylveon xerneas*'],['dragon','goomy sliggoo goodra noibat noivern zygarde*'],['psychic','hoopa*']
  ].forEach(([t, l]) => add(t, l, true));
  ERA = 'Gen 7-9';
  [['grass','rowlet dartrix decidueye fomantis lurantis morelull shiinotic bounsweet steenee tsareena comfey dhelmise grookey thwackey rillaboom gossifleur eldegoss applin flapple appletun sprigatito floragato meowscarada smoliv dolliv arboliva bramblin brambleghast toedscool toedscruel capsakid scovillain kartana zarude* poltchageist sinistcha ogerpon* hydrapple dipplin iron-leaves wo-chien* tapu-bulu*'],
   ['fire','litten torracat incineroar salandit salazzle turtonator scorbunny raboot cinderace sizzlipede centiskorch fuecoco crocalor skeledirge charcadet armarouge ceruledge blacephalon* gouging-fire* iron-moth chi-yu*'],
   ['water','popplio brionne primarina wishiwashi mareanie toxapex dewpider araquanid wimpod golisopod pyukumuku bruxish sobble drizzile inteleon chewtle drednaw cramorant arrokuda barraskewda quaxly quaxwell quaquaval finizen palafin veluza dondozo tatsugiri wiglett wugtrio basculegion dracovish arctovish'],
   ['electric','togedemaru xurkitree* zeraora* yamper boltund toxel toxtricity pincurchin dracozolt arctozolt regieleki* morpeko tadbulb bellibolt wattrel kilowattrel pawmi pawmo pawmot tapu-koko* miraidon* raging-bolt*'],
   ['normal','yungoos gumshoos stufful bewear oranguru passimian komala type-null* silvally* pikipek trumbeak toucannon skwovet greedent wooloo dubwool lechonk oinkologne tandemaus maushold fidough dachsbun maschiff mabosstiff cyclizar dudunsparce farigiraf wyrdeer indeedee'],
   ['bug','grubbin charjabug vikavolt cutiefly ribombee blipbug dottler orbeetle tarountula spidops nymble lokix rellor rabsca pheromosa* buzzwole* kleavor'],
   ['fighting','crabrawler crabominable marshadow* clobbopus grapploct falinks kubfu* urshifu* sneasler koraidon* iron-hands zamazenta*'],
   ['rock','rockruff lycanroc minior stonjourner carkol coalossal nacli naclstack garganacl klawf glimmet glimmora iron-boulder iron-thorns'],
   ['ground','mudbray mudsdale sandygast palossand silicobra sandaconda iron-treads great-tusk* ursaluna runerigus ting-lu*'],
   ['ghost','mimikyu polteageist sinistea spectrier* greavard houndstone gimmighoul flutter-mane* cursola calyrex*'],
   ['fairy','milcery alcremie enamorus* tinkatink tinkatuff tinkaton iron-valiant scream-tail tapu-fini* tapu-lele* zacian*'],
   ['dark','nickit thievul kingambit impidimp morgrem grimmsnarl obstagoon chien-pao* iron-jugulis guzzlord* overqwil'],
   ['poison','shroodle grafaiai nihilego* naganadel poipole clodsire okidogi* pecharunt* munkidori* eternatus*'],
   ['psychic','cosmog cosmoem lunala* solgaleo* necrozma* hatenna hattrem hatterene espathra mr-rime brute-bonnet'],
   ['flying','rookidee corvisquire corviknight squawkabilly flamigo bombirdier oricorio drampa'],
   ['dragon','jangmo-o hakamo-o kommo-o dreepy drakloak dragapult frigibax arctibax baxcalibur regidrago* wyrdeer'],
   ['steel','meltan melmetal magearna* celesteela* stakataka* cufant copperajah perrserker duraludon archaludon gholdengo iron-crown* orthworm sirfetchd iron-bundle'],
   ['ice','snom frosmoth eiscue glastrier* cetoddle cetitan'],
   ['steel','varoom revavroom'],['psychic','flittle'],['fighting','annihilape'],['dark','fezandipiti*'],['normal','terapagos*'],['rock','rolycoly'],['water','basculin']
  ].forEach(([t, l]) => add(t, l, true));
  // Stragglers found by checking the roster against the National Pokédex list (Gen 1-5 use animated sprites, Gen 9 uses HOME)
  ERA = 'Gen 1-2';
  [['poison','nidoran-f nidoran-m nidorina nidorino'],['flying','farfetchd pidgeotto'],['fire','magby'],['psychic','mr-mime celebi*']].forEach(([t, l]) => add(t, l, false));
  ERA = 'Gen 2-5';
  [['water','barboach whiscash'],['psychic','wynaut mime-jr chingling'],['rock','bonsly'],['normal','happiny'],['ground','gliscor'],['bug','wormadam']].forEach(([t, l]) => add(t, l, false));
  ERA = 'Gen 7-9';
  [['bug','slither-wing*'],['electric','sandy-shocks*'],['dragon','roaring-moon*'],['water','walking-wake*']].forEach(([t, l]) => add(t, l, true));
})();


// ---------- tags, dual types, evolution lines, base stats, sprite slug fixes ----------
['Mewtwo','Mew','Articuno','Zapdos','Moltres'].forEach(n => { if (POKEDEX[n]) POKEDEX[n].legend = true; });
Object.values(POKEDEX).forEach(p => { p.era = p.era || 'Gen 1-2'; p.legend = !!p.legend; });

const DUAL = {
  flying:'Charizard Gyarados Dragonite Butterfree Zubat Golbat Crobat Scyther Aerodactyl Moltres Articuno Zapdos Doduo Dodrio Hoothoot Noctowl Togetic Togekiss Skarmory Altaria Salamence Yanma Yanmega Talonflame Noivern Masquerain Ninjask Tropius Mantine Lugia Ho-oh Pelipper Landorus Tornadus Rayquaza Swablu Delibird Vullaby Mandibuzz Woobat Swoobat Archeops Sigilyph Hoppip Skiploom Jumpluff Natu Xatu Murkrow Honchkrow Gligar Wingull Fletchinder Rufflet Braviary Drifloon Drifblim Hawlucha Yveltal Vespiquen Combee',
  poison:'Bulbasaur Ivysaur Venusaur Oddish Gloom Vileplume Bellsprout Weepinbell Victreebel Beedrill Venomoth Spinarak Ariados Tentacool Tentacruel Roselia Budew Roserade Nidoking Nidoqueen Skrelp Dragalge Qwilfish Mareanie Toxapex Nihilego Glimmet Glimmora Gengar Haunter Gastly Toxicroak Croagunk Drapion Skorupi Amoonguss Foongus',
  ground:'Nidoking Nidoqueen Rhydon Rhyhorn Rhyperior Golem Geodude Graveler Onix Swampert Marshtomp Quagsire Wooper Gastrodon Shellos Golurk Golett Runerigus Camerupt Numel Mamoswine Piloswine Swinub Flygon Excadrill Drilbur Steelix Stunfisk',
  psychic:'Starmie Slowbro Slowpoke Slowking Exeggcute Exeggutor Jynx Metagross Metang Beldum Claydol Baltoy Lunatone Solrock Bronzong Bronzor Delphox Medicham Meditite Solgaleo Latias Latios',
  fighting:'Poliwrath Infernape Monferno Blaziken Combusken Emboar Pignite Breloom Heracross Gallade Keldeo Terrakion Virizion Cobalion Toxicroak Croagunk Buzzwole Lucario Riolu',
  steel:'Magnemite Magneton Magnezone Empoleon Prinplup Scizor Forretress Pineco Probopass Bastiodon Shieldon Genesect Ferrothorn Ferroseed Kartana Solgaleo Aggron Lairon Aron Durant Mawile Tinkaton Tinkatuff Tinkatink Lucario',
  dark:'Tyranitar Larvitar Pupitar Sharpedo Carvanha Crawdaunt Corphish Cacturne Cacnea Drapion Skorupi Krookodile Krokorok Sandile Spiritomb Sableye Sneasel Weavile Kingambit Bisharp Pawniard Malamar Inkay',
  ghost:'Rotom Shedinja Dragapult Dreepy Drakloak Gholdengo Aegislash Honedge Doublade Golett Golurk Runerigus Froslass Decidueye Dartrix Rowlet Trevenant Phantump Gourgeist Pumpkaboo',
  fairy:'Ralts Kirlia Gardevoir Hatenna Hattrem Hatterene Mimikyu Mawile Marill Azumarill Azurill Impidimp Morgrem Grimmsnarl Dedenne Clefairy Cleffa',
  ice:'Jynx Lapras Cloyster Shellder Dewgong Seel Abomasnow Snover Baxcalibur Arctibax Frigibax Mr-rime Froslass',
  water:'Omanyte Omastar Kabuto Kabutops Tirtouga Carracosta Relicanth Corsola Barbaracle Binacle Ludicolo Lotad Lombre',
  grass:'Lileep Cradily Paras Parasect Leavanny Sewaddle Swadloon Trevenant Phantump Gourgeist Pumpkaboo',
  bug:'Anorith Armaldo Durant',
  rock:'Shuckle Crustle Dwebble Kleavor Magcargo Slugma',
  dragon:'Kingdra Flygon Vibrava Deino Zweilous Hydreigon Naganadel Hydrapple Dipplin Ampharos Miraidon Latias Latios',
  fire:'Houndoom Houndour Litwick Lampent Chandelure Volcarona Larvesta',
  electric:'Joltik Galvantula Vikavolt Charjabug'
};
Object.entries(DUAL).forEach(([t2, l]) => l.split(' ').forEach(n => { const p = POKEDEX[n]; if (p && p.type !== t2 && !p.type2) p.type2 = t2; }));

// Evolution lines (first evolution at Lv 45 / 2-stage lines at Lv 50, second evolution at Lv 60)
const EVOLVE = {}, EVOLVES_FROM = {}, STAGE = {};
('Pichu>Pikachu>Raichu Bulbasaur>Ivysaur>Venusaur Charmander>Charmeleon>Charizard Squirtle>Wartortle>Blastoise Caterpie>Metapod>Butterfree Weedle>Kakuna>Beedrill Pidgey>Pidgeotto>Pidgeot Rattata>Raticate Spearow>Fearow Ekans>Arbok Sandshrew>Sandslash Cleffa>Clefairy>Clefable Vulpix>Ninetales Igglybuff>Jigglypuff>Wigglytuff Zubat>Golbat>Crobat Oddish>Gloom>Vileplume Paras>Parasect Venonat>Venomoth Diglett>Dugtrio Meowth>Persian Psyduck>Golduck Mankey>Primeape Growlithe>Arcanine Poliwag>Poliwhirl>Poliwrath Abra>Kadabra>Alakazam Machop>Machoke>Machamp Bellsprout>Weepinbell>Victreebel Tentacool>Tentacruel Geodude>Graveler>Golem Ponyta>Rapidash Slowpoke>Slowbro Magnemite>Magneton>Magnezone Doduo>Dodrio Seel>Dewgong Grimer>Muk Shellder>Cloyster Gastly>Haunter>Gengar Onix>Steelix Drowzee>Hypno Krabby>Kingler Voltorb>Electrode Exeggcute>Exeggutor Cubone>Marowak Koffing>Weezing Rhyhorn>Rhydon>Rhyperior Horsea>Seadra>Kingdra Goldeen>Seaking Staryu>Starmie Magikarp>Gyarados Porygon>Porygon2>Porygon-z Omanyte>Omastar Kabuto>Kabutops Dratini>Dragonair>Dragonite Smoochum>Jynx Elekid>Electabuzz>Electivire Magby>Magmar>Magmortar Munchlax>Snorlax '+
 'Chikorita>Bayleef>Meganium Cyndaquil>Quilava>Typhlosion Totodile>Croconaw>Feraligatr Sentret>Furret Hoothoot>Noctowl Ledyba>Ledian Spinarak>Ariados Chinchou>Lanturn Togepi>Togetic>Togekiss Natu>Xatu Mareep>Flaaffy>Ampharos Marill>Azumarill Hoppip>Skiploom>Jumpluff Aipom>Ambipom Sunkern>Sunflora Wooper>Quagsire Murkrow>Honchkrow Snubbull>Granbull Pineco>Forretress Teddiursa>Ursaring Slugma>Magcargo Swinub>Piloswine>Mamoswine Remoraid>Octillery Houndour>Houndoom Phanpy>Donphan Larvitar>Pupitar>Tyranitar Sneasel>Weavile Yanma>Yanmega Scyther>Scizor Gligar>Gliscor '+
 'Treecko>Grovyle>Sceptile Torchic>Combusken>Blaziken Mudkip>Marshtomp>Swampert Zigzagoon>Linoone Wurmple>Silcoon>Beautifly Lotad>Lombre>Ludicolo Seedot>Nuzleaf>Shiftry Wingull>Pelipper Ralts>Kirlia>Gardevoir Shroomish>Breloom Slakoth>Vigoroth>Slaking Nincada>Ninjask Whismur>Loudred>Exploud Makuhita>Hariyama Aron>Lairon>Aggron Meditite>Medicham Electrike>Manectric Budew>Roselia>Roserade Gulpin>Swalot Carvanha>Sharpedo Wailmer>Wailord Numel>Camerupt Trapinch>Vibrava>Flygon Cacnea>Cacturne Swablu>Altaria Corphish>Crawdaunt Baltoy>Claydol Lileep>Cradily Anorith>Armaldo Feebas>Milotic Shuppet>Banette Duskull>Dusclops>Dusknoir Snorunt>Glalie Spheal>Sealeo>Walrein Clamperl>Huntail Bagon>Shelgon>Salamence Beldum>Metang>Metagross Spoink>Grumpig Poochyena>Mightyena Skitty>Delcatty Taillow>Swellow '+
 'Turtwig>Grotle>Torterra Chimchar>Monferno>Infernape Piplup>Prinplup>Empoleon Starly>Staravia>Staraptor Bidoof>Bibarel Kricketot>Kricketune Shinx>Luxio>Luxray Cranidos>Rampardos Shieldon>Bastiodon Buizel>Floatzel Cherubi>Cherrim Shellos>Gastrodon Buneary>Lopunny Glameow>Purugly Stunky>Skuntank Bronzor>Bronzong Gible>Gabite>Garchomp Riolu>Lucario Hippopotas>Hippowdon Skorupi>Drapion Croagunk>Toxicroak Finneon>Lumineon Snover>Abomasnow Drifloon>Drifblim '+
 'Snivy>Servine>Serperior Tepig>Pignite>Emboar Oshawott>Dewott>Samurott Patrat>Watchog Lillipup>Herdier>Stoutland Purrloin>Liepard Pansage>Simisage Pansear>Simisear Panpour>Simipour Munna>Musharna Pidove>Tranquill>Unfezant Blitzle>Zebstrika Roggenrola>Boldore>Gigalith Timburr>Gurdurr>Conkeldurr Tympole>Palpitoad>Seismitoad Sewaddle>Swadloon>Leavanny Venipede>Whirlipede>Scolipede Cottonee>Whimsicott Petilil>Lilligant Sandile>Krokorok>Krookodile Darumaka>Darmanitan Dwebble>Crustle Scraggy>Scrafty Zorua>Zoroark Minccino>Cinccino Gothita>Gothorita>Gothitelle Solosis>Duosion>Reuniclus Ducklett>Swanna Vanillite>Vanillish>Vanilluxe Deerling>Sawsbuck Foongus>Amoonguss Frillish>Jellicent Joltik>Galvantula Ferroseed>Ferrothorn Klink>Klang>Klinklang Tynamo>Eelektrik>Eelektross Litwick>Lampent>Chandelure Axew>Fraxure>Haxorus Cubchoo>Beartic Mienfoo>Mienshao Golett>Golurk Pawniard>Bisharp Rufflet>Braviary Vullaby>Mandibuzz Deino>Zweilous>Hydreigon Larvesta>Volcarona Woobat>Swoobat Drilbur>Excadrill Tirtouga>Carracosta Archen>Archeops Trubbish>Garbodor Yamask>Cofagrigus Elgyem>Beheeyem '+
 'Chespin>Quilladin>Chesnaught Fennekin>Braixen>Delphox Froakie>Frogadier>Greninja Bunnelby>Diggersby Fletchling>Fletchinder>Talonflame Litleo>Pyroar Pancham>Pangoro Espurr>Meowstic Honedge>Doublade>Aegislash Spritzee>Aromatisse Swirlix>Slurpuff Inkay>Malamar Binacle>Barbaracle Skrelp>Dragalge Clauncher>Clawitzer Helioptile>Heliolisk Tyrunt>Tyrantrum Amaura>Aurorus Goomy>Sliggoo>Goodra Phantump>Trevenant Pumpkaboo>Gourgeist Bergmite>Avalugg Noibat>Noivern Scatterbug>Spewpa>Vivillon Flabebe>Floette>Florges Skiddo>Gogoat '+
 'Rowlet>Dartrix>Decidueye Litten>Torracat>Incineroar Popplio>Brionne>Primarina Pikipek>Trumbeak>Toucannon Yungoos>Gumshoos Grubbin>Charjabug>Vikavolt Crabrawler>Crabominable Cutiefly>Ribombee Rockruff>Lycanroc Mareanie>Toxapex Mudbray>Mudsdale Dewpider>Araquanid Fomantis>Lurantis Morelull>Shiinotic Salandit>Salazzle Stufful>Bewear Bounsweet>Steenee>Tsareena Wimpod>Golisopod Sandygast>Palossand Jangmo-o>Hakamo-o>Kommo-o Grookey>Thwackey>Rillaboom Scorbunny>Raboot>Cinderace Sobble>Drizzile>Inteleon Skwovet>Greedent Rookidee>Corvisquire>Corviknight Blipbug>Dottler>Orbeetle Nickit>Thievul Gossifleur>Eldegoss Wooloo>Dubwool Chewtle>Drednaw Yamper>Boltund Rolycoly>Carkol>Coalossal Applin>Flapple Silicobra>Sandaconda Arrokuda>Barraskewda Toxel>Toxtricity Sizzlipede>Centiskorch Clobbopus>Grapploct Hatenna>Hattrem>Hatterene Impidimp>Morgrem>Grimmsnarl Cufant>Copperajah Dreepy>Drakloak>Dragapult Sprigatito>Floragato>Meowscarada Fuecoco>Crocalor>Skeledirge Quaxly>Quaxwell>Quaquaval Lechonk>Oinkologne Tarountula>Spidops Nymble>Lokix Pawmi>Pawmo>Pawmot Tandemaus>Maushold Fidough>Dachsbun Smoliv>Dolliv>Arboliva Nacli>Naclstack>Garganacl Charcadet>Armarouge Tadbulb>Bellibolt Wattrel>Kilowattrel Maschiff>Mabosstiff Shroodle>Grafaiai Bramblin>Brambleghast Toedscool>Toedscruel Tinkatink>Tinkatuff>Tinkaton Wiglett>Wugtrio Finizen>Palafin Varoom>Revavroom Glimmet>Glimmora Greavard>Houndstone Frigibax>Arctibax>Baxcalibur Gimmighoul>Gholdengo Cetoddle>Cetitan Flittle>Espathra Rellor>Rabsca Capsakid>Scovillain Nidoran-f>Nidorina>Nidoqueen Nidoran-m>Nidorino>Nidoking Bonsly>Sudowoodo Mime-jr>Mr-mime Happiny>Chansey>Blissey Chingling>Chimecho Wynaut>Wobbuffet Barboach>Whiscash Burmy>Wormadam').split(' ').forEach(line => {
  const c = line.split('>').filter(n => POKEDEX[n]);
  c.forEach((n, i) => { STAGE[n] = { i, len: c.length }; if (i < c.length - 1) { EVOLVE[n] = { to: c[i + 1], at: c.length === 2 ? 50 : i === 0 ? 45 : 60 }; EVOLVES_FROM[c[i + 1]] = n; } });
});

// Base stats: derived from evolution stage / legendary status, jittered per species. Speed keeps the existing SPEED table.
(() => {
  const hash = s => { let h = 11; for (const c of s) h = (h * 33 + c.charCodeAt(0)) >>> 0; return h; };
  Object.entries(POKEDEX).forEach(([n, p]) => {
    const st = STAGE[n], h = hash(n), spe = SPEED[n] || 60;
    let bst = p.legend ? 600 : st ? (st.i === st.len - 1 ? 500 : st.i === 0 ? 330 : 420) : 420 + h % 90;
    bst += (h >>> 5) % 50 - 25;
    const rest = Math.max(120, bst - spe), w = [0.30 + (h % 9) / 100, 0.38 + ((h >>> 3) % 9) / 100];
    const hp = Math.round(rest * w[0]), atk = Math.round(rest * w[1]);
    p.bs = { hp, atk, def: Math.max(20, rest - hp - atk), spe };
  });
})();

// The sprite site uses form-suffixed filenames for these
const SLUG_FIX = { Meowstic:'meowstic-male', Aegislash:'aegislash-shield', Pumpkaboo:'pumpkaboo-average', Gourgeist:'gourgeist-average', Lycanroc:'lycanroc-midday',
  Oricorio:'oricorio-baile', Wishiwashi:'wishiwashi-solo', Toxtricity:'toxtricity-amped', Indeedee:'indeedee-male', Basculegion:'basculegion-male', Urshifu:'urshifu-single-strike',
  Morpeko:'morpeko-full-belly', Eiscue:'eiscue-ice', Darmanitan:'darmanitan-standard', Deoxys:'deoxys-normal', Keldeo:'keldeo-ordinary', Meloetta:'meloetta-aria',
  Tornadus:'tornadus-incarnate', Thundurus:'thundurus-incarnate', Landorus:'landorus-incarnate', Enamorus:'enamorus-incarnate', Shaymin:'shaymin-land', Giratina:'giratina-altered',
  Basculin:'basculin-red-striped', Zygarde:'zygarde-50', Minior:'minior-red-meteor', Wormadam:'wormadam-plant', Mimikyu:'mimikyu-disguised' };
Object.entries(SLUG_FIX).forEach(([n, slug]) => { const p = POKEDEX[n]; if (!p) return;
  p.front = p.front.replace(/[^/]+(\.\w+)$/, slug + '$1'); p.back = p.back.replace(/[^/]+(\.\w+)$/, slug + '$1'); });
