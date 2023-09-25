import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import { Formik, Form, Field } from "formik";
import { theme } from "../../../../Theme";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import TextField from "@mui/material/TextField";
//rtl
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { addressSchema } from "../../../../schemas/index";
import usePostData from "../../../../hooks/usePostData";
import jwt_decode from "jwt-decode";
import Loading from "../../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  getAddressId,
  updateAddress,
} from "../../../../store/addressReducer";

function AddressForm({ setShowForm, location, handleCloseMap }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const addresses = useSelector((state) => state.address.addresses);
  const addressId = useSelector((state) => state.address.id);
  const dispatch = useDispatch();
  let address = addresses.find((item) => item.id == addressId);
  const {
    postData,
    isLoading,
    error: addressError,
    result: addressResult,
    statusRequset: addressStatus,
  } = usePostData();

  const jwt = localStorage.getItem("jwt");
  let jwtErrorMessage = null;
  let userId = null;
  try {
    const decoded = jwt_decode(jwt);
    userId = decoded.id;
  } catch (error) {
    jwtErrorMessage = error.message;
    console.log("error", error);
  }

  useEffect(() => {
    //when new address has been created add to redux and set to user default address
    console.log("addressResult", addressResult);
    address = addresses.find((item) => item.id == addressId);
    if (addressResult?.data?.id && addressId === null) {
      handleCloseMap();
      const selectedAddress = {
        selectedAddress: addressResult.data.id,
      };
      postData(`/users/${userId}`, selectedAddress, "PUT");
      const newAddressId = addressResult?.data.id;
      let addressObj = addressResult?.data.attributes;
      addressObj["id"] = newAddressId;
      dispatch(addAddress(addressObj));
      dispatch(getAddressId(newAddressId));
    }
  }, [addressResult]);
  const allStates = [
    {
      id: 1,
      label: "آذربایجان شرقی",
    },
    {
      id: 2,
      label: "آذربایجان غربی",
    },
    {
      id: 3,
      label: "اردبیل",
    },
    {
      id: 4,
      label: "اصفهان",
    },
    {
      id: 5,
      label: "البرز",
    },
    {
      id: 6,
      label: "ایلام",
    },
    {
      id: 7,
      label: "بوشهر",
    },
    {
      id: 8,
      label: "تهران",
    },
    {
      id: 9,
      label: "چهارمحال و بختیاری",
    },
    {
      id: 10,
      label: "خراسان جنوبی",
    },
    {
      id: 11,
      label: "خراسان رضوی",
    },
    {
      id: 12,
      label: "خراسان شمالی",
    },
    {
      id: 13,
      label: "خوزستان",
    },
    {
      id: 14,
      label: "زنجان",
    },
    {
      id: 15,
      label: "سمنان",
    },
    {
      id: 16,
      label: "سیستان و بلوچستان",
    },
    {
      id: 17,
      label: "فارس",
    },
    {
      id: 18,
      label: "قزوین",
    },
    {
      id: 19,
      label: "قم",
    },
    {
      id: 20,
      label: "کردستان",
    },
    {
      id: 21,
      label: "کرمان",
    },
    {
      id: 22,
      label: "کرمانشاه",
    },
    {
      id: 23,
      label: "کهگیلویه و بویراحمد",
    },
    {
      id: 24,
      label: "گلستان",
    },
    {
      id: 25,
      label: "لرستان",
    },
    {
      id: 26,
      label: "گیلان",
    },
    {
      id: 27,
      label: "مازندران",
    },
    {
      id: 28,
      label: "مرکزی",
    },
    {
      id: 29,
      label: "هرمزگان",
    },
    {
      id: 30,
      label: "همدان",
    },
    {
      id: 31,
      label: "یزد",
    },
  ];
  const allCities = [
    {
      id: 1,
      cities: [
        { id: 1, label: "اسکو" },
        { id: 2, label: "اهر" },
        { id: 3, label: "ایلخچی" },
        { id: 4, label: "آبش احمد" },
        { id: 5, label: "آذرشهر" },
        { id: 6, label: "آقکند" },
        { id: 7, label: "باسمنج" },
        { id: 8, label: "بخشایش" },
        { id: 9, label: "بستان آباد" },
        { id: 10, label: "بناب" },
        { id: 11, label: "بناب جدید" },
        { id: 12, label: "تبریز" },
        { id: 13, label: "ترک" },
        { id: 14, label: "ترکمانچای" },
        { id: 15, label: "تسوج" },
        { id: 16, label: "تیکمه داش" },
        { id: 17, label: "جلفا" },
        { id: 18, label: "خاروانا" },
        { id: 19, label: "خامنه" },
        { id: 20, label: "خراجو" },
        { id: 21, label: "خسروشهر" },
        { id: 22, label: "خضرلو" },
        { id: 23, label: "خمارلو" },
        { id: 24, label: "خواجه" },
        { id: 25, label: "دوزدوزان" },
        { id: 26, label: "زرنق" },
        { id: 27, label: "زنوز" },
        { id: 28, label: "سراب" },
        { id: 29, label: "سردرود" },
        { id: 30, label: "سهند" },
        { id: 31, label: "سیس" },
        { id: 32, label: "سیه رود" },
        { id: 33, label: "شبستر" },
        { id: 34, label: "شربیان" },
        { id: 35, label: "شرفخانه" },
        { id: 36, label: "شندآباد" },
        { id: 37, label: "صوفیان" },
        { id: 38, label: "عجب شیر" },
        { id: 39, label: "قره آغاج" },
        { id: 40, label: "کشکسرای" },
        { id: 41, label: "کلوانق" },
        { id: 42, label: "کلیبر" },
        { id: 43, label: "کوزه کنان" },
        { id: 44, label: "گوگان" },
        { id: 45, label: "لیلان" },
        { id: 46, label: "مراغه" },
        { id: 47, label: "مرند" },
        { id: 48, label: "ملکان" },
        { id: 49, label: "ملک کیان" },
        { id: 50, label: "ممقان" },
        { id: 51, label: "مهربان" },
        { id: 52, label: "میانه" },
        { id: 53, label: "نظرکهریزی" },
        { id: 54, label: "هادی شهر" },
        { id: 55, label: "هرگلان" },
        { id: 56, label: "هریس" },
        { id: 57, label: "هشترود" },
        { id: 58, label: "هوراند" },
        { id: 59, label: "وایقان" },
        { id: 60, label: "ورزقان" },
        { id: 61, label: "یامچی" },
      ],
    },
    {
      id: 2,
      cities: [
        { id: 62, label: "ارومیه" },
        { id: 63, label: "اشنویه" },
        { id: 64, label: "ایواوغلی" },
        { id: 65, label: "آواجیق" },
        { id: 66, label: "باروق" },
        { id: 67, label: "بازرگان" },
        { id: 68, label: "بوکان" },
        { id: 69, label: "پلدشت" },
        { id: 70, label: "پیرانشهر" },
        { id: 71, label: "تازه شهر" },
        { id: 72, label: "تکاب" },
        { id: 73, label: "چهاربرج" },
        { id: 74, label: "خوی" },
        { id: 75, label: "دیزج دیز" },
        { id: 76, label: "ربط" },
        { id: 77, label: "سردشت" },
        { id: 78, label: "سرو" },
        { id: 79, label: "سلماس" },
        { id: 80, label: "سیلوانه" },
        { id: 81, label: "سیمینه" },
        { id: 82, label: "سیه چشمه" },
        { id: 83, label: "شاهین دژ" },
        { id: 84, label: "شوط" },
        { id: 85, label: "فیرورق" },
        { id: 86, label: "قره ضیاءالدین" },
        { id: 87, label: "قطور" },
        { id: 88, label: "قوشچی" },
        { id: 89, label: "کشاورز" },
        { id: 90, label: "گردکشانه" },
        { id: 91, label: "ماکو" },
        { id: 92, label: "محمدیار" },
        { id: 93, label: "محمودآباد" },
        { id: 94, label: "مهاباد" },
        { id: 95, label: "میاندوآب" },
        { id: 96, label: "میرآباد" },
        { id: 97, label: "نالوس" },
        { id: 98, label: "نقده" },
        { id: 99, label: "نوشین" },
      ],
    },
    {
      id: 3,
      cities: [
        { id: 100, label: "اردبیل" },
        { id: 101, label: "اصلاندوز" },
        { id: 102, label: "آبی بیگلو" },
        { id: 103, label: "بیله سوار" },
        { id: 104, label: "پارس آباد" },
        { id: 105, label: "تازه کند" },
        { id: 106, label: "تازه کندانگوت" },
        { id: 107, label: "جعفرآباد" },
        { id: 108, label: "خلخال" },
        { id: 109, label: "رضی" },
        { id: 110, label: "سرعین" },
        { id: 111, label: "عنبران" },
        { id: 112, label: "فخرآباد" },
        { id: 113, label: "کلور" },
        { id: 114, label: "کوراییم" },
        { id: 115, label: "گرمی" },
        { id: 116, label: "گیوی" },
        { id: 117, label: "لاهرود" },
        { id: 118, label: "مشگین شهر" },
        { id: 119, label: "نمین" },
        { id: 120, label: "نیر" },
        { id: 121, label: "هشتجین" },
        { id: 122, label: "هیر" },
      ],
    },
    {
      id: 4,
      cities: [
        { id: 123, label: "ابریشم" },
        { id: 124, label: "ابوزیدآباد" },
        { id: 125, label: "اردستان" },
        { id: 126, label: "اژیه" },
        { id: 127, label: "اصفهان" },
        { id: 128, label: "افوس" },
        { id: 129, label: "انارک" },
        { id: 130, label: "ایمانشهر" },
        { id: 131, label: "آران وبیدگل" },
        { id: 132, label: "بادرود" },
        { id: 133, label: "باغ بهادران" },
        { id: 134, label: "بافران" },
        { id: 135, label: "برزک" },
        { id: 136, label: "برف انبار" },
        { id: 137, label: "بهاران شهر" },
        { id: 138, label: "بهارستان" },
        { id: 139, label: "بوئین و میاندشت" },
        { id: 140, label: "پیربکران" },
        { id: 141, label: "تودشک" },
        { id: 142, label: "تیران" },
        { id: 143, label: "جندق" },
        { id: 144, label: "جوزدان" },
        { id: 145, label: "جوشقان و کامو" },
        { id: 146, label: "چادگان" },
        { id: 147, label: "چرمهین" },
        { id: 148, label: "چمگردان" },
        { id: 149, label: "حبیب آباد" },
        { id: 150, label: "حسن آباد" },
        { id: 151, label: "حنا" },
        { id: 152, label: "خالدآباد" },
        { id: 153, label: "خمینی شهر" },
        { id: 154, label: "خوانسار" },
        { id: 155, label: "خور" },
        { id: 157, label: "خورزوق" },
        { id: 158, label: "داران" },
        { id: 159, label: "دامنه" },
        { id: 160, label: "درچه" },
        { id: 161, label: "دستگرد" },
        { id: 162, label: "دهاقان" },
        { id: 163, label: "دهق" },
        { id: 164, label: "دولت آباد" },
        { id: 165, label: "دیزیچه" },
        { id: 166, label: "رزوه" },
        { id: 167, label: "رضوانشهر" },
        { id: 168, label: "زاینده رود" },
        { id: 169, label: "زرین شهر" },
        { id: 170, label: "زواره" },
        { id: 171, label: "زیباشهر" },
        { id: 172, label: "سده لنجان" },
        { id: 173, label: "سفیدشهر" },
        { id: 174, label: "سگزی" },
        { id: 175, label: "سمیرم" },
        { id: 176, label: "شاهین شهر" },
        { id: 177, label: "شهرضا" },
        { id: 178, label: "طالخونچه" },
        { id: 179, label: "عسگران" },
        { id: 180, label: "علویجه" },
        { id: 181, label: "فرخی" },
        { id: 182, label: "فریدونشهر" },
        { id: 183, label: "فلاورجان" },
        { id: 184, label: "فولادشهر" },
        { id: 185, label: "قمصر" },
        { id: 186, label: "قهجاورستان" },
        { id: 187, label: "قهدریجان" },
        { id: 188, label: "کاشان" },
        { id: 189, label: "کرکوند" },
        { id: 190, label: "کلیشاد و سودرجان" },
        { id: 191, label: "کمشچه" },
        { id: 192, label: "کمه" },
        { id: 193, label: "کهریزسنگ" },
        { id: 194, label: "کوشک" },
        { id: 195, label: "کوهپایه" },
        { id: 196, label: "گرگاب" },
        { id: 197, label: "گزبرخوار" },
        { id: 198, label: "گلپایگان" },
        { id: 199, label: "گلدشت" },
        { id: 200, label: "گلشهر" },
        { id: 201, label: "گوگد" },
        { id: 202, label: "لای بید" },
        { id: 203, label: "مبارکه" },
        { id: 204, label: "مجلسی" },
        { id: 205, label: "محمدآباد" },
        { id: 206, label: "مشکات" },
        { id: 207, label: "منظریه" },
        { id: 208, label: "مهاباد" },
        { id: 209, label: "میمه" },
        { id: 210, label: "نائین" },
        { id: 211, label: "نجف آباد" },
        { id: 212, label: "نصرآباد" },
        { id: 213, label: "نطنز" },
        { id: 214, label: "نوش آباد" },
        { id: 215, label: "نیاسر" },
        { id: 216, label: "نیک آباد" },
        { id: 217, label: "هرند" },
        { id: 218, label: "ورزنه" },
        { id: 219, label: "ورنامخواست" },
        { id: 220, label: "وزوان" },
        { id: 221, label: "ونک" },
      ],
    },
    {
      id: 5,
      cities: [
        { id: 222, label: "اسارا" },
        { id: 223, label: "اشتهارد" },
        { id: 224, label: "تنکمان" },
        { id: 225, label: "چهارباغ" },
        { id: 226, label: "سعید آباد" },
        { id: 227, label: "شهر جدید هشتگرد" },
        { id: 228, label: "طالقان" },
        { id: 229, label: "کرج" },
        { id: 230, label: "کمال شهر" },
        { id: 231, label: "کوهسار" },
        { id: 232, label: "گرمدره" },
        { id: 233, label: "ماهدشت" },
        { id: 234, label: "محمدشهر" },
        { id: 235, label: "مشکین دشت" },
        { id: 236, label: "نظرآباد" },
        { id: 237, label: "هشتگرد" },
        { id: 1117, label: "فردیس" },
        { id: 1118, label: "مارلیک" },
        { id: 1135, label: "کردان" },
        { id: 1137, label: "ساوجبلاغ" },
        { id: 1138, label: "تهران دشت" },
      ],
    },
    {
      id: 6,
      cities: [
        { id: 238, label: "ارکواز" },
        { id: 239, label: "ایلام" },
        { id: 240, label: "ایوان" },
        { id: 241, label: "آبدانان" },
        { id: 242, label: "آسمان آباد" },
        { id: 243, label: "بدره" },
        { id: 244, label: "پهله" },
        { id: 245, label: "توحید" },
        { id: 246, label: "چوار" },
        { id: 247, label: "دره شهر" },
        { id: 248, label: "دلگشا" },
        { id: 249, label: "دهلران" },
        { id: 250, label: "زرنه" },
        { id: 251, label: "سراب باغ" },
        { id: 252, label: "سرابله" },
        { id: 253, label: "صالح آباد" },
        { id: 254, label: "لومار" },
        { id: 255, label: "مهران" },
        { id: 256, label: "مورموری" },
        { id: 257, label: "موسیان" },
        { id: 258, label: "میمه" },
      ],
    },
    {
      id: 7,
      cities: [
        { id: 259, label: "امام حسن" },
        { id: 260, label: "انارستان" },
        { id: 261, label: "اهرم" },
        { id: 262, label: "آب پخش" },
        { id: 263, label: "آبدان" },
        { id: 264, label: "برازجان" },
        { id: 265, label: "بردخون" },
        { id: 266, label: "بندردیر" },
        { id: 267, label: "بندردیلم" },
        { id: 268, label: "بندرریگ" },
        { id: 269, label: "بندرکنگان" },
        { id: 270, label: "بندرگناوه" },
        { id: 271, label: "بنک" },
        { id: 272, label: "بوشهر" },
        { id: 273, label: "تنگ ارم" },
        { id: 274, label: "جم" },
        { id: 275, label: "چغادک" },
        { id: 276, label: "خارک" },
        { id: 277, label: "خورموج" },
        { id: 278, label: "دالکی" },
        { id: 279, label: "دلوار" },
        { id: 280, label: "ریز" },
        { id: 281, label: "سعدآباد" },
        { id: 282, label: "سیراف" },
        { id: 283, label: "شبانکاره" },
        { id: 284, label: "شنبه" },
        { id: 285, label: "عسلویه" },
        { id: 286, label: "کاکی" },
        { id: 287, label: "کلمه" },
        { id: 288, label: "نخل تقی" },
        { id: 289, label: "وحدتیه" },
      ],
    },
    {
      id: 8,
      cities: [
        { id: 290, label: "ارجمند" },
        { id: 291, label: "اسلامشهر" },
        { id: 292, label: "اندیشه" },
        { id: 293, label: "آبسرد" },
        { id: 294, label: "آبعلی" },
        { id: 295, label: "باغستان" },
        { id: 296, label: "باقرشهر" },
        { id: 297, label: "بومهن" },
        { id: 298, label: "پاکدشت" },
        { id: 299, label: "پردیس" },
        { id: 300, label: "پیشوا" },
        { id: 301, label: "تهران" },
        { id: 302, label: "جوادآباد" },
        { id: 303, label: "چهاردانگه" },
        { id: 304, label: "حسن آباد" },
        { id: 305, label: "دماوند" },
        { id: 306, label: "دیزین" },
        { id: 307, label: "شهر ری" },
        { id: 308, label: "رباط کریم" },
        { id: 309, label: "رودهن" },
        { id: 310, label: "شاهدشهر" },
        { id: 311, label: "شریف آباد" },
        { id: 312, label: "شمشک" },
        { id: 313, label: "شهریار" },
        { id: 314, label: "صالح آباد" },
        { id: 315, label: "صباشهر" },
        { id: 316, label: "صفادشت" },
        { id: 317, label: "فردوسیه" },
        { id: 318, label: "فشم" },
        { id: 319, label: "فیروزکوه" },
        { id: 320, label: "قدس" },
        { id: 321, label: "قرچک" },
        { id: 322, label: "کهریزک" },
        { id: 323, label: "کیلان" },
        { id: 324, label: "گلستان" },
        { id: 325, label: "لواسان" },
        { id: 326, label: "ملارد" },
        { id: 327, label: "میگون" },
        { id: 328, label: "نسیم شهر" },
        { id: 329, label: "نصیرآباد" },
        { id: 330, label: "وحیدیه" },
        { id: 331, label: "ورامین" },
        { id: 1116, label: "پرند" },
        { id: 1153, label: "قیامدشت" },
      ],
    },
    {
      id: 9,
      cities: [
        { id: 332, label: "اردل" },
        { id: 333, label: "آلونی" },
        { id: 334, label: "باباحیدر" },
        { id: 335, label: "بروجن" },
        { id: 336, label: "بلداجی" },
        { id: 337, label: "بن" },
        { id: 338, label: "جونقان" },
        { id: 339, label: "چلگرد" },
        { id: 340, label: "سامان" },
        { id: 341, label: "سفیددشت" },
        { id: 342, label: "سودجان" },
        { id: 343, label: "سورشجان" },
        { id: 344, label: "شلمزار" },
        { id: 345, label: "شهرکرد" },
        { id: 346, label: "طاقانک" },
        { id: 347, label: "فارسان" },
        { id: 348, label: "فرادنبه" },
        { id: 349, label: "فرخ شهر" },
        { id: 350, label: "کیان" },
        { id: 351, label: "گندمان" },
        { id: 352, label: "گهرو" },
        { id: 353, label: "لردگان" },
        { id: 354, label: "مال خلیفه" },
        { id: 355, label: "ناغان" },
        { id: 356, label: "نافچ" },
        { id: 357, label: "نقنه" },
        { id: 358, label: "هفشجان" },
      ],
    },
    {
      id: 10,
      cities: [
        { id: 359, label: "ارسک" },
        { id: 360, label: "اسدیه" },
        { id: 361, label: "اسفدن" },
        { id: 362, label: "اسلامیه" },
        { id: 363, label: "آرین شهر" },
        { id: 364, label: "آیسک" },
        { id: 365, label: "بشرویه" },
        { id: 366, label: "بیرجند" },
        { id: 367, label: "حاجی آباد" },
        { id: 368, label: "خضری دشت بیاض" },
        { id: 369, label: "خوسف" },
        { id: 370, label: "زهان" },
        { id: 371, label: "سرایان" },
        { id: 372, label: "سربیشه" },
        { id: 373, label: "سه قلعه" },
        { id: 374, label: "شوسف" },
        { id: 375, label: "طبس " },
        { id: 376, label: "فردوس" },
        { id: 377, label: "قاین" },
        { id: 378, label: "قهستان" },
        { id: 379, label: "محمدشهر" },
        { id: 380, label: "مود" },
        { id: 381, label: "نهبندان" },
        { id: 382, label: "نیمبلوک" },
      ],
    },
    {
      id: 11,
      cities: [
        { id: 383, label: "احمدآباد صولت" },
        { id: 384, label: "انابد" },
        { id: 385, label: "باجگیران" },
        { id: 386, label: "باخرز" },
        { id: 387, label: "بار" },
        { id: 388, label: "بایگ" },
        { id: 389, label: "بجستان" },
        { id: 390, label: "بردسکن" },
        { id: 391, label: "بیدخت" },
        { id: 392, label: "تایباد" },
        { id: 393, label: "تربت جام" },
        { id: 394, label: "تربت حیدریه" },
        { id: 395, label: "جغتای" },
        { id: 396, label: "جنگل" },
        { id: 397, label: "چاپشلو" },
        { id: 398, label: "چکنه" },
        { id: 399, label: "چناران" },
        { id: 400, label: "خرو" },
        { id: 401, label: "خلیل آباد" },
        { id: 402, label: "خواف" },
        { id: 403, label: "داورزن" },
        { id: 404, label: "درگز" },
        { id: 405, label: "در رود" },
        { id: 406, label: "دولت آباد" },
        { id: 407, label: "رباط سنگ" },
        { id: 408, label: "رشتخوار" },
        { id: 409, label: "رضویه" },
        { id: 410, label: "روداب" },
        { id: 411, label: "ریوش" },
        { id: 412, label: "سبزوار" },
        { id: 413, label: "سرخس" },
        { id: 414, label: "سفیدسنگ" },
        { id: 415, label: "سلامی" },
        { id: 416, label: "سلطان آباد" },
        { id: 417, label: "سنگان" },
        { id: 418, label: "شادمهر" },
        { id: 419, label: "شاندیز" },
        { id: 420, label: "ششتمد" },
        { id: 421, label: "شهرآباد" },
        { id: 422, label: "شهرزو" },
        { id: 423, label: "صالح آباد" },
        { id: 424, label: "طرقبه" },
        { id: 425, label: "عشق آباد" },
        { id: 426, label: "فرهادگرد" },
        { id: 427, label: "فریمان" },
        { id: 428, label: "فیروزه" },
        { id: 429, label: "فیض آباد" },
        { id: 430, label: "قاسم آباد" },
        { id: 431, label: "قدمگاه" },
        { id: 432, label: "قلندرآباد" },
        { id: 433, label: "قوچان" },
        { id: 434, label: "کاخک" },
        { id: 435, label: "کاریز" },
        { id: 436, label: "کاشمر" },
        { id: 437, label: "کدکن" },
        { id: 438, label: "کلات" },
        { id: 439, label: "کندر" },
        { id: 440, label: "گلمکان" },
        { id: 441, label: "گناباد" },
        { id: 442, label: "لطف آباد" },
        { id: 443, label: "مزدآوند" },
        { id: 444, label: "مشهد" },
        { id: 445, label: "ملک آباد" },
        { id: 446, label: "نشتیفان" },
        { id: 447, label: "نصرآباد" },
        { id: 448, label: "نقاب" },
        { id: 449, label: "نوخندان" },
        { id: 450, label: "نیشابور" },
        { id: 451, label: "نیل شهر" },
        { id: 452, label: "همت آباد" },
        { id: 453, label: "یونسی" },
        { id: 1150, label: "گلبهار" },
        { id: 1155, label: "بینالود" },
      ],
    },
    {
      id: 12,
      cities: [
        { id: 454, label: "اسفراین" },
        { id: 455, label: "ایور" },
        { id: 456, label: "آشخانه" },
        { id: 457, label: "بجنورد" },
        { id: 458, label: "پیش قلعه" },
        { id: 459, label: "تیتکانلو" },
        { id: 460, label: "جاجرم" },
        { id: 461, label: "حصارگرمخان" },
        { id: 462, label: "درق" },
        { id: 463, label: "راز" },
        { id: 464, label: "سنخواست" },
        { id: 465, label: "شوقان" },
        { id: 466, label: "شیروان" },
        { id: 467, label: "صفی آباد" },
        { id: 468, label: "فاروج" },
        { id: 469, label: "قاضی" },
        { id: 470, label: "گرمه" },
        { id: 471, label: "لوجلی" },
      ],
    },
    {
      id: 13,
      cities: [
        { id: 472, label: "اروندکنار" },
        { id: 473, label: "الوان" },
        { id: 474, label: "امیدیه" },
        { id: 475, label: "اندیمشک" },
        { id: 476, label: "اهواز" },
        { id: 477, label: "ایذه" },
        { id: 478, label: "آبادان" },
        { id: 479, label: "آغاجاری" },
        { id: 480, label: "باغ ملک" },
        { id: 481, label: "بستان" },
        { id: 482, label: "بندرامام خمینی" },
        { id: 483, label: "بندرماهشهر" },
        { id: 484, label: "بهبهان" },
        { id: 485, label: "ترکالکی" },
        { id: 486, label: "جایزان" },
        { id: 487, label: "چمران" },
        { id: 488, label: "چویبده" },
        { id: 489, label: "حر" },
        { id: 490, label: "حسینیه" },
        { id: 491, label: "حمزه" },
        { id: 492, label: "حمیدیه" },
        { id: 493, label: "خرمشهر" },
        { id: 494, label: "دارخوین" },
        { id: 495, label: "دزآب" },
        { id: 496, label: "دزفول" },
        { id: 497, label: "دهدز" },
        { id: 498, label: "رامشیر" },
        { id: 499, label: "رامهرمز" },
        { id: 500, label: "رفیع" },
        { id: 501, label: "زهره" },
        { id: 502, label: "سالند" },
        { id: 503, label: "سردشت" },
        { id: 504, label: "سوسنگرد" },
        { id: 505, label: "شادگان" },
        { id: 506, label: "شاوور" },
        { id: 507, label: "شرافت" },
        { id: 508, label: "شوش" },
        { id: 509, label: "شوشتر" },
        { id: 510, label: "شیبان" },
        { id: 511, label: "صالح شهر" },
        { id: 512, label: "صفی آباد" },
        { id: 513, label: "صیدون" },
        { id: 514, label: "قلعه تل" },
        { id: 515, label: "قلعه خواجه" },
        { id: 516, label: "گتوند" },
        { id: 517, label: "لالی" },
        { id: 518, label: "مسجدسلیمان" },
        { id: 520, label: "ملاثانی" },
        { id: 521, label: "میانرود" },
        { id: 522, label: "مینوشهر" },
        { id: 523, label: "هفتگل" },
        { id: 524, label: "هندیجان" },
        { id: 525, label: "هویزه" },
        { id: 526, label: "ویس" },
      ],
    },
    {
      id: 14,
      cities: [
        { id: 527, label: "ابهر" },
        { id: 528, label: "ارمغان خانه" },
        { id: 529, label: "آب بر" },
        { id: 530, label: "چورزق" },
        { id: 531, label: "حلب" },
        { id: 532, label: "خرمدره" },
        { id: 533, label: "دندی" },
        { id: 534, label: "زرین آباد" },
        { id: 535, label: "زرین رود" },
        { id: 536, label: "زنجان" },
        { id: 537, label: "سجاس" },
        { id: 538, label: "سلطانیه" },
        { id: 539, label: "سهرورد" },
        { id: 540, label: "صائین قلعه" },
        { id: 541, label: "قیدار" },
        { id: 542, label: "گرماب" },
        { id: 543, label: "ماه نشان" },
        { id: 544, label: "هیدج" },
      ],
    },
    {
      id: 15,
      cities: [
        { id: 545, label: "امیریه" },
        { id: 546, label: "ایوانکی" },
        { id: 547, label: "آرادان" },
        { id: 548, label: "بسطام" },
        { id: 549, label: "بیارجمند" },
        { id: 550, label: "دامغان" },
        { id: 551, label: "درجزین" },
        { id: 552, label: "دیباج" },
        { id: 553, label: "سرخه" },
        { id: 554, label: "سمنان" },
        { id: 555, label: "شاهرود" },
        { id: 556, label: "شهمیرزاد" },
        { id: 557, label: "کلاته خیج" },
        { id: 558, label: "گرمسار" },
        { id: 559, label: "مجن" },
        { id: 560, label: "مهدی شهر" },
        { id: 561, label: "میامی" },
      ],
    },
    {
      id: 16,
      cities: [
        { id: 562, label: "ادیمی" },
        { id: 563, label: "اسپکه" },
        { id: 564, label: "ایرانشهر" },
        { id: 565, label: "بزمان" },
        { id: 566, label: "بمپور" },
        { id: 567, label: "بنت" },
        { id: 568, label: "بنجار" },
        { id: 569, label: "پیشین" },
        { id: 570, label: "جالق" },
        { id: 571, label: "چابهار" },
        { id: 572, label: "خاش" },
        { id: 573, label: "دوست محمد" },
        { id: 574, label: "راسک" },
        { id: 575, label: "زابل" },
        { id: 576, label: "زابلی" },
        { id: 577, label: "زاهدان" },
        { id: 578, label: "زهک" },
        { id: 579, label: "سراوان" },
        { id: 580, label: "سرباز" },
        { id: 581, label: "سوران" },
        { id: 582, label: "سیرکان" },
        { id: 583, label: "علی اکبر" },
        { id: 584, label: "فنوج" },
        { id: 585, label: "قصرقند" },
        { id: 586, label: "کنارک" },
        { id: 587, label: "گشت" },
        { id: 588, label: "گلمورتی" },
        { id: 589, label: "محمدان" },
        { id: 590, label: "محمدآباد" },
        { id: 591, label: "محمدی" },
        { id: 592, label: "میرجاوه" },
        { id: 593, label: "نصرت آباد" },
        { id: 594, label: "نگور" },
        { id: 595, label: "نوک آباد" },
        { id: 596, label: "نیک شهر" },
        { id: 597, label: "هیدوچ" },
      ],
    },
    {
      id: 17,
      cities: [
        { id: 598, label: "اردکان" },
        { id: 599, label: "ارسنجان" },
        { id: 600, label: "استهبان" },
        { id: 601, label: "اشکنان" },
        { id: 602, label: "افزر" },
        { id: 603, label: "اقلید" },
        { id: 604, label: "امام شهر" },
        { id: 605, label: "اهل" },
        { id: 606, label: "اوز" },
        { id: 607, label: "ایج" },
        { id: 608, label: "ایزدخواست" },
        { id: 609, label: "آباده" },
        { id: 610, label: "آباده طشک" },
        { id: 611, label: "باب انار" },
        { id: 612, label: "بالاده" },
        { id: 613, label: "بنارویه" },
        { id: 614, label: "بهمن" },
        { id: 615, label: "بوانات" },
        { id: 616, label: "بیرم" },
        { id: 617, label: "بیضا" },
        { id: 618, label: "جنت شهر" },
        { id: 619, label: "جهرم" },
        { id: 620, label: "جویم" },
        { id: 621, label: "زرین دشت" },
        { id: 622, label: "حسن آباد" },
        { id: 623, label: "خان زنیان" },
        { id: 624, label: "خاوران" },
        { id: 625, label: "خرامه" },
        { id: 626, label: "خشت" },
        { id: 627, label: "خنج" },
        { id: 628, label: "خور" },
        { id: 629, label: "داراب" },
        { id: 630, label: "داریان" },
        { id: 631, label: "دبیران" },
        { id: 632, label: "دژکرد" },
        { id: 633, label: "دهرم" },
        { id: 634, label: "دوبرجی" },
        { id: 635, label: "رامجرد" },
        { id: 636, label: "رونیز" },
        { id: 637, label: "زاهدشهر" },
        { id: 638, label: "زرقان" },
        { id: 639, label: "سده" },
        { id: 640, label: "سروستان" },
        { id: 641, label: "سعادت شهر" },
        { id: 642, label: "سورمق" },
        { id: 643, label: "سیدان" },
        { id: 644, label: "ششده" },
        { id: 645, label: "شهرپیر" },
        { id: 646, label: "شهرصدرا" },
        { id: 647, label: "شیراز" },
        { id: 648, label: "صغاد" },
        { id: 649, label: "صفاشهر" },
        { id: 650, label: "علامرودشت" },
        { id: 651, label: "فدامی" },
        { id: 652, label: "فراشبند" },
        { id: 653, label: "فسا" },
        { id: 654, label: "فیروزآباد" },
        { id: 655, label: "قائمیه" },
        { id: 656, label: "قادرآباد" },
        { id: 657, label: "قطب آباد" },
        { id: 658, label: "قطرویه" },
        { id: 659, label: "قیر" },
        { id: 660, label: "کارزین (فتح آباد)" },
        { id: 661, label: "کازرون" },
        { id: 662, label: "کامفیروز" },
        { id: 663, label: "کره ای" },
        { id: 664, label: "کنارتخته" },
        { id: 665, label: "کوار" },
        { id: 666, label: "گراش" },
        { id: 667, label: "گله دار" },
        { id: 668, label: "لار" },
        { id: 669, label: "لامرد" },
        { id: 670, label: "لپویی" },
        { id: 671, label: "لطیفی" },
        { id: 672, label: "مبارک آباددیز" },
        { id: 673, label: "مرودشت" },
        { id: 674, label: "مشکان" },
        { id: 675, label: "مصیری" },
        { id: 676, label: "مهر" },
        { id: 677, label: "میمند" },
        { id: 678, label: "نوبندگان" },
        { id: 679, label: "نوجین" },
        { id: 680, label: "نودان" },
        { id: 681, label: "نورآباد" },
        { id: 682, label: "نی ریز" },
        { id: 683, label: "وراوی" },
      ],
    },
    {
      id: 18,
      cities: [
        { id: 684, label: "ارداق" },
        { id: 685, label: "اسفرورین" },
        { id: 686, label: "اقبالیه" },
        { id: 687, label: "الوند" },
        { id: 688, label: "آبگرم" },
        { id: 689, label: "آبیک" },
        { id: 690, label: "آوج" },
        { id: 691, label: "بوئین زهرا" },
        { id: 692, label: "بیدستان" },
        { id: 693, label: "تاکستان" },
        { id: 694, label: "خاکعلی" },
        { id: 695, label: "خرمدشت" },
        { id: 696, label: "دانسفهان" },
        { id: 697, label: "رازمیان" },
        { id: 698, label: "سگزآباد" },
        { id: 699, label: "سیردان" },
        { id: 700, label: "شال" },
        { id: 701, label: "شریفیه" },
        { id: 702, label: "ضیاآباد" },
        { id: 703, label: "قزوین" },
        { id: 704, label: "کوهین" },
        { id: 705, label: "محمدیه" },
        { id: 706, label: "محمودآباد نمونه" },
        { id: 707, label: "معلم کلایه" },
        { id: 708, label: "نرجه" },
      ],
    },
    {
      id: 19,
      cities: [
        { id: 709, label: "جعفریه" },
        { id: 710, label: "دستجرد" },
        { id: 711, label: "سلفچگان" },
        { id: 712, label: "قم" },
        { id: 713, label: "قنوات" },
        { id: 714, label: "کهک" },
      ],
    },
    {
      id: 20,
      cities: [
        { id: 715, label: "آرمرده" },
        { id: 716, label: "بابارشانی" },
        { id: 717, label: "بانه" },
        { id: 718, label: "بلبان آباد" },
        { id: 719, label: "بوئین سفلی" },
        { id: 720, label: "بیجار" },
        { id: 721, label: "چناره" },
        { id: 722, label: "دزج" },
        { id: 723, label: "دلبران" },
        { id: 724, label: "دهگلان" },
        { id: 725, label: "دیواندره" },
        { id: 726, label: "زرینه" },
        { id: 727, label: "سروآباد" },
        { id: 728, label: "سریش آباد" },
        { id: 729, label: "سقز" },
        { id: 730, label: "سنندج" },
        { id: 731, label: "شویشه" },
        { id: 732, label: "صاحب" },
        { id: 733, label: "قروه" },
        { id: 734, label: "کامیاران" },
        { id: 735, label: "کانی دینار" },
        { id: 736, label: "کانی سور" },
        { id: 737, label: "مریوان" },
        { id: 738, label: "موچش" },
        { id: 739, label: "یاسوکند" },
      ],
    },
    {
      id: 21,
      cities: [
        { id: 740, label: "اختیارآباد" },
        { id: 741, label: "ارزوئیه" },
        { id: 742, label: "امین شهر" },
        { id: 743, label: "انار" },
        { id: 744, label: "اندوهجرد" },
        { id: 745, label: "باغین" },
        { id: 746, label: "بافت" },
        { id: 747, label: "بردسیر" },
        { id: 748, label: "بروات" },
        { id: 749, label: "بزنجان" },
        { id: 750, label: "بم" },
        { id: 751, label: "بهرمان" },
        { id: 752, label: "پاریز" },
        { id: 753, label: "جبالبارز" },
        { id: 754, label: "جوپار" },
        { id: 755, label: "جوزم" },
        { id: 756, label: "جیرفت" },
        { id: 757, label: "چترود" },
        { id: 758, label: "خاتون آباد" },
        { id: 759, label: "خانوک" },
        { id: 760, label: "خورسند" },
        { id: 761, label: "درب بهشت" },
        { id: 762, label: "دهج" },
        { id: 763, label: "رابر" },
        { id: 764, label: "راور" },
        { id: 765, label: "راین" },
        { id: 766, label: "رفسنجان" },
        { id: 767, label: "رودبار" },
        { id: 768, label: "ریحان شهر" },
        { id: 769, label: "زرند" },
        { id: 770, label: "زنگی آباد" },
        { id: 771, label: "زیدآباد" },
        { id: 772, label: "سیرجان" },
        { id: 773, label: "شهداد" },
        { id: 774, label: "شهربابک" },
        { id: 775, label: "صفائیه" },
        { id: 776, label: "عنبرآباد" },
        { id: 777, label: "فاریاب" },
        { id: 778, label: "فهرج" },
        { id: 779, label: "قلعه گنج" },
        { id: 780, label: "کاظم آباد" },
        { id: 781, label: "کرمان" },
        { id: 782, label: "کشکوئیه" },
        { id: 783, label: "کهنوج" },
        { id: 784, label: "کوهبنان" },
        { id: 785, label: "کیانشهر" },
        { id: 786, label: "گلباف" },
        { id: 787, label: "گلزار" },
        { id: 788, label: "لاله زار" },
        { id: 789, label: "ماهان" },
        { id: 790, label: "محمدآباد" },
        { id: 791, label: "محی آباد" },
        { id: 792, label: "مردهک" },
        { id: 793, label: "مس سرچشمه" },
        { id: 794, label: "منوجان" },
        { id: 795, label: "نجف شهر" },
        { id: 796, label: "نرماشیر" },
        { id: 797, label: "نظام شهر" },
        { id: 798, label: "نگار" },
        { id: 799, label: "نودژ" },
        { id: 800, label: "هجدک" },
        { id: 801, label: "یزدان شهر" },
      ],
    },
    {
      id: 22,
      cities: [
        { id: 802, label: "ازگله" },
        { id: 803, label: "اسلام آباد غرب" },
        { id: 804, label: "باینگان" },
        { id: 805, label: "بیستون" },
        { id: 806, label: "پاوه" },
        { id: 807, label: "تازه آباد" },
        { id: 808, label: "جوان رود" },
        { id: 809, label: "حمیل" },
        { id: 810, label: "ماهیدشت" },
        { id: 811, label: "روانسر" },
        { id: 812, label: "سرپل ذهاب" },
        { id: 813, label: "سرمست" },
        { id: 814, label: "سطر" },
        { id: 815, label: "سنقر" },
        { id: 816, label: "سومار" },
        { id: 817, label: "شاهو" },
        { id: 818, label: "صحنه" },
        { id: 819, label: "قصرشیرین" },
        { id: 820, label: "کرمانشاه" },
        { id: 821, label: "کرندغرب" },
        { id: 822, label: "کنگاور" },
        { id: 823, label: "کوزران" },
        { id: 824, label: "گهواره" },
        { id: 825, label: "گیلانغرب" },
        { id: 826, label: "میان راهان" },
        { id: 827, label: "نودشه" },
        { id: 828, label: "نوسود" },
        { id: 829, label: "هرسین" },
        { id: 830, label: "هلشی" },
      ],
    },
    {
      id: 23,
      cities: [
        { id: 831, label: "باشت" },
        { id: 832, label: "پاتاوه" },
        { id: 833, label: "چرام" },
        { id: 834, label: "چیتاب" },
        { id: 835, label: "دهدشت" },
        { id: 836, label: "دوگنبدان" },
        { id: 837, label: "دیشموک" },
        { id: 838, label: "سوق" },
        { id: 839, label: "سی سخت" },
        { id: 840, label: "قلعه رئیسی" },
        { id: 841, label: "گراب سفلی" },
        { id: 842, label: "لنده" },
        { id: 843, label: "لیکک" },
        { id: 844, label: "مادوان" },
        { id: 845, label: "مارگون" },
        { id: 846, label: "یاسوج" },
      ],
    },
    {
      id: 24,
      cities: [
        { id: 847, label: "انبارآلوم" },
        { id: 848, label: "اینچه برون" },
        { id: 849, label: "آزادشهر" },
        { id: 850, label: "آق قلا" },
        { id: 851, label: "بندرترکمن" },
        { id: 852, label: "بندرگز" },
        { id: 853, label: "جلین" },
        { id: 854, label: "خان ببین" },
        { id: 855, label: "دلند" },
        { id: 856, label: "رامیان" },
        { id: 857, label: "سرخنکلاته" },
        { id: 858, label: "سیمین شهر" },
        { id: 859, label: "علی آباد کتول" },
        { id: 860, label: "فاضل آباد" },
        { id: 861, label: "کردکوی" },
        { id: 862, label: "کلاله" },
        { id: 863, label: "گالیکش" },
        { id: 864, label: "گرگان" },
        { id: 865, label: "گمیش تپه" },
        { id: 866, label: "گنبدکاووس" },
        { id: 867, label: "مراوه" },
        { id: 868, label: "مینودشت" },
        { id: 869, label: "نگین شهر" },
        { id: 870, label: "نوده خاندوز" },
        { id: 871, label: "نوکنده" },
      ],
    },
    {
      id: 25,
      cities: [
        { id: 872, label: "ازنا" },
        { id: 873, label: "اشترینان" },
        { id: 874, label: "الشتر" },
        { id: 875, label: "الیگودرز" },
        { id: 876, label: "بروجرد" },
        { id: 877, label: "پلدختر" },
        { id: 878, label: "چالانچولان" },
        { id: 879, label: "چغلوندی" },
        { id: 880, label: "چقابل" },
        { id: 881, label: "خرم آباد" },
        { id: 882, label: "درب گنبد" },
        { id: 883, label: "دورود" },
        { id: 884, label: "زاغه" },
        { id: 885, label: "سپیددشت" },
        { id: 886, label: "سراب دوره" },
        { id: 887, label: "فیروزآباد" },
        { id: 888, label: "کونانی" },
        { id: 889, label: "کوهدشت" },
        { id: 890, label: "گراب" },
        { id: 891, label: "معمولان" },
        { id: 892, label: "مومن آباد" },
        { id: 893, label: "نورآباد" },
        { id: 894, label: "ویسیان" },
      ],
    },
    {
      id: 26,
      cities: [
        { id: 895, label: "احمدسرگوراب" },
        { id: 896, label: "اسالم" },
        { id: 897, label: "اطاقور" },
        { id: 898, label: "املش" },
        { id: 899, label: "آستارا" },
        { id: 900, label: "آستانه اشرفیه" },
        { id: 901, label: "بازار جمعه" },
        { id: 902, label: "بره سر" },
        { id: 903, label: "بندرانزلی" },
        { id: 906, label: "پره سر" },
        { id: 907, label: "تالش" },
        { id: 908, label: "توتکابن" },
        { id: 909, label: "جیرنده" },
        { id: 910, label: "چابکسر" },
        { id: 911, label: "چاف و چمخاله" },
        { id: 912, label: "چوبر" },
        { id: 913, label: "حویق" },
        { id: 914, label: "خشکبیجار" },
        { id: 915, label: "خمام" },
        { id: 916, label: "دیلمان" },
        { id: 917, label: "رانکوه" },
        { id: 918, label: "رحیم آباد" },
        { id: 919, label: "رستم آباد" },
        { id: 920, label: "رشت" },
        { id: 921, label: "رضوانشهر" },
        { id: 922, label: "رودبار" },
        { id: 923, label: "رودبنه" },
        { id: 924, label: "رودسر" },
        { id: 925, label: "سنگر" },
        { id: 926, label: "سیاهکل" },
        { id: 927, label: "شفت" },
        { id: 928, label: "شلمان" },
        { id: 929, label: "صومعه سرا" },
        { id: 930, label: "فومن" },
        { id: 931, label: "کلاچای" },
        { id: 932, label: "کوچصفهان" },
        { id: 933, label: "کومله" },
        { id: 934, label: "کیاشهر" },
        { id: 935, label: "گوراب زرمیخ" },
        { id: 936, label: "لاهیجان" },
        { id: 937, label: "لشت نشا" },
        { id: 938, label: "لنگرود" },
        { id: 939, label: "لوشان" },
        { id: 940, label: "لولمان" },
        { id: 941, label: "لوندویل" },
        { id: 942, label: "لیسار" },
        { id: 943, label: "ماسال" },
        { id: 944, label: "ماسوله" },
        { id: 945, label: "مرجقل" },
        { id: 946, label: "منجیل" },
        { id: 947, label: "واجارگاه" },
        { id: 1121, label: "زیباکنار" },
        { id: 1159, label: "پیربازار" },
      ],
    },
    {
      id: 27,
      cities: [
        { id: 948, label: "امیرکلا" },
        { id: 949, label: "ایزدشهر" },
        { id: 950, label: "آلاشت" },
        { id: 951, label: "آمل" },
        { id: 952, label: "بابل" },
        { id: 953, label: "بابلسر" },
        { id: 954, label: "بلده" },
        { id: 955, label: "بهشهر" },
        { id: 956, label: "بهنمیر" },
        { id: 957, label: "پل سفید" },
        { id: 958, label: "تنکابن" },
        { id: 959, label: "جویبار" },
        { id: 960, label: "چالوس" },
        { id: 961, label: "چمستان" },
        { id: 962, label: "خرم آباد" },
        { id: 963, label: "خلیل شهر" },
        { id: 964, label: "خوش رودپی" },
        { id: 965, label: "دابودشت" },
        { id: 966, label: "رامسر" },
        { id: 967, label: "رستمکلا" },
        { id: 968, label: "رویان" },
        { id: 969, label: "رینه" },
        { id: 970, label: "زرگرمحله" },
        { id: 971, label: "زیرآب" },
        { id: 972, label: "ساری" },
        { id: 973, label: "سرخرود" },
        { id: 974, label: "سلمان شهر" },
        { id: 975, label: "سورک" },
        { id: 976, label: "شیرگاه" },
        { id: 977, label: "شیرود" },
        { id: 978, label: "عباس آباد" },
        { id: 979, label: "فریدونکنار" },
        { id: 980, label: "فریم" },
        { id: 981, label: "قائم شهر" },
        { id: 982, label: "کتالم" },
        { id: 983, label: "کلارآباد" },
        { id: 984, label: "کلاردشت" },
        { id: 985, label: "کله بست" },
        { id: 986, label: "کوهی خیل" },
        { id: 987, label: "کیاسر" },
        { id: 988, label: "کیاکلا" },
        { id: 989, label: "گتاب" },
        { id: 990, label: "گزنک" },
        { id: 991, label: "گلوگاه" },
        { id: 992, label: "محمودآباد" },
        { id: 993, label: "مرزن آباد" },
        { id: 994, label: "مرزیکلا" },
        { id: 995, label: "نشتارود" },
        { id: 996, label: "نکا" },
        { id: 997, label: "نور" },
        { id: 998, label: "نوشهر" },
        { id: 1119, label: "سادات شهر" },
      ],
    },
    {
      id: 28,
      cities: [
        { id: 999, label: "اراک" },
        { id: 1000, label: "آستانه" },
        { id: 1001, label: "آشتیان" },
        { id: 1002, label: "پرندک" },
        { id: 1003, label: "تفرش" },
        { id: 1004, label: "توره" },
        { id: 1005, label: "جاورسیان" },
        { id: 1006, label: "خشکرود" },
        { id: 1007, label: "خمین" },
        { id: 1008, label: "خنداب" },
        { id: 1009, label: "داودآباد" },
        { id: 1010, label: "دلیجان" },
        { id: 1011, label: "رازقان" },
        { id: 1012, label: "زاویه" },
        { id: 1013, label: "ساروق" },
        { id: 1014, label: "ساوه" },
        { id: 1015, label: "سنجان" },
        { id: 1016, label: "شازند" },
        { id: 1017, label: "غرق آباد" },
        { id: 1018, label: "فرمهین" },
        { id: 1019, label: "قورچی باشی" },
        { id: 1020, label: "کرهرود" },
        { id: 1021, label: "کمیجان" },
        { id: 1022, label: "مامونیه" },
        { id: 1023, label: "محلات" },
        { id: 1024, label: "مهاجران" },
        { id: 1025, label: "میلاجرد" },
        { id: 1026, label: "نراق" },
        { id: 1027, label: "نوبران" },
        { id: 1028, label: "نیمور" },
        { id: 1029, label: "هندودر" },
      ],
    },
    {
      id: 29,
      cities: [
        { id: 1030, label: "ابوموسی" },
        { id: 1031, label: "بستک" },
        { id: 1032, label: "بندرجاسک" },
        { id: 1033, label: "بندرچارک" },
        { id: 1034, label: "بندرخمیر" },
        { id: 1035, label: "بندرعباس" },
        { id: 1036, label: "بندرلنگه" },
        { id: 1037, label: "بیکا" },
        { id: 1038, label: "پارسیان" },
        { id: 1039, label: "تخت" },
        { id: 1040, label: "جناح" },
        { id: 1041, label: "حاجی آباد" },
        { id: 1042, label: "درگهان" },
        { id: 1043, label: "دهبارز" },
        { id: 1044, label: "رویدر" },
        { id: 1045, label: "زیارتعلی" },
        { id: 1046, label: "سردشت" },
        { id: 1047, label: "سندرک" },
        { id: 1048, label: "سوزا" },
        { id: 1049, label: "سیریک" },
        { id: 1050, label: "فارغان" },
        { id: 1051, label: "فین" },
        { id: 1052, label: "قشم" },
        { id: 1053, label: "قلعه قاضی" },
        { id: 1054, label: "کنگ" },
        { id: 1055, label: "کوشکنار" },
        { id: 1056, label: "کیش" },
        { id: 1057, label: "گوهران" },
        { id: 1058, label: "میناب" },
        { id: 1059, label: "هرمز" },
        { id: 1060, label: "هشتبندی" },
      ],
    },
    {
      id: 30,
      cities: [
        { id: 1061, label: "ازندریان" },
        { id: 1062, label: "اسدآباد" },
        { id: 1063, label: "برزول" },
        { id: 1064, label: "بهار" },
        { id: 1065, label: "تویسرکان" },
        { id: 1066, label: "جورقان" },
        { id: 1067, label: "جوکار" },
        { id: 1068, label: "دمق" },
        { id: 1069, label: "رزن" },
        { id: 1070, label: "زنگنه" },
        { id: 1071, label: "سامن" },
        { id: 1072, label: "سرکان" },
        { id: 1073, label: "شیرین سو" },
        { id: 1074, label: "صالح آباد" },
        { id: 1075, label: "فامنین" },
        { id: 1076, label: "فرسفج" },
        { id: 1077, label: "فیروزان" },
        { id: 1078, label: "قروه درجزین" },
        { id: 1079, label: "قهاوند" },
        { id: 1080, label: "کبودر آهنگ" },
        { id: 1081, label: "گل تپه" },
        { id: 1082, label: "گیان" },
        { id: 1083, label: "لالجین" },
        { id: 1084, label: "مریانج" },
        { id: 1085, label: "ملایر" },
        { id: 1086, label: "نهاوند" },
        { id: 1087, label: "همدان" },
      ],
    },
    {
      id: 31,
      cities: [
        { id: 1088, label: "ابرکوه" },
        { id: 1089, label: "احمدآباد" },
        { id: 1090, label: "اردکان" },
        { id: 1091, label: "اشکذر" },
        { id: 1092, label: "بافق" },
        { id: 1093, label: "بفروئیه" },
        { id: 1094, label: "بهاباد" },
        { id: 1095, label: "تفت" },
        { id: 1096, label: "حمیدیا" },
        { id: 1097, label: "خضرآباد" },
        { id: 1098, label: "دیهوک" },
        { id: 1099, label: "زارچ" },
        { id: 1100, label: "شاهدیه" },
        { id: 1101, label: "طبس" },
        { id: 1103, label: "عقدا" },
        { id: 1104, label: "مروست" },
        { id: 1105, label: "مهردشت" },
        { id: 1106, label: "مهریز" },
        { id: 1107, label: "میبد" },
        { id: 1108, label: "ندوشن" },
        { id: 1109, label: "نیر" },
        { id: 1110, label: "هرات" },
        { id: 1111, label: "یزد" },
        { id: 1160, label: "رضوانشهر" },
      ],
    },
  ];
  const findCities = (stateId) => {
    return allCities.find((item, index) => item.id === stateId).cities;
  };
  const [cities, setCities] = useState(findCities(8));

  if (isLoading) return <Loading />;
  if (jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }

  const onSubmit = (values, errors) => {
    const addressObject = {
      data: {
        address: values.address,
        state: values.state,
        city: values.city,
        pelak: values.unit,
        unit: values.vahed,
        postalCode: values.postalCode,
        longitude: values.location.lng.toString(),
        latitude: values.location.lat.toString(),
        users_permissions_user: userId,
      },
    };
    if (addressId != null) {
      addressObject.data["id"] = addressId;
      dispatch(updateAddress(addressObject.data));
      postData(`/addresses/${addressId}`, addressObject, "PUT");
      handleCloseMap();
    } else {
      postData("/addresses", addressObject);
    }
  };
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <Box height="80vh" display="flex" flexDirection="column">
        <Box height="100%" sx={{ overflowY: "scroll", marginBottom: "60px" }}>
          <Formik
            initialValues={{
              location,
              address: address ? address.address : "",
              state: address ? address.state : null,
              city: address ? address.city : null,
              unit: address ? address.pelak : "",
              vahed: address ? address.unit : "",
              postalCode: address ? address.postalCode : "",
            }}
            validationSchema={addressSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form autoComplete="off">
                <CacheProvider value={cacheRtl}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box mt={1} px={2} sx={{ direction: "rtl" }}>
                      <Field name="address">
                        {({ field }) => (
                          <TextField
                            {...field}
                            color="primary"
                            id="address"
                            label="نشانی"
                            multiline
                            maxRows={2}
                            padding="1rem"
                            fullWidth
                            dir="rtl"
                            error={touched.address && Boolean(errors.address)}
                            helperText={touched.address && errors.address}
                          />
                        )}
                      </Field>
                    </Box>
                    <Box
                      color="dodgerblue"
                      display="flex"
                      alignItems="center"
                      px={2}
                      sx={{ cursor: "pointer", width: "fit-content" }}
                      onClick={() => {
                        setShowForm(false);
                      }}
                    >
                      <Typography>اصلاح موقعیت مکانی روی نقشه</Typography>
                      <BiChevronLeft size={25} />
                    </Box>
                    <Divider />
                  </Box>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1}>
                        <Field name="state">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.state}
                              isOptionEqualToValue={(option, value) =>
                                option.value === value.value
                              }
                              onChange={(event, newValue) => {
                                if (newValue) {
                                  setFieldValue("state", newValue || ""); // Use a fallback empty string if label is undefined
                                } else {
                                  setFieldValue("state", ""); // Handle the case where newValue is null or undefined
                                }
                                setCities(
                                  findCities(newValue ? newValue.id : 1)
                                );
                              }}
                              options={allStates}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="استان"
                                  variant="outlined"
                                  error={touched.state && Boolean(errors.state)}
                                  helperText={touched.state && errors.state}
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1}>
                        <Field name="city">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.city}
                              isOptionEqualToValue={(option, value) =>
                                option.value === value.value
                              }
                              onChange={(event, newValue) => {
                                if (newValue) {
                                  setFieldValue("city", newValue || ""); // Use a fallback empty string if label is undefined
                                } else {
                                  setFieldValue("city", ""); // Handle the case where newValue is null or undefined
                                }
                              }}
                              options={cities}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="شهر"
                                  variant="outlined"
                                  error={touched.city && Boolean(errors.city)}
                                  helperText={touched.city && errors.city}
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="unit">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="unit"
                              label="پلاک"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              error={touched.unit && Boolean(errors.unit)}
                              helperText={touched.unit && errors.unit}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="vahed">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="vahed"
                              label="واحد"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              // error={Boolean(errors.vahed)}
                              // helperText={errors.vahed}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="postalCode">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="postalCode"
                              label="کدپستی"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              error={
                                touched.postalCode && Boolean(errors.postalCode)
                              }
                              helperText={
                                touched.postalCode && errors.postalCode
                              }
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    width="100%"
                    height="60px"
                    position="fixed"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bottom="0"
                    zIndex={2}
                    sx={{ boxShadow: " 0px 0px 0px #888, 0px -2px 5px #888" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "90%",
                        py: "0.7rem",
                        borderRadius: "0.6rem",
                      }}
                      type="submit"
                    >
                      ثبت آدرس
                    </Button>
                  </Box>
                </CacheProvider>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
