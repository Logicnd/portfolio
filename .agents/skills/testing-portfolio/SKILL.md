---
name: testing-portfolio
description: Test the Kiri portfolio site end-to-end. Use when verifying UI changes, icon rendering, links, or responsive layout.
---

# Testing the Portfolio Site

This is a static HTML + CSS site with no build step or backend.

## Local Dev Server

```bash
cd /path/to/portfolio
python3 -m http.server 8080
```

Then open `http://localhost:8080` in the browser.

## Key Test Areas

1. **Header branding** -- Top-left should show "K" avatar + "Kiri" text. Verify no "AI" text appears.
2. **Quick Links icons** -- GitHub, Roblox, Projects should each have a real SVG icon (not emoji or broken image). Icons are in `img/` folder.
3. **Link hrefs** -- GitHub should point to `https://github.com/Logicnd`. Roblox link may need updating to the user's actual profile URL. Projects anchor (`#projects`) should scroll to the projects section.
4. **Project grid** -- 4 cards (Index0, Locked, Scribo, RoPlus) with descriptions. Hover should highlight border in blue (`--accent: #58a6ff`).
5. **Responsive layout** -- At 480px and below, quick links stack vertically and project grid becomes single-column. Use DevTools device toolbar (`Ctrl+Shift+M`) to test.

## File Structure

- `index.html` -- Single-page portfolio
- `css/style.css` -- All styles, CSS custom properties for theming
- `img/` -- SVG icons (github.svg, roblox.svg, projects.svg)

## Devin Secrets Needed

None -- this is a purely static site with no authentication or API calls.
