import slide1 from "./slide1.jpeg";
import slide2 from "./slide2.jpeg";
import slide3 from "./slide3.jpeg";
import slide4 from "./slide4.jpeg";
import slide5 from "./slide5.jpeg";
import slide6 from "./slide6.jpeg";

import m1 from "./m1.jpeg";
import m2 from "./m2.jpeg";
import m3 from "./m3.jpeg";
import m4 from "./m4.jpeg";
import m5 from "./m5.jpeg";
import m6 from "./m6.jpeg";
import { createTheme } from "@mui/material/styles";
// import { createMuiTheme, ThemeProvider } from "@mui/material/core";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#0000FF",
  //   },
  // },
  typography: {
    fontFamily: "iransans",
  },
});

export const navLinks = [
  { name: "دیجیتال", slug: "category-digital", id: 1, parentId: null },
  { name: "خوراک", slug: "category-food", id: 2, parentId: null },
  { name: "پوشاک", slug: "category-clothes", id: 3, parentId: null },
  { name: "زیبایی", slug: "category-beauty", id: 4, parentId: null },
  { name: "آشپز خانه", slug: "category-kitchen", id: 5, parentId: null },
  { name: "موبایل", slug: "category-mobile", id: 6, parentId: 1 },
  { name: "تبلت", slug: "category-tablet", id: 7, parentId: 1 },
  { name: "لپتاپ", slug: "category-laptop", id: 8, parentId: 1 },
  { name: "قاب موبایل", slug: "category-mobile-cover", id: 9, parentId: 6 },
  {
    name: "جعبه موبایل موبایل موبایل",
    slug: "category-mobile-box",
    id: 18,
    parentId: 6,
  },
  { name: "قاب صورتی", slug: "category-pink-cover", id: 12, parentId: 9 },
  { name: "قاب آبی", slug: "category-blue-cover", id: 13, parentId: 9 },
  {
    name: "باطری موبایل",
    slug: "category-mobile-battery",
    id: 10,
    parentId: 6,
  },
  { name: "گلس موبایل", slug: "category-mobile-glass", id: 11, parentId: 6 },
  { name: "اجاق گاز", slug: "category-oven", id: 14, parentId: 5 },
  { name: "روکش اجاق", slug: "category-oven-cover", id: 15, parentId: 14 },
  { name: "۱لپتاپ", slug: "category-laptop-1", id: 16, parentId: 8 },
  { name: "۲لپتاپ", slug: "category-laptop-2", id: 17, parentId: 8 },
];
export function searchPageData(slug) {
  //get all categories
  const categories = createCategoryList(navLinks);
  //get current cat by slug
  const currentCategory = getCategoryBySlug(slug);
  //get children's category
  let subCategories = getChildrenCat(currentCategory);
  //get parant's category
  let breadcrumbsCategories = makeBreadcrumbs(
    categories,
    currentCategory.parentId
  );

  let searchPageData = {
    currentCategory: currentCategory,
    subCategories: subCategories,
    parentCategories: breadcrumbsCategories,
  };

  return searchPageData;
}
export function getCategoryBySlug(slug) {
  let category = {};
  let fintCats = navLinks.filter((cat) => cat.slug === slug);
  let cat = fintCats[0];
  category = {
    name: cat.name,
    id: cat.id,
    parentId: cat.parentId,
    slug: cat.slug,
    children: createCategoryList(navLinks, cat.id),
  };
  return category;
}

export function createCategoryList(categories, parentId = null) {
  let categoryList = [];
  let cats;
  let category = {};
  if (parentId === null) {
    cats = categories.filter((cat) => cat.parentId === null);
  } else {
    cats = categories.filter((cat) => cat.parentId === parentId);
  }
  for (let cat of cats) {
    category = {
      name: cat.name,
      id: cat.id,
      parentId: cat.parentId,
      slug: cat.slug,
      children: createCategoryList(categories, cat.id),
    };
    categoryList.push(category);
  }
  return categoryList;
}

export function createCategoryListFromServer(categories, parentId = 0) {
  let categoryList = [];
  let cats;
  let category = {};
  if (parentId === 0) {
    cats = categories.filter((cat) => cat.attributes.parentId === 0);
  } else {
    cats = categories.filter((cat) => cat.attributes.parentId === parentId);
  }
  for (let cat of cats) {
    category = {
      name: cat.attributes.name,
      id: cat.id,
      parentId: cat.attributes.parentId,
      slug: cat.attributes.slug,
      children: createCategoryListFromServer(categories, cat.id),
    };
    categoryList.push(category);
  }
  return categoryList;
}

export const fakeDataSlider = [
  { imgLink: slide1, mobileLink: m1 },
  { imgLink: slide2, mobileLink: m2 },
  { imgLink: slide3, mobileLink: m3 },
  { imgLink: slide4, mobileLink: m4 },
  { imgLink: slide5, mobileLink: m5 },
  { imgLink: slide6, mobileLink: m6 },
];

// const digital = categories[4];
// iek category be in func midim bache hasho mizare to subCategories

function getChildrenCat(category) {
  let subCategories = [];
  category.children.map((child, index) => {
    let subCat = {
      name: child.name,
      slug: child.slug,
    };
    subCategories.push(subCat);
    getChildrenCat(child);
  });
  return subCategories;
}
//-------------------------------------------------------------------

//ie parentid va tamame category haro be func makeBreadcrumbs midim tamame parent hasho mizare to array breadcrumbsCategories

function makeBreadcrumbs(categories, parentId) {
  let breadcrumbsCategories = [];
  let currentCatParentId = parentId;
  while (currentCatParentId != null) {
    let founded = findParent(categories, currentCatParentId);
    if (founded != false) {
      console.log("founded", founded);
    }
    breadcrumbsCategories.push({
      name: founded.name,
      slug: founded.slug,
    });
    currentCatParentId = founded.parentId;
  }
  console.log("breadcrumbsCategories", breadcrumbsCategories);
  return breadcrumbsCategories;
}
function findParent(categories, parentId) {
  let founded = {};
  categories.map((category) => {
    if (category.id === parentId) {
      founded = category;
    }
    findParent(category.children, parentId);
  });
  if (Object.keys(founded).length > 0) {
    return founded;
  } else {
    return false;
  }
}
//------------------------------------------------------------------------------------------------------------------------------

export const product = {
  specialSale: true,
  imgUrl:
    "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
  title:
    "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
  stockNumber: 3,
  rate: "۴.۳",
  price: "۵۰,۰۰۰,۰۰۰",
  discountedPrice: "۴۵,۰۰۰,۰۰۰",
  discount: 3,
  category: 6,
};

export const allProducts = [
  {
    id: 1,
    specialSale: true,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    images: [
      "https://dkstatics-public.digikala.com/digikala-products/73409683bedd334608bd3aff7c048fcddc3094ed_1653804651.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/78148768072784b73431693d936ae1d5eb439606_1653804655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/081fcfb278d1dd56bdf49cde4bc60e80d7fd1d70_1653804657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1631704698.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      "https://cdn.wallpapersafari.com/29/55/EFmg6T.jpg",
    ],
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    stockNumber: 3,
    rate: "۴.۳",
    price: "۵۰,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: 3,
    category: 6,
  },
  {
    id: 2,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone ۱۲ pro",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 9,
  },
  {
    id: 3,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب صورتی",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 12,
  },
  {
    id: 4,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب آبی",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 13,
  },
  {
    id: 5,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/b37fec818d72ef88ab5bdd21ffa3d3e2be4f4a70_1642526181.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "ماکارونی پنه ریگاته زر ماکارون مقدار 500 گرم",
    stockNumber: 2,
    rate: "۴",
    price: "۵۳,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 2,
  },
  {
    id: 6,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/117515968.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "تی شرت مردانه کد S179",
    stockNumber: 20,
    rate: "۴",
    price: "۱۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 3,
  },
  {
    id: 7,
    specialSale: false,
    imgUrl:
      "https://dkstatics-private.digikala.com/digikala-products/207796d1e23a809407f636646336a76e5fbe86f6_1609055168.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1920095169&Signature=EXKKP%2BXn%2FDqGWp%2BlmUhyUAQANtM%3D",
    title: "لاک ناخن گلدن رز مدل Color Expert شماره 88",
    stockNumber: 20,
    rate: "۴",
    price: "۹۳,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 4,
  },
  {
    id: 8,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/4ee7993d830bd15dcc1cc662f80148529bf36916_1619271926.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "اجاق گاز اسنوا مدل SGC5-1101N Romina Series",
    stockNumber: 20,
    rate: "۴",
    price: "۱۰,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 15,
  },
  {
    id: 9,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/61f47d4064d911b6fb6d7cc60956369ecd552d47_1624952981.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "تبلت اپل مدل iPad Pro 12.9 inch 2021 5G ظرفیت 512 گیگابایت",
    stockNumber: 20,
    rate: "۴",
    price: "۵۲,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 7,
  },
  {
    id: 10,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "لپ تاپ 16.2 اینچ اپل مدل MacBook Pro MK193 2021",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 8,
  },
  {
    id: 11,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "نمونه لپ تاپ ۱",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 16,
  },
  {
    id: 12,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8b992591cd7606de5eb5affe9ec8b9725c349fe3_1654514995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "نمونه لپ تاپ ۲",
    stockNumber: 20,
    rate: "۴",
    price: "۸۳,۸۹۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 17,
  },
];

export const getProductById = (productId) => {
  const product = allProducts.find(
    (product) => product.id === parseInt(productId)
  );
  return product;
};
