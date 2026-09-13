# Arium — Design System

Arium is a dark, "premium espacial" identity for a digital product brand. Its first
deliverable is a sales page for the **Arium course**: R$197, six modules that take a
non-programmer from an idea to a published SaaS built with generative AI (vibe-coding),
using Next.js, Supabase, Vercel and Mercado Pago.

The system is dark-first. There is no light theme. One violet light source, near-black
ink surfaces, hairline borders at 6–16% white, and a single illustrative object — the Orb.

---

## Sources

Everything in this system was derived from the material the client supplied:

| Source | What it gave us |
| --- | --- |
| `uploads/Nexora-00.png` … `Nexora-13.png` (14 PNGs) | A full product case-study deck — marketing site, dashboard, referral, leaderboard, mobile, branding and a "Typo & Colors" specimen page. Used strictly as the **colour and typography reference** the client asked us to follow. |
| `uploads/Nexora-08.png` | The authoritative spec: **Primary #614DFF** (H247 S70 B100), **Surface #FEFDFF**, **Background #060607**, typeface **Sora**, chosen for "clean geometric forms, excellent readability, and modern aesthetic". |
| Client brief (chat) | Page structure, the R$197 price, the six course modules, the `cabin` multi-tenant SaaS proof point, and the "premium e tech — nada de gradiente colorido genérico de infoproduto" direction. |

**No codebase, Figma file or logo files were supplied.** Values here were read off the
supplied specimen page and measured from the reference screenshots; there is no source of
truth to diff against. Treat every number as a proposal until the client confirms it.

The reference deck belongs to a third-party concept project (credited in the files to
designer Ivan Smilianskyi). Arium borrows the **colour and type direction the client
pointed at** — it does not reuse that project's logo, mark, copy or product screens.

---

## Index

| Path | What |
| --- | --- |
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `base` |
| `components/` | React primitives — see the table below |
| `guidelines/` | 18 specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/course-landing/` | The full Arium course sales page |
| `assets/` | Empty. No logo, icon set, photography or 3D renders were supplied. |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components

| Component | Group | Purpose |
| --- | --- | --- |
| `Button` | `components/core` | Primary / secondary / outline / ghost, three sizes |
| `Badge` | `components/core` | The eyebrow and status pill |
| `Card` | `components/core` | default / raised / glass / glow / accent surfaces |
| `Stat` | `components/core` | Label + figure + delta |
| `IconTile` | `components/core` | Rounded square that seats an icon |
| `Icon` | `components/core` | Lucide glyph as a `currentColor` mask |
| `SectionHeading` | `components/core` | Eyebrow + two-tone display headline + deck |
| `Input` | `components/forms` | Text field with a `trailing` action slot |
| `Switch` | `components/forms` | 44×26 toggle |
| `Accordion` | `components/disclosure` | FAQ rows |
| `NavBar` | `components/navigation` | Glass pill header |
| `Wordmark` | `components/brand` | "Arium" set in type — stands in for the missing logo |
| `Orb` | `components/brand` | The violet sphere |

#### Intentional additions
The supplied material is a set of renders, not a component library, so the inventory was
read off the screens. Three components have no direct counterpart there and were added
deliberately:
- **`Icon`** — the deck uses Lucide-style glyphs but shipped no icon assets; this wraps the
  CDN set so nothing gets hand-drawn.
- **`Orb`** — the brief explicitly asks for a 3D sphere in the hero and a larger one in the
  closing section; it is built in CSS because no render was supplied.
- **`Wordmark`** — needed because there is no logo file (see *Iconography*).

---

## Content fundamentals

**Language.** Portuguese (pt-BR) for the course surfaces. The system's own documentation is
in English.

**Person.** Second person singular, direct: *"Você não precisa virar programador."* The
author speaks as "eu" only where personal credibility is the argument — the proof section
(*"Eu não ensino o que li. Ensino o que está rodando."*) and the guarantee (*"o risco é
meu"*). Never "nós" — there is no team behind this voice.

**Casing.** Sentence case everywhere: headlines, buttons, badges, nav. No Title Case, no
ALL CAPS except inside small status pills (`SOON`, `ACESSO IMEDIATO`) where the 11px size
needs the extra weight.

**Punctuation.** No exclamation marks. Full stops end headlines when the headline is a
statement (*"Um pagamento. O curso inteiro. Para sempre."*) — the period is the tone. Em
dashes are used sparingly; prefer a full stop.

**Claims.** Concrete and checkable, never aspirational. *"O módulo 6 termina com o deploy"*
rather than *"transforme sua vida"*. Where a number is not known it is left out rather than
invented — this page shows no student count and no testimonials because none were supplied.

**Objections are named, not dodged.** The qualification section says who should *not* buy,
and the FAQ answers the money questions (custo de infra, tempo, Windows) in under 60 words.

**Badges** carry three or four words: *"Turma 2026 · vagas abertas"*, *"cabin · em
produção"*, *"Conteúdo"*.

**No emoji. Ever.** Not in copy, not in cards, not in the FAQ. The reference material
contains none and the aesthetic depends on the absence.

**Anti-patterns for this brand:** countdown urgency theatre, "método secreto", riscar preços
inventados, "apenas hoje", stacked fake bonuses, any sentence that could appear on a generic
infoproduct page.

---

## Visual foundations

**Colour.** One accent: violet `#614DFF`. It appears as a gradient button fill, as the glow
behind the Orb, as the light welling from the bottom of a `glow` card, and as the open-row
colour in the accordion. Nothing else in the system is coloured — green and red exist only
on delta numbers. Surfaces are five near-blacks from `#060607` (page) to `#26262D`; text is
four chalks from `#FEFDFF` down to `#6E6C7A`.

**Backgrounds.** Never flat across a whole page. The hero is a radial violet wash bleeding
in from above the fold (`--glow-hero`); mid-page sections get a faint `--glow-soft` bloom at
50% opacity; the closing section inverts the hero — a violet that *rises* from the bottom
behind an oversized Orb. No photography was supplied. No patterns, no grain, no noise
overlays, no repeating textures.

**Imagery.** Cool and monochromatic-violet when it exists. The reference deck lights its
portraits with a single violet source against black; anything supplied later should match
that. There are no illustrations in this system — the Orb is the only drawn object.

**Type.** Sora, four weights (300/400/500/600 — never 700+). Display sizes run to 92px at
`-0.035em` and `1.06` line-height; the tight tracking is what makes the type feel engineered
rather than generic. Body copy is 16–18px at `1.6` in chalk-2/3. The signature move is the
**two-tone headline**: the whole line in chalk-2 with one phrase raised to full white, so
emphasis costs no colour.

**Layout.** 1200px container, 24px gutters, sections at `clamp(72px, 9vw, 140px)`. The
vertical rhythm inside a section is fixed: eyebrow → 20 → headline → 20 → deck → 48 →
content. Hero and closing sections are centred; proof and FAQ are left-aligned to break the
monotony. The header is the only fixed element; it is transparent over the hero and becomes
a blurred scrim after 40px of scroll.

**Cards.** 20px radius (28px for the large ones), `#101013` fill, a single 1px hairline at
6% white, no drop shadow. Five tones: `default`, `raised` (slightly lighter + a deep black
shadow), `glass` (4% white + 18px backdrop blur, only over a glow or an image), `glow` (a
violet radial rising from the bottom edge), `accent` (full violet gradient — used exactly
once per page, on the price).

**Elevation.** Surfaces separate by darkness and hairline, not by grey shadow. The only
shadows in the system are coloured light: `--shadow-accent` under primary buttons and the
price card. `--shadow-card` is nearly pure black and reads as depth, not as a drop shadow.

**Transparency and blur.** Reserved for things that float over something else: the nav pill,
badges over the hero, glass rows over a glow card, the scrolled header. Never on a card
sitting on flat ink.

**Corner radii.** Controls 10px, inputs 10px, cards 20px, large cards 28–36px, badges and
the nav pill fully round. Nothing in the system is square-cornered.

**Motion.** Restrained. 180ms for state changes, 260ms for surfaces, `cubic-bezier(.22,.61,.36,1)`.
The only continuous animation is the Orb's meridian sheen at 9s linear. No bounce, no
spring, no scroll-jacking, no entrance animations on scroll.

**Hover.** Buttons brighten (`filter: brightness(1.12)`) and do not change hue. Interactive
cards lift 2px and raise their hairline from 6% to 16%. Links go from white to violet-300.
**Press.** Uniform `scale(.985)`. No colour change on press.
**Focus.** A 2px violet-400 ring at 2px offset, never removed.

**Borders.** Always white at an alpha — 6% for card hairlines, 10% default, 16% for
emphasis, and violet at 40% when the border itself is the accent. There are no grey borders
and no coloured borders other than violet.

---

## Iconography

**No icon assets were supplied.** The reference deck uses a thin-stroke geometric set in the
Lucide/Feather family — 24px grid, ~1.5px stroke, rounded caps, no fills. Arium therefore
**substitutes Lucide** and flags it: if the client has their own set, swap `ARIUM_ICON_SRC`
in `components/core/Icon.jsx` and nothing else changes.

- Delivery: `Icon` loads the Lucide UMD icon data once from the CDN and renders each glyph
  as an inline `<svg>` with `stroke="currentColor"` and `stroke-width="1.5"`, so icons
  inherit text colour like a font would. Until the data arrives it renders an empty box of
  the right size — never a placeholder shape.
- Sizes: 16px inside buttons and inline copy, 20px in an `IconTile`, 34px for the guarantee
  seal. Nothing larger.
- Icons are never coloured on their own; they take the colour of the text around them, or
  violet when they mark an outcome.
- A glyph never floats alone on a surface — it sits in an `IconTile` (40px rounded square).
- **No emoji, no unicode symbols as icons, no hand-drawn SVG.**

**No logo.** The client supplied no Arium logo, mark or monogram, so none was drawn. Use
`<Wordmark />` — "Arium" in Sora Semibold at `-0.04em` — everywhere a mark would go.
`assets/` is intentionally empty.

---

## Known substitutions (please confirm)

1. **Sora** is loaded from Google Fonts via `@import` in `tokens/fonts.css`. No font binaries
   were supplied; drop `.woff2` files into `assets/fonts/` and swap the import for
   `@font-face` rules to self-host. Because of this the compiler reports zero `@font-face`
   declarations.
2. **JetBrains Mono** was added for code snippets and terminal strings — the reference shows
   a monospace in the API/code sections but does not name it.
3. **Lucide** stands in for the unnamed icon set.
4. **The Orb** is CSS, not a 3D render.
5. **The course name** is set to "Arium" (the brand). The brief left the title as a blank.
