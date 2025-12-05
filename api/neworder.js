import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const filePath = path.join(process.cwd(), "public", "data.json");

  const data = {
    product: req.body.product || null,
    amount: req.body.amount || null,
    show: true
  };

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ ok: true, saved: data });
}
