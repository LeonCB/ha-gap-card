# Gap Card

![version](https://img.shields.io/github/v/release/LeonCB/ha-gap-card?label=version)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.11%2B-41BDF5?logo=homeassistant&logoColor=white)
![license](https://img.shields.io/badge/license-MIT-green)

[![Open your Home Assistant instance and open this repository in the Marketplace.](https://my.home-assistant.io/badges/marketplace_repository.svg)](https://my.home-assistant.io/redirect/marketplace_repository/?owner=LeonCB&repository=ha-gap-card&category=plugin)

A tiny, invisible spacer card for Home Assistant dashboards.
Drop-in replacement for the `custom:gap-card` that ships with layout-card, so you can drop
layout-card if the spacer was all you used it for.

## Requirements

Home Assistant 2024.11 or newer (sections view with `grid_options`). Installing through the Marketplace requires a Home Assistant version that includes it (2026.11 or newer); on older versions, use HACS or the manual install.

## Installation

### Marketplace (recommended)

1. Click the button above, or add `LeonCB/ha-gap-card` as a custom repository with category **Dashboard**.
2. Download **Gap Card** and hard-refresh your browser.

The resource is added automatically.

### Manual

1. Download the latest release and copy `gap-card.js` to `config/www/`.
2. Add a JavaScript module resource at `/local/gap-card.js` under Settings → Dashboards → Resources.
3. Hard-refresh your browser.

## Usage

```yaml
type: custom:gap-card
height: 12
```

| Option   | Default                     | Description                                    |
|----------|-----------------------------|------------------------------------------------|
| `height` | `var(--gap-height, 8px)`    | A number is pixels, or any CSS length (`1rem`) |

### Theme variable

Leave out `height` to size every gap from your theme with `--gap-height`:

```yaml
My Theme:
  gap-height: "12px"
```

```yaml
type: custom:gap-card
```

An explicit `height` on a card always wins over the theme variable. Without either, the gap is 8px.

The card has no background, border or shadow and ignores clicks.

If layout-card and this card are both loaded, whichever loads first provides `custom:gap-card`.

## License

[MIT License](LICENSE)
