const POKEDEX = {
  Pikachu: {
    front: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    back: 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif',
    moves: [
      { name: 'Thunder Shock', power: 9 },
      { name: 'Quick Attack', power: 6 },
      { name: 'Thunderbolt', power: 13 },
      { name: 'Iron Tail', power: 10 }
    ]
  },
  Bulbasaur: {
    front: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    back: 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif',
    moves: [
      { name: 'Vine Whip', power: 8 },
      { name: 'Tackle', power: 6 },
      { name: 'Razor Leaf', power: 11 },
      { name: 'Seed Bomb', power: 12 }
    ]
  },
  Charmander: {
    front: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    back: 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif',
    moves: [
      { name: 'Ember', power: 8 },
      { name: 'Scratch', power: 5 },
      { name: 'Flame Burst', power: 12 },
      { name: 'Metal Claw', power: 9 }
    ]
  },
  Blastoise: {
    front: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
    back: 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif',
    moves: [
      { name: 'Water Cannon', power: 10 },
      { name: 'Water Pulse', power: 8 },
      { name: 'Surf', power: 12 },
      { name: 'Tackle', power: 6 }
    ]
  },
  Charizard: {
    front: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
    back: 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif',
    moves: [
      { name: 'Flamethrower', power: 11 },
      { name: 'Dragon Claw', power: 10 },
      { name: 'Wing Attack', power: 8 },
      { name: 'Fire Fang', power: 9 }
    ]
  }
};

const OPPONENT_POOL = Object.keys(POKEDEX);

// ---------- TITLE / SELECTION SCREEN (index.html) ----------
const startButton = document.getElementById('startButton');
if (startButton) {
  startButton.addEventListener('click', () => {
    document.getElementById('titleScreen').hidden = true;
    document.getElementById('pokemonSelection').hidden = false;
  });
}

document.querySelectorAll('.pokemon-card').forEach(card => {
  card.addEventListener('click', () => {
    localStorage.setItem('playerPokemon', card.dataset.name);
    window.location.href = 'main.html';
  });
});

// ---------- BATTLE SCREEN (main.html) ----------
const gameEl = document.querySelector('.game');
if (gameEl) {
  const playerName = localStorage.getItem('playerPokemon') || 'Blastoise';
  const opponentPool = OPPONENT_POOL.filter(name => name !== playerName);
  const opponentName = opponentPool[Math.floor(Math.random() * opponentPool.length)];

  const player = { name: playerName, level: Math.floor(Math.random() * 15) + 40, hp: 100, maxHp: 100, ...POKEDEX[playerName] };
  const opponent = { name: opponentName, level: Math.floor(Math.random() * 15) + 40, hp: 100, maxHp: 100, ...POKEDEX[opponentName] };

  const els = {
    oppName: document.getElementById('oppName'),
    oppLevel: document.getElementById('oppLevel'),
    oppSprite: document.getElementById('oppSprite'),
    oppHPBar: document.getElementById('oppHPBar'),
    oppHPText: document.getElementById('oppHPText'),
    playerName: document.getElementById('playerName'),
    playerLevel: document.getElementById('playerLevel'),
    playerSprite: document.getElementById('playerSprite'),
    playerHPBar: document.getElementById('playerHPBar'),
    playerHPText: document.getElementById('playerHPText'),
    message: document.getElementById('message'),
    actions: document.getElementById('actions'),
    restartButton: document.getElementById('restartButton')
  };

  function init() {
    els.oppName.textContent = opponent.name;
    els.oppLevel.textContent = opponent.level;
    els.oppSprite.src = opponent.front;
    els.playerName.textContent = player.name;
    els.playerLevel.textContent = player.level;
    els.playerSprite.src = player.back;
    updateHP('opp');
    updateHP('player');
    renderMoves();
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
      btn.className = 'retro-btn';
      btn.textContent = move.name;
      btn.addEventListener('click', () => playerTurn(move));
      els.actions.appendChild(btn);
    });
  }

  function setMessage(text) {
    els.message.textContent = text;
  }

  function disableActions(disabled) {
    els.actions.querySelectorAll('button').forEach(b => (b.disabled = disabled));
  }

  function playerTurn(move) {
    disableActions(true);
    opponent.hp = Math.max(0, opponent.hp - move.power);
    updateHP('opp');
    setMessage(`${player.name} used ${move.name}!`);

    if (opponent.hp <= 0) {
      return endGame(`${opponent.name} fainted. ${player.name} wins!`);
    }
    setTimeout(opponentTurn, 1100);
  }

  function opponentTurn() {
    const move = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    player.hp = Math.max(0, player.hp - move.power);
    updateHP('player');
    setMessage(`${opponent.name} used ${move.name}!`);

    if (player.hp <= 0) {
      return endGame(`${player.name} fainted. ${opponent.name} wins!`);
    }
    disableActions(false);
  }

  function endGame(text) {
    setMessage(text);
    disableActions(true);
    els.restartButton.hidden = false;
  }

  els.restartButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  init();
}
