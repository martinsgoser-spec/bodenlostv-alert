export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { product, amount } = req.body;

  if (!product || !amount) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Speichere die Daten im globalen Speicher (nur während der Laufzeit)
  global.orderData = { product, amount, show: true };

  return res.status(200).json({ ok: true });
}
