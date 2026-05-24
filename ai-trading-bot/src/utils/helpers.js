export function formatCurrency(value) {

  return `₹${Number(value).toFixed(2)}`;
}

export function calculatePnL(
  currentPrice,
  buyPrice,
  quantity
) {

  return (
    (currentPrice - buyPrice)
    * quantity
  ).toFixed(2);
}