// Regenerates public/images/the-personal-agent-og.jpg - the card every link to this site shows
// in a timeline, a Slack message or an iMessage preview.
//
//   npx puppeteer@latest browsers install chrome   # once, if there is no Chrome about
//   node scripts/make-og-image.mjs
//
// Puppeteer is deliberately NOT in package.json. This runs by hand on the rare occasions the
// wordmark, the agent or the line change, and a marketing site's build should not need a browser
// download to produce one JPEG. The output is committed.
//
// It is a screenshot rather than a drawing, and that is the point: the layout below is the
// site's own hero, built from the same values as `.hero` in app/globals.css. Change the brand
// colours there and this wants re-running. Building it with next/og instead would have meant
// reimplementing the grid and the glow in Satori's subset of CSS and keeping THAT in step - a
// second copy of the hero rather than a photograph of it.
//
// The type is Liberation Sans, metric-compatible with Arial, and whatever this machine renders
// is baked in permanently. The site itself uses the system stack, so the card matches what a
// visitor on Linux already sees and sits a hair off what a Mac shows. A webfont would be a third
// thing to keep true for one line of text.

import fs from "node:fs";
import puppeteer from "puppeteer";

const REPO = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const OUT = process.argv[2] ?? `${REPO}/public/images/the-personal-agent-og.jpg`;

// The wordmark, inlined so its colours can be flipped for a dark ground without touching the
// asset. Its paths carry no fill except two in brand purple, so the default is black - correct
// on the site's cream body, invisible here. The C2PA manifest is dropped: it is provenance for
// the file on disk, not something to bake into a screenshot of it.
const wordmark = fs
  .readFileSync(`${REPO}/public/images/the-personal-agent-wordmark.svg`, "utf8")
  .replace(/<\?xml[^>]*\?>/, "")
  .replace(/<metadata>[\s\S]*?<\/metadata>/, "");

const mascot = fs.readFileSync(`${REPO}/public/images/the-personal-agent-mascot-transparent.png`);
const mascotUri = `data:image/png;base64,${mascot.toString("base64")}`;

// Same recipe as .hero in app/globals.css: ground, an 84px blueprint grid at 5.5% white that
// dissolves into the ground at the edges, and a purple glow behind the middle.
const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  :root {
    --brand: #61169d; --brand-dark: #420f6b; --brand-tint: #b37be0; --ground: #140b1c;
    --ground-rgb: 20, 11, 28; --brand-rgb: 97, 22, 157;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    position: relative; overflow: hidden;
    font-family: "Liberation Sans", "DejaVu Sans", Arial, sans-serif;
    background:
      radial-gradient(130% 130% at 50% 38%,
        rgba(var(--ground-rgb), 0) 0%, rgba(var(--ground-rgb), 0) 52%, var(--ground) 93%),
      linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px),
      var(--ground);
    background-size: 100% 100%, 84px 84px, 84px 84px, auto;
  }
  .glow {
    position: absolute; top: -20%; left: 46%; transform: translateX(-50%);
    width: 78%; height: 130%;
    background: radial-gradient(ellipse at center, rgba(var(--brand-rgb), 0.30) 0%, transparent 62%);
  }
  /* The brand bar down the left edge, carried over from the image this replaces. Flat brand
     purple disappeared against the glow, which lifts the ground just where the bar sits, so it
     runs tint-to-brand and reads at any size. */
  .bar {
    position: absolute; inset: 0 auto 0 0; width: 12px;
    background: linear-gradient(180deg, var(--brand-tint) 0%, var(--brand) 55%, var(--brand-dark) 100%);
  }
  .row {
    position: relative; height: 100%;
    display: flex; align-items: center; gap: 40px;
    padding: 56px 64px 56px 104px;
  }
  .copy { flex: 1 1 auto; min-width: 0; }
  .mark { width: 560px; display: block; }
  .mark svg { width: 100%; height: auto; display: block; }
  /* Black on cream becomes white on ground; the two purple paths go up to the tint, which is
     the same swap the nav makes for its dark topbar. */
  .mark svg path { fill: #ffffff; }
  .mark svg path[fill="#61169D"] { fill: var(--brand-tint); }
  .rule { width: 92px; height: 3px; background: var(--brand-tint); margin: 34px 0 26px; opacity: .85; }
  .tag { font-size: 30px; line-height: 1.34; color: #e4dced; max-width: 520px; letter-spacing: -0.2px; }
  .tag b { color: #ffffff; font-weight: 700; }
  .foot {
    position: absolute; left: 104px; bottom: 44px;
    font-size: 17px; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--brand-tint); opacity: .85;
  }
  .agent { flex: 0 0 auto; align-self: flex-end; }
  .agent img { height: 512px; width: auto; display: block; filter: drop-shadow(0 26px 46px rgba(0,0,0,.55)); }
</style></head>
<body>
  <div class="glow"></div><div class="bar"></div>
  <div class="row">
    <div class="copy">
      <div class="mark">${wordmark}</div>
      <div class="rule"></div>
      <p class="tag">Your inbox, your calendar, your day.<br><b>Work and home.</b></p>
    </div>
    <div class="agent"><img src="${mascotUri}" alt=""></div>
  </div>
  <div class="foot">thepersonalagent.ai</div>
</body></html>`;

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: OUT, type: "jpeg", quality: 92 });
await browser.close();

const { size } = fs.statSync(OUT);
console.log(`wrote ${OUT}  ${(size / 1024).toFixed(1)} KB`);
