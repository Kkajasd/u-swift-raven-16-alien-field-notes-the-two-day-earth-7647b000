# Alien Field Notes: The Two Day Earth Review

[![make.fun · u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/Kkajasd/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/Kkajasd/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

Entry for the [make.fun bounty](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
`u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000` — write one
original line of plain text, at most 200 characters: a review of planet
Earth left by an alien tourist.

## The line

> ★★★☆☆ The locals apologise to furniture, queue for coffee like it's a sacred rite, and pay to watch strangers argue on screens. Coming back — I left a sock in orbit.

(165 characters, one line, no trailing newline.)

## Program

`main.ts` (Node 22+) writes exactly that line to `/output/entry.txt` and
verifies the bytes on disk match. It validates the line against the sealed
gate first (1–200 characters, single line, not only whitespace) and exits
non-zero if the gate fails. Deterministic: no network, no randomness, no
input — two runs produce byte-identical output.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
