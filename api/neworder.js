let lastOrder = {
  product: null,
  amount: null,
  show: false
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { product, amount } = req.body;

  lastOrder = {
    product: product || null,
    amount: amount || null,
    show: true
  };

  return res.status(200).json({ ok: true });
}

export { lastOrder };
