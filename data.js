(function () {
  const PRODUCTS = [
    { id: "kartu-nama", name: "Kartu Nama", base: 15000, unit: "Box", keywords: ["kartu nama", "kartu", "id card"], desc: "Kartu kecil perkenalan bisnis", min: 1 },
    { id: "thankyou-card", name: "Thank You Card", base: 2300, unit: "Lembar A3+", keywords: ["thank you", "thankyou", "thanks"], desc: "Kartu ucapan terima kasih", min: 1 },
    { id: "hang-tag", name: "Hang Tag", base: 2300, unit: "Lembar A3+", keywords: ["hang tag", "hangtag", "label gantung"], desc: "Label gantung produk", min: 1 },
    { id: "poster", name: "Poster", base: 2300, unit: "Lembar A3+", keywords: ["poster"], desc: "Poster promosi", min: 1 },
    { id: "tumbler", name: "Tumbler", base: 31500, unit: "Pcs", keywords: ["tumbler", "botol"], desc: "Wadah minum custom", min: 1 },
    { id: "mug", name: "Mug", base: 20000, unit: "Pcs", keywords: ["mug", "cangkir", "gelas"], desc: "Cangkir + pegangan custom", min: 1 },
    { id: "lanyard", name: "Lanyard", base: 13000, unit: "Pcs", keywords: ["lanyard", "tali"], desc: "Tali ID card", min: 1 },
    { id: "ganci", name: "Gantungan Kunci", base: 4000, unit: "Pcs", keywords: ["gantungan", "ganci", "keychain"], desc: "Aksesori gantungan kunci", min: 1 },
    { id: "banner", name: "Banner", base: 14000, unit: "Pcs", keywords: ["banner", "spanduk", "mm"], desc: "Media promosi panjang", min: 1 },
    { id: "x-banner", name: "X-Banner", base: 50000, unit: "Pcs", keywords: ["x banner", "xbanner"], desc: "Banner + struktur X", min: 1 },
    { id: "rollup", name: "Roll Up Banner", base: 175000, unit: "Pcs", keywords: ["roll", "rollup"], desc: "Banner gulung + kaset", min: 1 },
    { id: "tripod", name: "Tripod Banner", base: 180000, unit: "Pcs", keywords: ["tripod"], desc: "Banner + kaki tripod", min: 1 },
  ];
  const WA_NUMBER = "6281290003248";
  const WA_FALLBACK = "Maaf, itu di luar daftar pricelist. Hubungi WA 081290003248 untuk hitungan custom.";
  const NOTE = "ESTIMASI dari pricelist web (mulai dari). Harga final setelah cek file & finishing via WA.";
  const root = typeof window !== "undefined" ? window : globalThis;
  root.PRODUCTS = PRODUCTS; root.WA_NUMBER = WA_NUMBER; root.WA_FALLBACK = WA_FALLBACK; root.NOTE = NOTE;
})();