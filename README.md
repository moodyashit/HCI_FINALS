# Pokémon Battle Arena

A browser-based, retro-styled Pokémon battle game built for HCI Finals (FEU-A). Pick a trainer, choose your Pokémon, and battle a randomly generated opponent in a turn-based fight — no build tools, no dependencies, just HTML/CSS/JS.

## Features

- **Title → Profile → Select → Battle → Stats** flow across four linked pages
- **Trainer customization** — pick a trainer class (Youngster, Lass, Ace Trainer, Hiker, Swimmer, Rocket Grunt), each with a procedurally-drawn pixel silhouette avatar (no image assets needed)
- **Optional GitHub avatar** — enter a GitHub username to pull in your real avatar via the public GitHub API; falls back gracefully if the username isn't found
- **51 selectable Pokémon**, each with 4 unique moves and a type (15 types total, cards generated from the `POKEDEX` in `index.js`)
- **Type effectiveness system** — moves are boosted, weakened, or nullified depending on attacker/defender type (e.g. Water is super effective against Fire)
- **Level-scaled stats** — each battle rolls a random level (40–55) for both Pokémon, which affects max HP and move damage
- **Clean white arena** — the battlefield is a plain white box with soft ground shadows under each sprite and retro rounded corners
- **Battle polish** — type badges, colored move buttons, lunge/hit/faint animations, WebAudio sound effects (mutable), critical hits, misses (move accuracy), limited PP, and 1–4 keyboard shortcuts
- **Difficulty** — Easy / Normal / Hard opponent AI, chosen on the trainer intro screen
- **Stats extras** — win streak, best streak, and the last 10 battles
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
stats.html   — battle record and per-type breakdown
index.js     — all game logic (Pokédex data, screens, battle engine, stats)
retro.css    — shared design tokens and components (buttons, panels, avatars)
index.css / main.css / stats.css — per-page layout styles
```

## Data persistence

All progress is stored client-side in `localStorage`:
- `battleProfile` — trainer class + optional GitHub avatar/username
- `battleStats` — total wins/losses and a win/loss count per opponent type
- `playerPokemon` — the Pokémon selected for the current run

Reset your record anytime from the Stats page.

---

UPDATE (09/23/26) — spiced up the only project I actually liked making from FEU-A: added type effectiveness, level-scaled HP/damage, sprite fallbacks, and a consistent CRT look across every screen.
