# Gap Card

A tiny invisible spacer card for Home Assistant dashboards. Drop-in replacement for the
`custom:gap-card` that ships with layout-card, so you can drop layout-card when you only
needed the spacer.

## Install

Marketplace (HACS): add `LeonCB/ha-gap-card` as a custom repository, category **Dashboard / plugin**,
then download it. The dashboard resource is registered automatically.

## Usage

```yaml
type: custom:gap-card
height: 12
```

| Option   | Default | Description                                      |
|----------|---------|--------------------------------------------------|
| `height` | `8`     | Number = pixels, or any CSS length (`1rem`)      |
| `width`  | -       | Optional width, same rules as `height`           |

The card has no background, border or shadow and ignores pointer events.

If both layout-card and this card are loaded, whichever loads first provides `custom:gap-card`.
