import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "data.json");

  // Falls Datei nicht existiert → Standardwerte zurückgeben
  if (!fs.existsSync(filePath)) {
    return res.status(200).json({
      product: null,
      amount: null,
      show: false
    });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.status(200).json(data);
}
