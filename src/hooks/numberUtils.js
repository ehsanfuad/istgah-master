import { useSelector } from "react-redux";
const jalaliMoment = require("jalali-moment");
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
export const sumDiscountCart = (products) => {
  let discount = 0;
  products.forEach((product) => {
    if (product.discountedPrice) {
      discount =
        discount + (product.price - product.discountedPrice) * product.quantity;
    }
  });
  return discount > 0 ? formatMoney(discount) : null;
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
function numbersToPersian(text) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return text.replace(/[0-9]/g, (match) => persianNumbers[parseInt(match)]);
}
export function convertToPersianDate(gregorianDate) {
  const parsedGregorianDate = jalaliMoment(gregorianDate);
  const persianDate = parsedGregorianDate.format("HH:mm - jYYYY/jM/jD");
  return numbersToPersian(persianDate);
}

export function convertGregorianToPersianWithDayOfWeek(gregorianDate) {
  const gregorianMoment = jalaliMoment(gregorianDate, "YYYY-MM-DD", "en");
  const persianMoment = gregorianMoment.locale("fa");

  const persianDaysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

  // Calculate the difference between the Persian and Gregorian calendars' first day of the week
  const firstDayOfWeekDifference = 6; // Persian calendar: Saturday is the first day of the week

  const gregorianDayOfWeek = gregorianMoment.format("d");
  const adjustedDayOfWeek =
    (parseInt(gregorianDayOfWeek) + firstDayOfWeekDifference) % 7;

  const persianDayOfWeek = persianDaysOfWeek[adjustedDayOfWeek];

  const farsiMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const farsiMonth = farsiMonths[persianMoment.format("M") - 1];

  return `${persianMoment.format("jD")} ${farsiMonth} `;
}

// export function convertGregorianToPersianWithDayOfWeek(gregorianDate) {
//   const gregorianMoment = jalaliMoment(gregorianDate);
//   const persianDate = gregorianMoment.format("jYYYY/jM/jD", "fa");

//   const dayOfWeek = gregorianMoment.format("dddd", "fa");
//   const day = gregorianMoment.format("jD");
//   const month = gregorianMoment.format("jMMMM", "fa");

//   return `${dayOfWeek} ${day} ${month}`;
// }
// export function convertGregorianToPersianWithDayOfWeek(gregorianDate) {
//   const gregorianMoment = jalaliMoment(gregorianDate);
//   const persianDate = gregorianMoment.format("jD", "fa");

//   const englishDaysOfWeek = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];
//   const persianDaysOfWeek = [
//     "شنبه",
//     "یکشنبه",
//     "دوشنبه",
//     "سه‌شنبه",
//     "چهارشنبه",
//     "پنج‌شنبه",
//     "جمعه",
//   ];

//   const dayOfWeekIndex = gregorianMoment.format("d"); // 0 for Saturday, 1 for Sunday, etc.
//   const persianDayOfWeek = persianDaysOfWeek[dayOfWeekIndex];

//   return `${persianDayOfWeek} ${numbersToPersian(persianDate)}`;
// }
