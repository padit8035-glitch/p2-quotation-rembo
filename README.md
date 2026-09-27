# Printing Quote Generator

[![test](https://github.com/padit8035-glitch/p2-quotation-rembo/actions/workflows/test.yml/badge.svg)](https://github.com/padit8035-glitch/p2-quotation-rembo/actions/workflows/test.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A self-serve quotation tool for a printing business. The site used to advertise prices as "starting from" and force every real quote through a WhatsApp conversation, so I built the calculator: pick a product, set a quantity, get a line-item total and a pre-filled WhatsApp message.

**Pure front-end.** No backend, no API keys, no build step.

## How it works

```
product + qty -> calcQuote() validates min qty and upper bound
                 | valid -> total, unit price, order summary
                 | invalid -> reason + WhatsApp fallback
             -> buildWA() -> pre-filled wa.me link
```

Also ships a small keyword chatbot (`answerRembo`) so visitors can ask "mug berapa?" and get the base price plus the shop's WhatsApp contact, which then feeds the same quote flow.

## Files

| File | Role |
| --- | --- |
| `index.html` | UI: product picker, quantity input, summary, print view |
| `data.js` | 12 products with base price, unit, keywords, minimum quantity |
| `quote.js` | Pure logic: `calcQuote`, `buildWA`, `answerRembo` |
| `quote.test.js` | Tests (`node:test`) |

## Run

Open `index.html` in a browser.

## Test

```bash
node quote.test.js   # 4 tests: arithmetic, min-qty rejection, unknown product, chatbot
```

## Notes

- Prices and business details are sample data for the portfolio piece.
- Currency formatting is `id-ID`; totals are integer rupiah.

MIT licensed.
