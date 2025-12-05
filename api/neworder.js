export default function handler(req, res) {
  const fs = require("fs");
  const path = require("path");

  const data = {
    product: req.body.product,
    amount: req.body.amount,
    show: true
  };

  const filePath = path.join(process.cwd(), "public", "data.json");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(200).json({ ok: true });
}
