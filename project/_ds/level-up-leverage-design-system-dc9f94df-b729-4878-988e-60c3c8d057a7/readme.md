# Level Up Leverage Design System

**Brand:** Level Up Leverage
**Parent brand:** Level Up Learning
**Last updated:** June 2026
**Maintainer:** Design team

---

## Company Context

Level Up Leverage helps real estate professionals build scalable businesses through better systems, smarter technology, and hands-on implementation. It is the systems and technology arm of Level Up Learning — sharing the parent brand's growth-forward energy while adopting a more professional, technology-forward visual identity.

**Positioning statement:** We build operational leverage into relationship-driven businesses through better systems, practical technology, and hands-on implementation.

**Core belief:** Technology isn't the goal. Leverage is.

**Brand promise:** We create leverage where it matters most.

**Brand pillars:** Growth · Simplicity · Systems · Teaching · Practical Implementation · Continuous Improvement

### Product

**Leverage Kickstart** is the main product. It runs as a three-stage process:

1. **Discover** — a complimentary session where we learn about your business, your goals, and the challenges you're trying to solve. By the end you'll have greater clarity on your biggest opportunities, and we'll know which Leverage Kickstart option is the right next step.

   What to expect:
   - A 45 to 60 minute conversation about your business
   - A detailed Discover Summary report
   - Clear guidance on the next step

2. **Leverage Summary** — a clear diagnosis of what to build, simplify, or automate first
3. **Leverage Kickstart** — hands-on implementation of the systems identified

### Who We Serve

Our sweet spot: businesses where relationships drive growth.

- Real estate agents
- Real estate teams
- Brokerages
- Mortgage companies
- Real estate photographers
- Home inspectors
- Staging companies
- Closing attorneys
- Insurance agencies
- Financial advisors
- Marketing agencies
- Professional service firms

**Design principles:**
- Clean over busy
- Growth over hype
- Practical over theoretical
- Premium over flashy
- Consistency over novelty

### Sources

Logo files provided June 2026: `assets/logo-color.png`, `assets/logo-black.png`, `assets/logo-white.png`. Brand colors extracted directly from the official color logo. No Figma files or codebase provided at time of creation — when available, link them here and align token values to the source of truth.

**Tagline:** "Less Busywork. More Leverage." — first clause in navy/teal, second in orange.

---

## Content Fundamentals

### Voice and Tone — the Level Up Leverage Voice

- **Practical over inspirational**
- **Confident, never arrogant**
- **Clear over clever**
- **Straightforward over corporate**
- **Expert without jargon**
- **Friendly without being casual**
- **Professional without being stiff**

### Writing Rules

- **No em dashes.** Use a period or restructure the sentence.
- **"You" not "we" when talking to the reader.** Address the professional directly.
- **Sentence case everywhere** except proper nouns and brand names. No title case in UI copy.
- **Numbers under ten are spelled out** in prose; numerals for anything 10+, always numerals in data/UI contexts.
- **No emoji** in product UI. Reserve for informal social content only.

### Words We Avoid

Synergy · Unlock · Empower · Transformative · Revolutionary · Game-changing · Cutting-edge · Best-in-class · End-to-end · Optimize everything

Not because these words are wrong. Because they sound like everyone else.

### Words We Prefer

Build · Simplify · Improve · Implement · Document · Standardize · Clarify · Create leverage · Better systems · Practical technology

### Tone by Context

| Context | Tone |
|---|---|
| Marketing headlines | Bold, punchy, specific. One claim per headline. |
| Product UI | Terse, helpful, never condescending. |
| Error messages | Calm, specific, actionable. Never blame the user. |
| Onboarding | Encouraging and direct. Skip the hand-holding. |
| Documentation | Step-by-step, numbered, concrete. |

### Copy Examples

**Good:** "Your pipeline has three deals without a follow-up date."
**Bad:** "Unlock seamless deal management with our next-level pipeline tools!"

**Good:** "Connect your CRM to get started."
**Bad:** "Leverage our robust integrations to synergize your workflow."

**Good:** "This process runs every Monday at 7 AM."
**Bad:** "Your automated workflow will empower your team to achieve more!"

**Good:** "We build the systems. You run the business."
**Bad:** "Our end-to-end platform will transform your workflow with cutting-edge AI."

---

## Visual Foundations

### Color System

The palette is defined in Brand Standards Guide v1.0 with four official colors:

**Navy** `#203654` (`--brand-primary`): "LEVERAGE" wordmark, tallest bar. Primary brand color for headings, dark surfaces, and primary buttons.

**Mint** `#A8DDD8` (`--brand-mint`): "LEVEL UP" wordmark, shorter bars. Secondary brand color for links, interactive accents, teal surface highlights.

**Gold** `#F5B335` (`--brand-gold`): The upward arrow and "More Leverage." in the tagline. Accent only — CTAs, highlights, never as a background fill.

**Charcoal** `#30363F` (`--text-primary`): Body text color. Not pure black — warm dark charcoal.

**Slate** (`--color-slate-*`): UI chrome, borders, secondary text, muted surfaces.

**Semantic colors**: Standard success/warning/error/info. Use semantic colors only for their intended meaning — never for decoration.

### Typography

**Primary: Outfit** — The official brand typeface (Google Fonts). Used for all display, body, and UI copy. Clean, modern, approachable — professional without being cold.

- Logo "LEVEL UP": Outfit SemiBold 600
- Logo "LEVERAGE": Outfit ExtraBold 800
- Tagline: Outfit Medium 500
- H1 marketing: Outfit Bold 700
- H2 marketing: Outfit SemiBold 600
- Body: Outfit Regular 400

**Mono: IBM Plex Mono** — Used for code snippets, system identifiers, automation names, and data values that represent machine-generated content.

### Spacing

4px base unit. The spacing scale runs from `--space-0-5` (2px) to `--space-64` (256px). Components use semantic aliases (`--padding-card`, `--padding-btn-x-md`, etc.) rather than raw scale values where possible. This makes global density adjustments a single-token change.

### Backgrounds

- **Light surfaces**: White (`--surface-base`) for primary content areas; `--surface-subtle` (`slate-50`) for page backgrounds; `--surface-muted` for recessed regions.
- **Dark surfaces**: `--surface-dark` (navy-900) for hero sections, sidebars on dark-mode views, and feature callouts.
- **Texture**: A subtle dot-grid pattern (2px dots, 24px grid, 8% opacity) can be applied to dark hero backgrounds. This evokes systematic thinking without being decorative.
- **No gradients** as primary backgrounds. Gradients are reserved for data visualizations and progress indicators only.
- **No full-bleed photography** in UI components. Photography lives in marketing contexts only.

### Cards

Cards use a 1px border (`--border-default`), `--shadow-sm`, and `--radius-card` (8px). On hover, the shadow steps up to `--shadow-md`. No colored left-border accent treatment. No gradient fill.

### Buttons

- Primary: navy-700 (#203654) background, white text
- Accent: gold-400 (#F5B335) background, white text
- Mint: mint-300 (#A8DDD8) background, navy text
- Rounded corners: 6–8px (brand guide spec)
- Secondary: white background, navy border, navy text
- Ghost: transparent background, slate text, subtle hover bg
- Destructive: error red background
- Radius: `--radius-btn` (6px) — not pill-shaped
- Press state: `scale(0.97)` with `--duration-fast` transition

### Icons

Lucide icons via CDN. Stroke weight: 1.5px. Size: 16px (sm), 18px (default), 20px (lg), 24px (xl). Never use emoji as icons. Never use unicode characters as icon substitutes in product UI.

### Shadows

Shadows are navy-tinted (not pure black) to maintain color coherence. The shadow scale runs from `xs` (barely perceptible, used on inputs) to `2xl` (used for modals and floating panels). Accent glows (`--shadow-teal`, `--shadow-orange`, `--shadow-navy`) are used for focus states on primary interactive elements.

### Borders

1px borders throughout. Border color progresses from `--border-subtle` (almost invisible) to `--border-strong` (clearly defined). No decorative borders. Borders mark containment and separation, not decoration.

### Corner Radii

- 4px (`--radius-sm`): Tight UI elements (tags, code snippets)
- 6px (`--radius-md`): Buttons, inputs, selects
- 8px (`--radius-lg`): Cards, panels
- 12px (`--radius-xl`): Large feature cards, dialogs
- Full (`--radius-full`): Badges, avatars, chips

### Motion and Animation

Motion is purposeful, never decorative. Transitions are fast (100–180ms) on interactive states. Page transitions: 300ms. Loading states use simple opacity fades, not bouncing spinners. No infinite decorative loops in product UI. Easing: `ease-out` as default (feels snappy and responsive). Spring easing (`--ease-back-out`) is reserved for confirmations and success states.

### Hover and Press States

- Buttons: background darkens by one step, box-shadow steps up
- Cards: shadow steps up from `sm` to `md`, subtle lift
- Links: color steps darker by one step
- Press (active): `scale(0.97)` over `100ms ease-out`
- Disabled: 40% opacity, cursor: not-allowed

### Transparency and Blur

Backdrop blur is used sparingly — only for floating overlays (modals, dropdown menus, tooltips) where layering context matters. Avoid glass-morphism as a decorative effect. Transparency on backgrounds: 90–95% for overlays, never for primary content surfaces.

### Imagery

When photography is used (marketing only): cool-to-neutral color temperature, high contrast, no grain filters. Subject: real professionals at work — not stock-photo handshakes. No lifestyle shots. No abstract architecture. Real estate context should be evident but secondary to the person.

---

## Iconography

Lucide icons (`https://unpkg.com/lucide@latest`) are the standard icon set. Usage rules:

- Stroke weight: `1.5` (default Lucide stroke)
- Never fill icons unless showing active/selected state
- Size: Always specify in px, never em. Standard sizes: 14, 16, 18, 20, 24
- Color: Inherit from parent text color unless semantically meaningful
- Never substitute emoji for icons in product UI
- No hand-rolled SVG icons — use Lucide or leave a placeholder

Key icons used across the system:
- Navigation: `layout-dashboard`, `settings`, `users`, `zap`, `layers`, `git-branch`
- Actions: `plus`, `edit-2`, `trash-2`, `copy`, `external-link`, `download`
- Status: `check-circle`, `alert-circle`, `x-circle`, `info`, `clock`
- Data: `trending-up`, `bar-chart-2`, `activity`, `database`
- Comms: `mail`, `phone`, `message-square`

---

## File Index

```
/
├── styles.css                    Global CSS entry point (@imports only)
├── readme.md                     This file
├── SKILL.md                      Agent skill definition
│
├── tokens/
│   ├── colors.css                Color custom properties
│   ├── typography.css            Font families, sizes, weights, line-heights
│   ├── spacing.css               Space scale + semantic aliases
│   ├── shadows.css               Elevation shadows + focus rings
│   ├── borders.css               Border widths + corner radii
│   └── animation.css             Durations, easings, named transitions
│
├── assets/
│   ├── logo.svg                  Full wordmark (light background)
│   ├── logo-dark.svg             Full wordmark (dark background)
│   └── logo-mark.svg             Icon-only mark
│
├── guidelines/
│   ├── colors-navy.card.html     Navy palette specimens
│   ├── colors-teal.card.html     Mint palette specimens
│   ├── colors-amber.card.html    Gold/accent palette specimens
│   ├── colors-slate.card.html    Slate neutral specimens
│   ├── colors-semantic.card.html Semantic color specimens
│   ├── colors-surface.card.html  Surface + text aliases
│   ├── type-display.card.html    Display (Outfit) specimens
│   ├── type-body.card.html       Body (Outfit) specimens
│   ├── type-scale.card.html      Full type scale reference
│   ├── type-mono.card.html       Mono (IBM Plex) specimens
│   ├── type-labels.card.html     Label / caps style
│   ├── spacing.card.html         Spacing scale visualization
│   ├── shadows.card.html         Shadow elevation reference
│   ├── borders.card.html         Radius + border reference
│   ├── animation.card.html       Motion reference
│   ├── brand-logo.card.html      Logo usage
│   └── brand-voice.card.html     Voice + tone reference
│
├── components/
│   ├── buttons/                  Button, IconButton
│   ├── forms/                    Input, Select, Checkbox, Radio, Switch
│   ├── feedback/                 Badge, Alert
│   ├── data/                     Card, Avatar
│   └── navigation/               Tabs
│
└── ui_kits/
    └── dashboard/                Level Up Leverage command center UI
```

---

## Components

| Component | Location | Starting Point |
|---|---|---|
| Button | `components/buttons/` | Yes |
| Input | `components/forms/` | No |
| Select | `components/forms/` | No |
| Checkbox | `components/forms/` | No |
| Radio | `components/forms/` | No |
| Switch | `components/forms/` | No |
| Badge | `components/feedback/` | No |
| Alert | `components/feedback/` | No |
| Card | `components/data/` | Yes |
| Avatar | `components/data/` | No |
| Tabs | `components/navigation/` | No |

---

## UI Kits

| Kit | Location | Description |
|---|---|---|
| Dashboard | `ui_kits/dashboard/` | Command center for real estate professionals — metrics, systems, tech stack |
