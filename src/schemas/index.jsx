import * as yup from "yup";

const mobileRules = /^(\+98|0)?9\d{9}$/;

export const loginSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("لطفا این قسمت را خالی نگذارید")
    .matches(mobileRules, { message: "شماره موبایل نادرست است" }),
});

export const verifySchema = yup.object().shape({
  verifyNumber: yup
    .string()
    .required("")
    .matches(/^[0-9]+$/, "مقدار وارد شده باید فقط شامل عدد باشد."),
});
const commonErrorAddress = "اینجا را خالی نگذارید";
export const addressSchema = yup.object().shape({
  address: yup.string().required(commonErrorAddress),
  state: yup.string().required(commonErrorAddress),
  city: yup.string().required(commonErrorAddress),
  unit: yup
    .number()
    .typeError("شماره پلاک باید فقط شامل عدد انگلیسی باشد")
    .required(commonErrorAddress),
  postalCode: yup
    .number()
    .min(1000000000, "کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد")
    .max(9999999999, "کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد")
    .typeError("کد‌پستی باید ۱۰ رقم و بدون خط تیره و انگلیسی باشد")
    .required(commonErrorAddress),
});

export const presonalInfoSchema = yup.object().shape({
  name: yup
    .string()
    .required(commonErrorAddress)
    .max(20, "مقدار وارد شده طولانی هست"),
  family: yup
    .string()
    .required(commonErrorAddress)
    .max(20, "مقدار وارد شده طولانی هست"),
  email: yup
    .string()
    // .required(commonErrorAddress)
    .matches(
      // Regular expression for email validation
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "ایمیل وارد شده صحیح نیست"
    ),
  mobile: yup
    .string()
    .required(commonErrorAddress)
    .matches(mobileRules, { message: "شماره موبایل نادرست است" }),
});
