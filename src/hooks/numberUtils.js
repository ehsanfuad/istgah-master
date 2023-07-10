export function calDiscountPercent(price, discountedPrice) {
  if (discountedPrice) {
    let percentege = (((price - discountedPrice) * 100) / price).toFixed();
    percentege = parseInt(percentege).toLocaleString("fa-IR");
    return percentege + "%";
  }
}
export function formatMoney(number) {
  const formattedNumber = number.toLocaleString("fa-IR", {
    useGrouping: true,
    minimumFractionDigits: 0,
  });

  return formattedNumber;
}

export function formatNumber(number) {
  return number.toLocaleString("fa-IR");
}
