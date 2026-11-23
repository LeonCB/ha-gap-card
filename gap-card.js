/**
 * Gap Card - an invisible spacer card for Home Assistant dashboards.
 *
 *   type: custom:gap-card
 *   height: 12        # number = px, or any CSS length ("1rem")
 *
 * Drop-in replacement for the gap-card that ships with layout-card.
 */
const CARD_VERSION = "2026.11.1";

const toCssLength = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  return typeof value === "number" || /^-?\d+(\.\d+)?$/.test(String(value))
    ? `${value}px`
    : String(value);
};

class GapCard extends HTMLElement {
  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(_hass) {}

  connectedCallback() {
    this._render();
  }

  _render() {
    if (!this._config) return;
    const height = toCssLength(this._config.height) ?? "8px";
    this.style.display = "block";
    this.style.height = height;
    this.style.minHeight = height;
    this.style.background = "none";
    this.style.border = "none";
    this.style.boxShadow = "none";
    this.style.pointerEvents = "none";
  }

  getCardSize() {
    const px = parseFloat(toCssLength(this._config?.height) ?? "8");
    return Math.max(0, Math.round(px / 50));
  }

  getGridOptions() {
    return { columns: "full", rows: "auto", min_rows: 0 };
  }
}

if (!customElements.get("gap-card")) {
  customElements.define("gap-card", GapCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "gap-card",
    name: "Gap Card",
    description: "Invisible spacer card with a configurable height.",
  });
  console.info(
    `%c GAP-CARD %c ${CARD_VERSION} `,
    "color:white;background:#2581ab;font-weight:700;",
    "color:#2581ab;background:white;font-weight:700;"
  );
}
