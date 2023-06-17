import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
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

function AddressForm({ setShowForm, location, handleCloseMap }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const onSubmit = (values, errors) => {
    console.log("submitted");
    console.log(values);
    handleCloseMap();
  };
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const allStates = [
    {
      id: 1,
      label: "البرز",
    },
    {
      id: 2,
      label: "اردبیل",
    },
    {
      id: 3,
      label: "بوشهر",
    },
    {
      id: 4,
      label: "چهارمحال و بختیاری",
    },
    {
      id: 5,
      label: "آذربایجان شرقی",
    },
    {
      id: 6,
      label: "فارس",
    },
    {
      id: 7,
      label: "گیلان",
    },
    {
      id: 8,
      label: "گلستان",
    },
    {
      id: 9,
      label: "همدان",
    },
    {
      id: 10,
      label: "هرمزگان",
    },
    {
      id: 11,
      label: "ایلام",
    },
    {
      id: 12,
      label: "اصفهان",
    },
    {
      id: 13,
      label: "کرمان",
    },
    {
      id: 14,
      label: "کرمانشاه",
    },
    {
      id: 15,
      label: "خراسان شمالی",
    },
    {
      id: 16,
      label: "خوزستان",
    },
    {
      id: 17,
      label: "کهگیلویه و بویراحمد",
    },
    {
      id: 18,
      label: "کردستان",
    },
    {
      id: 19,
      label: "لرستان",
    },
    {
      id: 20,
      label: "مرکزی",
    },
    {
      id: 21,
      label: "مازندران",
    },
    {
      id: 22,
      label: "قزوین",
    },
    {
      id: 23,
      label: "قم",
    },
    {
      id: 24,
      label: "خراسان رضوی",
    },
    {
      id: 25,
      label: "سمنان",
    },
    {
      id: 26,
      label: "سیستان و بلوچستان",
    },
    {
      id: 27,
      label: "خراسان جنوبی",
    },
    {
      id: 28,
      label: "تهران",
    },
    {
      id: 29,
      label: "آذربایجان غربی",
    },
    {
      id: 30,
      label: "یزد",
    },
    {
      id: 31,
      label: "زنجان",
    },
  ];
  const allCities = [
    {
      id: 1,
      cities: [
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
        { label: "The Godfather: Part II", year: 1974 },
        { label: "The Dark Knight", year: 2008 },
        { label: "12 Angry Men", year: 1957 },
        { label: "Schindler's List", year: 1993 },
      ],
    },
    {
      id: 2,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 3,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 4,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 5,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 6,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 7,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 8,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 9,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 10,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 11,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 12,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 13,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 14,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 15,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 16,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 17,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 18,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 19,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 20,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 21,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 22,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 23,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 24,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 25,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 26,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 27,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 28,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 29,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 30,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 31,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
  ];
  const findCities = (stateId) => {
    return allCities.find((item, index) => item.id === stateId).cities;
  };
  const [cities, setCities] = useState(findCities(1));
  // console.log(allCities.find((item, index) => item.id === 1).cities);

  return (
    <>
      <Box height="80vh" display="flex" flexDirection="column">
        <Box height="100%" sx={{ overflowY: "scroll", marginBottom: "60px" }}>
          <Formik
            initialValues={{
              location,
              address: "",
              state: null,
              city: null,
              unit: "",
              vahed: "",
              postalCode: "",
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
                                setFieldValue("state", newValue.label);
                                setCities(findCities(newValue.id));
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
                                setFieldValue("city", newValue.label);
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
