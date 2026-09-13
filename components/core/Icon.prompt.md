Use `Icon` for every glyph. Never paste hand-drawn SVG paths, never use emoji.

```jsx
<IconTile><Icon name="credit-card" /></IconTile>
<Button iconLeft={<Icon name="play" size={16} />}>Ver demo</Button>
```

Names are Lucide slugs (kebab-case). Sizes are 16, 20 or 24px. Icons always inherit
`color` from their container — never set a fill or stroke colour on them directly.
