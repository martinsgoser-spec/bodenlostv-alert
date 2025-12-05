let lastOrder = {
  product: null,
  amount: null,
  show: false,
};

export default function handler(req, res) {
  // 🔵 POST = Zapier schreibt neue Bestellung
  if (req.method === "POST") {
    const { product, amount } = req.body || {};

    lastOrder = {
      product: product ?? null,
      amount: amount ?? null,
      show: true,
    };

    return res.status(200).json({ ok: true });
  }

  // 🟢 GET = Overlay / Browser liest aktuelle Bestellung
  if (req.method === "GET") {
    const current = lastOrder;

    // nach dem Abholen direkt verbrauchen
    if (lastOrder.show) {
      lastOrder = { ...lastOrder, show: false };
    }

    return res.status(200).json(current);
  }

  // alles andere ablehnen
  return res.status(405).json({ error: "Method not allowed" });
}
