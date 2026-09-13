Use `Button` for any action; `variant="primary"` is reserved for the single committing action in a view (buy, start, submit).

```jsx
<Button size="lg" variant="primary">Quero acesso agora</Button>
<Button size="lg" variant="secondary" iconLeft={<PlayIcon />}>Ver demonstração</Button>
```

- `variant`: `primary` (violet gradient + violet glow), `secondary` (raised ink surface), `outline` (hairline only), `ghost` (text only, used in nav).
- `size`: `sm` 36px / `md` 44px / `lg` 52px. Landing-page CTAs are `lg`; in-product actions are `sm` or `md`.
- Hover brightens rather than recolours; press scales to 0.985. Never change the primary fill to another hue.
