const assert = require("node:assert");
const { test } = require("node:test");
global.window = {};
require("./data.js");
require("./quote.js");
test("kartu nama 2 box = 2x15000", () => {
  const r = window.calcQuote({ productId: "kartu-nama", qty: 2 });
  assert.strictEqual(r.total, 30000); assert.ok(r.ok);
});
test("banner qty 0 ditolak", () => {
  const r = window.calcQuote({ productId: "banner", qty: 0 });
  assert.strictEqual(r.ok, false);
});
test("produk ngawur fallback", () => {
  const r = window.calcQuote({ productId: "pesawat", qty: 1 });
  assert.strictEqual(r.ok, false); assert.ok(r.message.includes("WA"));
});
test("chatbot jawab mug 20K", () => {
  const out = window.answerRembo("mug berapa?");
  assert.ok(out.includes("20K") || out.includes("20000") || out.includes("20.000"));
});