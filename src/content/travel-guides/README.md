# Travel Guides Configuration

Each travel guide can have custom colors and fonts for its card display. Add these fields to the frontmatter of each guide's markdown file.

## Card Styling Fields

Add these optional fields to your guide's frontmatter (the YAML section at the top):

```yaml
---
title: "Mexico City"
country: "Mexico"
featuredImage: "/travel-guides/mexico-city/cover.jpeg"
cardBackgroundColor: "#dd3719"        # Background color of the card
cardTextColor: "#99ff5e"              # Color for the title and subtitle text
cardTitleFont: "Bricolage Grotesque" # Font family for the large city name
cardSubtitleFont: "Space Mono"        # Font family for the small bottom text
cardTitleSize: "60px"                 # Font size for the title (default: 60px)
---
```

## Example: Mexico City

```yaml
---
title: "Mexico City"
country: "Mexico"
featuredImage: "/travel-guides/mexico-city/cover.jpeg"
cardBackgroundColor: "#dd3719"
cardTextColor: "#99ff5e"
cardTitleFont: "Bricolage Grotesque"
cardSubtitleFont: "Space Mono"
cardTitleSize: "60px"
---
```

## Default Values

If you don't specify these fields, the card will use default values:
- `cardBackgroundColor`: `#f0f0f0` (light gray)
- `cardTextColor`: `#2c2c2c` (dark gray)
- `cardTitleFont`: Uses the default monospace font
- `cardSubtitleFont`: Uses the default monospace font
- `cardTitleSize`: `60px` (with 49px line height)

## Font Options

You can use any font family name. Common options:
- `Bricolage Grotesque`
- `Space Mono`
- `IBM Plex Mono` (already loaded)
- `Alegreya` (already loaded)
- Any Google Font name

Note: If you use a font that's not already loaded, you may need to add it to `src/app/layout.tsx`.
