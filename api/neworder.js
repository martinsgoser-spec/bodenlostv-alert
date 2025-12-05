import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { product, amount } = req.body;

  const data = {
    product,
    amount,
    show: true // Overlay auslösen
  };

  const filePath = path.join(process.cwd(), "public", "data.json");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(200).json({ ok: true });
}
