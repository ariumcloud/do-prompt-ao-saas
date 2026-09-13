# UI kit — Curso Arium (landing page)

A single-page sales site for the Arium course (R$197, vibe-coding → SaaS no ar).
Dark, "premium espacial": one violet light source, ink surfaces, hairline borders, the Orb as the only illustration.

## Files
| File | Surface |
| --- | --- |
| `index.html` | Mounts the page. Loads `styles.css` + `_ds_bundle.js`, then each section. |
| `Header.jsx` | Fixed glass header; becomes a scrim on scroll. |
| `Hero.jsx` | Violet wash, badge, promise headline, dual CTA, Orb 380px. |
| `Audience.jsx` | "É para você / Não é para você" — the glow card is the positive column. |
| `Modules.jsx` | Six module cards; module 05 (pagamentos) is the glow card. |
| `Proof.jsx` | cabin case — left-aligned heading, stats, capability rows on glass. |
| `Offer.jsx` | Inclusions card + full-violet price card (R$197). |
| `Closing.jsx` | `Guarantee`, `Faq`, `Closing` (Orb 520px, dramatic) and `SiteFooter`. |

## Section order
Hero → Qualificação → Módulos → Prova → Oferta → Garantia → Dúvidas → Fechamento → Rodapé.

## Rules this kit follows
- Exactly two Orbs on the page: 380px in the hero, 520px `intensity="dramatic"` in the closing section.
- One `tone="glow"` card per section, on the block that carries the argument.
- `tone="accent"` (full violet fill) appears once, on the price card.
- All copy is pt-BR, second person, no exclamation marks, no emoji.

## Known placeholders
- The course is named **Arium** after the brand — swap the name if the client has a separate course title.
- The Orb is drawn in CSS. Replace with a real 3D render when one exists.
- Testimonials and student numbers were not supplied, so none are shown.
