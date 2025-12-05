export default function handler(req, res) {
  // Falls noch nie eine Bestellung gespeichert wurde → show = false
  if (!global.orderData) {
    return res.status(200).json({
      product: null,
      amount: null,
      show: false
    });
  }

  // Gespeicherte Bestellung zurückgeben
  return res.status(200).json(global.orderData);
}
