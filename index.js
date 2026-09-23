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
    moves:[{name:'Peck',power:7},{name:'Quick Attack',power:6},{name:'Fury Attack',power:8},{name:'Drill Peck',power:10}] }
};

// Attacker type -> { defenderType: multiplier }. Unlisted pairs default to 1x.
const TYPE_CHART = {
  normal:   { rock: 0.5, ghost: 0 },
  fire:     { grass: 2, water: 0.5, fire: 0.5, rock: 0.5 },
  water:    { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2 },
  grass:    { water: 2, fire: 0.5, grass: 0.5, ground: 2, rock: 2, poison: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0 },
  ghost:    { psychic: 2, normal: 0, ghost: 2 },
  fighting: { normal: 2, rock: 2, ghost: 0, psychic: 0.5 },
  psychic:  { fighting: 2, poison: 2, psychic: 0.5 },
  rock:     { fire: 2, fighting: 0.5, ground: 0.5 },
  poison:   { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5 },
  ground:   { fire: 2, electric: 2, grass: 0.5, poison: 2, rock: 2 }
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
function recordResult(won, opponentType) {
  const s = getStats();
  if (won) s.wins++; else s.losses++;
  if (!s.byType[opponentType]) s.byType[opponentType] = { wins: 0, losses: 0 };
  if (won) s.byType[opponentType].wins++; else s.byType[opponentType].losses++;
  saveStats(s);
}

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
document.querySelectorAll('.pokemon-card').forEach(card => {
  card.addEventListener('click', () => {
    localStorage.setItem('playerPokemon', card.dataset.name);
    window.location.href = 'main.html';
  });
  const img = card.querySelector('img');
  if (img) img.addEventListener('error', () => handleSpriteError(img));
});

// ---------- BATTLE SCREEN ----------
const trainerIntroEl = document.getElementById('trainerIntro');
if (trainerIntroEl) {
  const profile = getProfile();
  const playerName = localStorage.getItem('playerPokemon') || 'Blastoise';
  const opponentPool = OPPONENT_POOL.filter(name => name !== playerName);
  const opponentName = opponentPool[Math.floor(Math.random() * opponentPool.length)];
  const trainer = OPPONENT_TRAINERS[Math.floor(Math.random() * OPPONENT_TRAINERS.length)];

  function levelToMaxHp(level) { return Math.round(80 + level * 1.6); }

  const playerLevel = Math.floor(Math.random()*15)+40;
  const opponentLevel = Math.floor(Math.random()*15)+40;
  const playerMaxHp = levelToMaxHp(playerLevel);
  const opponentMaxHp = levelToMaxHp(opponentLevel);
  const player = { name: playerName, level: playerLevel, hp: playerMaxHp, maxHp: playerMaxHp, ...POKEDEX[playerName] };
  const opponent = { name: opponentName, level: opponentLevel, hp: opponentMaxHp, maxHp: opponentMaxHp, ...POKEDEX[opponentName] };

  const trainerAvatarEl = document.getElementById('trainerAvatar');
  trainerAvatarEl.src = trainerSilhouette(trainer.accent, trainer.hat);
  trainerAvatarEl.addEventListener('error', () => handleSpriteError(trainerAvatarEl));
  document.getElementById('trainerText').textContent = `${trainer.name} wants to battle! They sent out ${opponent.name}!`;

  const playerBadge = document.getElementById('playerBadge');
  const playerClass = TRAINER_CLASSES.find(tc => tc.id === profile.trainerClassId) || TRAINER_CLASSES[0];
  playerBadge.src = profile.avatarUrl || trainerSilhouette(playerClass.accent, playerClass.hat);
  playerBadge.addEventListener('error', () => handleSpriteError(playerBadge));

  document.getElementById('battleStartBtn').addEventListener('click', () => {
    trainerIntroEl.hidden = true;
    document.getElementById('battleFrame').hidden = false;
    startBattle(player, opponent);
  });

  // dropdown menu
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');
  menuBtn.addEventListener('click', () => { menuDropdown.hidden = !menuDropdown.hidden; });
  document.getElementById('forfeitBtn').addEventListener('click', () => {
    recordResult(false, opponent.type);
    window.location.href = 'index.html';
  });
}

function startBattle(player, opponent) {
  const els = {
    oppName: document.getElementById('oppName'), oppLevel: document.getElementById('oppLevel'),
    oppSprite: document.getElementById('oppSprite'), oppHPBar: document.getElementById('oppHPBar'), oppHPText: document.getElementById('oppHPText'),
    playerName: document.getElementById('playerName'), playerLevel: document.getElementById('playerLevel'),
    playerSprite: document.getElementById('playerSprite'), playerHPBar: document.getElementById('playerHPBar'), playerHPText: document.getElementById('playerHPText'),
    message: document.getElementById('message'), actions: document.getElementById('actions'), restartButton: document.getElementById('restartButton')
  };

  function init() {
    els.oppName.textContent = opponent.name; els.oppLevel.textContent = opponent.level; els.oppSprite.src = opponent.front;
    els.playerName.textContent = player.name; els.playerLevel.textContent = player.level; els.playerSprite.src = player.back;
    els.oppSprite.addEventListener('error', () => handleSpriteError(els.oppSprite));
    els.playerSprite.addEventListener('error', () => handleSpriteError(els.playerSprite));
    updateHP('opp'); updateHP('player'); renderMoves();
  }

  function updateHP(who) {
    const mob = who === 'opp' ? opponent : player;
    const bar = who === 'opp' ? els.oppHPBar : els.playerHPBar;
    const text = who === 'opp' ? els.oppHPText : els.playerHPText;
    const pct = Math.max(0, (mob.hp / mob.maxHp) * 100);
    bar.style.width = pct + '%';
    bar.style.background = pct > 50 ? 'var(--hp-green)' : pct > 20 ? 'var(--hp-yellow)' : 'var(--hp-red)';
    text.textContent = `${Math.max(0, mob.hp)}/${mob.maxHp}`;
  }

  function renderMoves() {
    els.actions.innerHTML = '';
    player.moves.forEach(move => {
      const btn = document.createElement('button');
      btn.className = 'retro-btn'; btn.textContent = move.name;
      btn.addEventListener('click', () => playerTurn(move));
      els.actions.appendChild(btn);
    });
  }

  function setMessage(t) { els.message.textContent = t; }
  function disableActions(d) { els.actions.querySelectorAll('button').forEach(b => (b.disabled = d)); }

  // Damage scales gently with the attacker's level and is multiplied by
  // type effectiveness (see TYPE_CHART). Returns { dmg, eff }.
  function computeDamage(move, attacker, defender) {
    const eff = typeEffectiveness(attacker.type, defender.type);
    const levelFactor = 0.6 + attacker.level / 100;
    const dmg = eff === 0 ? 0 : Math.max(1, Math.round(move.power * levelFactor * eff));
    return { dmg, eff };
  }

  function playerTurn(move) {
    disableActions(true);
    const { dmg, eff } = computeDamage(move, player, opponent);
    opponent.hp = Math.max(0, opponent.hp - dmg);
    updateHP('opp');
    let msg = `${player.name} used ${move.name}!`;
    if (eff === 0) msg += ` It had no effect on ${opponent.name}...`;
    else if (eff > 1) msg += ` It's super effective!`;
    else if (eff < 1) msg += ` It's not very effective...`;
    setMessage(msg);
    if (opponent.hp <= 0) return endGame(true, `${opponent.name} fainted. ${player.name} wins!`);
    setTimeout(opponentTurn, 1300);
  }

  function opponentTurn() {
    const move = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    const { dmg, eff } = computeDamage(move, opponent, player);
    player.hp = Math.max(0, player.hp - dmg);
    updateHP('player');
    let msg = `${opponent.name} used ${move.name}!`;
    if (eff === 0) msg += ` It had no effect on ${player.name}...`;
    else if (eff > 1) msg += ` It's super effective!`;
    else if (eff < 1) msg += ` It's not very effective...`;
    setMessage(msg);
    if (player.hp <= 0) return endGame(false, `${player.name} fainted. ${opponent.name} wins!`);
    disableActions(false);
  }

  function endGame(won, text) {
    setMessage(text);
    disableActions(true);
    recordResult(won, opponent.type);
    els.restartButton.hidden = false;
  }

  els.restartButton.addEventListener('click', () => { window.location.href = 'index.html'; });
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
    location.reload();
  });
}
