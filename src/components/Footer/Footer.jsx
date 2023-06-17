import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { theme } from "../../Theme";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function Footer() {
  const list = [
    {
      title: "تماس باما",
      path: "",
    },
    {
      title: "وبلاگ",
      path: "",
    },
    {
      title: "درباره ما",
      path: "",
    },
    {
      title: "سوالات متداول",
      path: "",
    },
    {
      title: "حریم خصوصی",
      path: "",
    },
  ];
  return (
    <>
      <hr style={{ marginBottom: "2rem", border: "1px solid #f2f2f2" }} />
      <Container maxWidth="xl">
        <Box mb={5}>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                gap={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <FaCircle size="0.4rem" color="#0000FF" />
                  <Typography variant="subtitle1" fontSize="0.9rem">
                    دسترسی سریع
                  </Typography>
                </Box>
                {list.map((item, index) => (
                  <Typography
                    fontSize="0.8rem"
                    color={theme.palette.grey[800]}
                    key={index}
                    variant="subtitle2"
                  >
                    {item.title}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center" gap={1}>
                  <BsInfoCircleFill
                    size="1rem"
                    color={theme.palette.primary.main}
                  />
                  <Typography variant="subtitle1">کافه ایستگاه</Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" fontSize="0.7rem">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </Typography>
                </Box>
                <Box>
                  <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <FaCircle size="0.4rem" color="#0000FF" />
                  <Typography variant="subtitle1"> تماس با ما</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <MdLocationOn size="2rem" color={theme.palette.grey[700]} />
                  <Typography variant="subtitle1" fontSize="0.8rem">
                    تهران، خیابان مطهری، خیابان اورامان، پلاک ۷۱
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <BiSupport size="2rem" color={theme.palette.grey[700]} />
                  <Typography variant="subtitle1" fontSize="0.9rem">
                    ۰۲۱-۸۸۸۶۳۷۷۶
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
