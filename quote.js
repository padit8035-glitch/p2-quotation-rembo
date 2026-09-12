(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  function find(id) { return (root.PRODUCTS || []).find((p) => p.id === id); }
  function rp(n) { return "Rp" + n.toLocaleString("id-ID"); }
  root.calcQuote = function ({ productId, qty }) {
    const p = find(productId);
    if (!p) return { ok: false, message: root.WA_FALLBACK };
    const q = Number(qty);
    if (!Number.isFinite(q) || q < p.min) return { ok: false, message: `Qty minimal ${p.min} ${p.unit}. ${root.WA_FALLBACK}` };
    if (q > 100000) return { ok: false, message: `Qty terlalu besar, ${root.WA_FALLBACK}` };
    return { ok: true, product: p.name, unit: p.unit, base: p.base, qty: q, total: p.base * q, note: root.NOTE };
  };
  root.buildWA = function (quote, customerName) {
    const nama = (customerName || "-").slice(0, 60);
    const text = quote.ok ? `Hi, saya tahu Rembo dari website. Mau tanya cetak ${quote.product} x${quote.qty} (${quote.unit}). Estimasi web: ${rp(quote.total)}. Nama: ${nama}. Bisa diinfokan rinci?` : `Hi, mau tanya custom. Nama: ${nama}. ${quote.message}`;
    return `https://api.whatsapp.com/send/?phone=${root.WA_NUMBER}&text=${encodeURIComponent(text)}`;
  };
  root.answerRembo = function (query) {
    const q = (query || "").toLowerCase();
    if (!q.trim()) return root.WA_FALLBACK;
    for (const p of root.PRODUCTS || []) {
      if (p.keywords.some((k) => q.includes(k))) return `${p.name}\nMulai dari: ${rp(p.base)}/${p.unit}\n${p.desc}\n${root.NOTE}`;
    }
    if (q.includes("jam") || q.includes("buka") || q.includes("alamat") || q.includes("lokasi")) return `Rembo Printing\nJl. Otista Raya No.137, Jaktim\nJam: 08.00-23.00\n${root.NOTE}`;
    return root.WA_FALLBACK;
  };
})();