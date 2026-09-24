# Pokémon Battle Arena

A browser-based, retro-styled Pokémon battle game built for HCI Finals (FEU-A). Pick a trainer, choose your Pokémon, and battle a randomly generated opponent in a turn-based fight — no build tools, no dependencies, just HTML/CSS/JS.

## Features

**New in this update:**
- **Dark, Steel and Fairy types** — 18 types total. Bite/Crunch are now Dark, Iron Tail/Metal Claw/Iron Head are Steel, and three new Pokémon (Umbreon, Steelix, Clefable) carry the new types, with a fleshed-out type chart to match.
- **Deeper battles** — confusion (can make a Pokémon hurt itself instead of moving), flinch (Bite, Rock Slide, Air Slash, Iron Head, Stomp can stop a slower foe from moving), recoil (Slam, Body Slam, Close Combat hurt the user too), multi-hit moves (Double Slap, Fury Attack, Fury Swipes, Pin Missile hit 2-5 times), and a Recover move on a few bulky Pokémon (Snorlax, Chansey, Blastoise, Lapras, Slowbro) that heals 50% HP instead of attacking.
- **Coins & shop** — every win earns coins (more from tougher fights, gyms and later Endless waves). Spend them on the Stats page shop for Potions, Super Potions, Full Heals, or a Rare Candy that instantly levels up any Pokémon you've used.
- **Persistent item bag** — Potions/Super Potions/Full Heals bought in the shop (or earned from gyms) now carry over between every battle and mode, instead of resetting per campaign run.
- **Endless draft** — after clearing an Endless wave, pick 1 of 3 random Pokémon to swap into your team, roguelike-style, or skip and keep your current team.
- **Team presets** — save your current pick as a named team from the selection screen, then load it back in with one click instead of repicking every run.


- **Title → Profile → Select → Battle → Stats** flow across four linked pages
- **Trainer customization** — pick a trainer class (Youngster, Lass, Ace Trainer, Hiker, Swimmer, Rocket Grunt), each with a procedurally-drawn pixel silhouette avatar (no image assets needed)
- **Optional GitHub avatar** — enter a GitHub username to pull in your real avatar via the public GitHub API; falls back gracefully if the username isn't found
- **1,025 selectable Pokémon**, each with 4 unique moves and a type (18 types total, cards generated from the `POKEDEX` in `index.js`)
- **Type effectiveness system** — moves are boosted, weakened, or nullified depending on attacker/defender type (e.g. Water is super effective against Fire)
- **Level-scaled stats** — each battle rolls a random level (40–55) for both Pokémon, which affects max HP and move damage
- **Clean white arena** — the battlefield is a plain white box with soft ground shadows under each sprite and retro rounded corners
- **Battle polish** — type badges, colored move buttons, lunge/hit/faint animations, WebAudio sound effects (mutable), critical hits, misses (move accuracy), limited PP, and 1–4 keyboard shortcuts
- **1v1 / 2v2 / 3v3 modes** — pick your team size on the selection screen, then pick that many Pokémon, switch mid-battle (costs your turn), forced switch when one faints; the battle ends when a whole team is down
- **Choose your opponent** — "CHOOSE FOE" adds a second pick screen for the opponent's team; "RANDOM FOE" keeps it random
- **Status effects** — burn, poison, paralysis and sleep, inflicted by fire/ghost, poison, electric and grass attackers (20% chance on a damaging hit)
- **Gym campaign** — beat 8 leaders in a row (Brock → Champion Lance) for badges; the item bag carries over and you win a Potion per gym
- **Items and XP** — Potion, Super Potion and Full Heal in battle (uses your turn); Pokémon that fight in a won battle earn XP and level up permanently (saved in `pokeProgress`, cleared by Reset Stats)
- **Back buttons** — sticky BACK bar on every screen (Esc works too)
- **Picker tools** — name search, type filter, random/clear team, type chart
- **Trainer profile** — name, 12 classes with perks, win ranks, locked classes, preview, intro lines
- **Base stats and dual types** — per-species HP/Attack/Defense/Speed; dual types affect both type effectiveness and STAB
- **Evolution** — Pokémon evolve after a win once they reach their level (Lv 45/50/60 depending on the line)
- **Shop** — Revive, X Attack and a Lucky Egg (+50% XP for 5 wins)
- **Pokédex** — silhouettes until used, era and legendary filters, detail popup with base stats and evolution
- **Settings** — volume, battle speed, reduce motion
- **Pokédex page** (`pokedex.html`) — search/filter all Pokémon by type; shows each one's level, moves and personal win/loss record
- **Mobile layout** — smaller, squarer battle arena, 2-column moves, and a scrolling picker that fits phone screens
- **Difficulty** — Easy / Normal / Hard opponent AI, chosen on the trainer intro screen
- **Stats extras** — win streak, best streak, and the last 10 battles
- **Speed and turn order** — every Pokémon has a Speed stat; the faster one moves first (Quick Attack / Extreme Speed have priority, paralysis halves Speed, switches and items go before attacks)
- **Real move types** — each move has its own type (Thunderbolt = electric, Ice Beam = ice), with a 1.5x same-type bonus (STAB), so Lapras, Gyarados and Charizard can hit outside their own type
- **Stat-changing moves** — Swords Dance, Growl, Leer, Harden, Agility and String Shot change attack/defense/speed stages (-6 to +6, reset on switch-out)
- **Smarter opponent** — on Hard the AI picks moves by expected damage, switches out of bad type matchups, uses 2 Potions when low, and sets up with buffs
- **Weather** — rain, harsh sun and sandstorm (boosts/weakens types, sand chips non-Rock/Ground) last 5 turns
- **Shiny Pokémon** — 1-in-64 recolored sprite; shinies you use are starred in the Pokédex
- **Export / import save** — buttons on the Stats page download and restore your progress as a JSON file (validated before anything is overwritten)
- **Endless mode** — stronger waves until you lose; best wave is saved in stats
- **2-player hot-seat** — two players pick teams and take turns on one screen (moves + forced switches; no items, no stat saving)
- **Tutorial screen** — shown on first launch and from "HOW TO PLAY" on the title screen
- **Installable app** — `manifest.webmanifest` + `sw.js` make it installable and playable offline once loaded (serve over http/https; service workers do not run from `file://`)
- **Turn-based battle** with animated HP bars (green → yellow → red) and battle-log messaging
- **Persistent battle stats** — wins, losses, win rate, and a per-type breakdown, saved to `localStorage` and viewable/resettable on the Stats page
- **Sprite fallback** — if a Pokémon/avatar sprite fails to load (e.g. no network), a pixel Poké Ball placeholder is shown instead of a broken image
- **CRT scanline effect** and a shared retro pixel-font design system across every screen

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. Pokémon sprites are pulled from `img.pokemondb.net`; GitHub avatars from the public GitHub REST API.

## Running it

Just open `index.html` in a browser (or serve the folder with any static file server). No installation required.

```
index.html   — title screen, trainer/profile setup, Pokémon selection
main.html    — trainer intro + turn-based battle
stats.html   — battle record, streaks, history and per-type breakdown
pokedex.html — browsable Pokédex with per-Pokémon records
sw.js / manifest.webmanifest / icon-*.png — installable-app files
roster.js    — Pokédex data, dual types, evolution lines, base stats
settings.html — volume, battle speed, reduce motion
index.js     — game logic (screens, battle engine, stats)
retro.css    — shared design tokens and components (buttons, panels, avatars)
index.css / main.css / stats.css — per-page layout styles
```

Or just click this https://moodyashit.github.io/HCI_FINALS/

## Data persistence

All progress is stored client-side in `localStorage`:
- `battleProfile` — trainer class + optional GitHub avatar/username
- `battleStats` — total wins/losses, a win/loss count per opponent type, and your coin balance
- `pokeProgress`, `campaign`, `shinies` — XP/levels, current gym/endless run, shinies used
- `playerTeam` / `playerPokemon` — the team (and lead) selected for the current run
- `inventory` — your Potions/Super Potions/Full Heals, shared across every battle and mode
- `teamPresets` — named teams you've saved from the selection screen

Reset your record anytime from the Stats page.

---

UPDATE (09/23/26) — spiced up the only project I actually liked making from FEU-A: added type effectiveness, level-scaled HP/damage, sprite fallbacks, and a consistent CRT look across every screen.

UPDATE (09/24/26) — added Dark/Steel/Fairy types, confusion/flinch/recoil/multi-hit/Recover, a coin economy with a shop, a persistent item bag, an Endless roguelike draft, and named team presets.

UPDATE (09/24/26) — added 100 more Pokémon (the rest of Gen 1 plus Gen 2 favorites like Espeon, Scizor, Heracross and Ampharos), bringing the roster to 203.

UPDATE (09/24/26) — +503 Gen 2–6 Pokémon, back buttons, picker tools.

UPDATE (09/24/26) — +301 Gen 7–9 Pokémon (1,025 total) and the trainer overhaul (name, 12 classes, perks, ranks).

UPDATE (09/24/26) — split the roster into roster.js; added base stats, dual types, evolution, new shop items (Revive, X Attack, Lucky Egg), Pokédex silhouettes/filters/detail popup, a settings page, sprite fallbacks and mirrored HOME back sprites.

UPDATE (09/24/26) — roster is now the full National Pokédex (1,025): checked against Serebii's list and added the stragglers (Nidoran♀/♂, Nidorina, Nidorino, Farfetch'd, Mr. Mime, Pidgeotto, Magby, Celebi, Barboach, Whiscash, Wynaut, Mime Jr., Chingling, Bonsly, Happiny, Gliscor, Wormadam, Slither Wing, Sandy Shocks, Roaring Moon, Walking Wake).
