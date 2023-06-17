import React from "react";
import "./InfoCard.scss";
import { Box } from "@mui/system";
import { SlDiamond } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import {
  Typography,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import theme from "../../Theme";
function InfoCard() {
  const cards = [
    {
      title: "تضمین کیفیت",
      subTitle: "کیفیت استاندارد",
      icon: <SlDiamond size={20} />,
    },
    {
      title: "تحویل سریع",
      subTitle: "با پست و پیک",
      icon: <BsBoxSeam size={20} />,
    },
    {
      title: "پشتیبانی",
      subTitle: "پاسخگویی و راهنمایی",
      icon: <BiSupport size={20} />,
    },
    {
      title: "تضمین قیمت",
      subTitle: "مناسب ترین قیمت",
      icon: <GrCertificate size={20} />,
    },
  ];
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const border = (id) => {
    if (id === 4) {
      return 0;
    } else {
      if (onlySmallScreen && id === 2) {
        return 0;
      } else {
        return 1;
      }
    }
  };
  return (
    <Box className="card-info">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        {cards.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
              py={3}
              borderLeft={border(card.id)}
              borderBottom={1}
              borderColor={(theme) => theme.palette.grey[300]}
            >
              {card.icon}
              <Typography variant="subtitle1" fontSize="1rem">
                {card.title}
              </Typography>
              <Typography variant="subtitle1" fontSize="1rem" color="GrayText">
                {card.subTitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InfoCard;
