import { useSelector } from "react-redux";

export function calDiscountPercent(price, discountedPrice) {
  if (discountedPrice) {
    let percentege = (((price - discountedPrice) * 100) / price).toFixed();
    percentege = parseInt(percentege).toLocaleString("fa-IR");
    return percentege + "%";
  }
}
export function formatMoney(number) {
  const formattedNumber = number?.toLocaleString("fa-IR", {
    useGrouping: true,
    minimumFractionDigits: 0,
  });

  return formattedNumber;
}

export function formatNumber(number) {
  return number?.toLocaleString("fa-IR");
}

export function GetProductType(product_types) {
  const color = useSelector((state) => state.cart.color);
  const weight = useSelector((state) => state.cart.weight);
  let dynamicType = null;
  const dynamicTypes = {
    2: color,
    1: weight,
  };
  product_types.map((type, index) => {
    if (type.name == "آسیاب" || type.name == "ساده") {
    } else {
      dynamicType = dynamicTypes[type.id];
    }
  });

  return dynamicType;
}

export const getCartQuantity = (products) => {
  var quantity = 0;
  products.forEach((product) => {
    quantity += product.quantity;
  });
  return quantity;
};

export const getCartPrice = (products) => {
  let price = 0;
  products.forEach((product) => {
    let p = product.discountedPrice ? product.discountedPrice : product.price;
    price += p * product.quantity;
  });
  return price;
};

export const getRawCartPrice = (products) => {
  let price = 0;
  products.forEach((product) => {
    price += product.price * product.quantity;
  });
  return formatMoney(price);
};
export const getDiscountedCart = (products) => {
  let price = 0;
  products.forEach((product) => {
    if (product.discountedPrice) {
      price += product.discountedPrice * product.quantity;
    }
  });
  return price > 0 ? formatMoney(price) : null;
};
export function showPrice(dynamicType, product) {
  return dynamicType?.discountedPrice || product?.discountedPrice
    ? formatMoney(
        dynamicType?.discountedPrice
          ? dynamicType?.discountedPrice
          : product?.discountedPrice
      )
    : formatMoney(dynamicType?.price ? dynamicType?.price : product?.price);
}
