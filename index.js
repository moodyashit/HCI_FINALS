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
    moves:[{name:'Rock Throw',power:9},{name:'Tackle',power:6},{name:'Rollout',power:8},{name:'Rock Slide',power:11}] }
};

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
  if (profile.avatarUrl) githubAvatar.style.backgroundImage = `url("${profile.avatarUrl}")`;
  if (profile.githubUsername) document.getElementById('githubInput').value = profile.githubUsername;

  document.getElementById('githubConnectBtn').addEventListener('click', async () => {
    const username = document.getElementById('githubInput').value.trim();
    if (!username) return;
    githubStatus.textContent = 'Looking up...';
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
      if (!res.ok) throw new Error('not found');
      const data = await res.json();
      githubAvatar.style.backgroundImage = `url("${data.avatar_url}")`;
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
});

// ---------- BATTLE SCREEN ----------
const trainerIntroEl = document.getElementById('trainerIntro');
if (trainerIntroEl) {
  const profile = getProfile();
  const playerName = localStorage.getItem('playerPokemon') || 'Blastoise';
  const opponentPool = OPPONENT_POOL.filter(name => name !== playerName);
  const opponentName = opponentPool[Math.floor(Math.random() * opponentPool.length)];
  const trainer = OPPONENT_TRAINERS[Math.floor(Math.random() * OPPONENT_TRAINERS.length)];

  const player = { name: playerName, level: Math.floor(Math.random()*15)+40, hp:100, maxHp:100, ...POKEDEX[playerName] };
  const opponent = { name: opponentName, level: Math.floor(Math.random()*15)+40, hp:100, maxHp:100, ...POKEDEX[opponentName] };

  document.getElementById('trainerAvatar').style.backgroundImage = `url("${trainerSilhouette(trainer.accent, trainer.hat)}")`;
  document.getElementById('trainerText').textContent = `${trainer.name} wants to battle! They sent out ${opponent.name}!`;

  const playerBadge = document.getElementById('playerBadge');
  const playerClass = TRAINER_CLASSES.find(tc => tc.id === profile.trainerClassId) || TRAINER_CLASSES[0];
  playerBadge.style.backgroundImage = profile.avatarUrl
    ? `url("${profile.avatarUrl}")`
    : `url("${trainerSilhouette(playerClass.accent, playerClass.hat)}")`;

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

  function playerTurn(move) {
    disableActions(true);
    opponent.hp = Math.max(0, opponent.hp - move.power);
    updateHP('opp');
    setMessage(`${player.name} used ${move.name}!`);
    if (opponent.hp <= 0) return endGame(true, `${opponent.name} fainted. ${player.name} wins!`);
    setTimeout(opponentTurn, 1100);
  }

  function opponentTurn() {
    const move = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    player.hp = Math.max(0, player.hp - move.power);
    updateHP('player');
    setMessage(`${opponent.name} used ${move.name}!`);
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
    summary.innerHTML = `<div class="pixel-avatar round" style="width:48px;height:48px;background-image:url('${img}')"></div>
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
