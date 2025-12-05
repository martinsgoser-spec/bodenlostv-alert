let lastOrder = {
  product: null,
  amount: null,
  show: false
};

export default function handler(req, res) {
  if (req.method === "GET") {
    const { product, amount, show } = req.query;

    if (product && amount && show) {
      lastOrder = {
        product,
        amount,
        show: show === "true"
      };

      return res.status(200).json({ ok: true, mode: "GET-triggered", lastOrder });
    }

    return res.status(200).json({ ok: true, lastOrder });
  }

  if (req.method === "POST") {
    const { product, amount, show } = req.body;

    lastOrder = {
      product: product || null,
      amount: amount || null,
      show: show ?? true
    };

    return res.status(200).json({ ok: true, mode: "POST-triggered", lastOrder });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

export { lastOrder };
