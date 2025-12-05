export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  global.orderData = {
    product: req.body.product,
    amount: req.body.amount,
    show: true
  };

  return res.status(200).json({ ok: true });
}
