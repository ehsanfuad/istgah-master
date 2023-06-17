import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import BackButton from "../components/BackButton";
import { theme } from "../../../Theme";
import { Field, Form, Formik } from "formik";
//rtl
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { presonalInfoSchema } from "../../../schemas";
function PersonalInfo() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const onSubmit = (values, errors) => {
    console.log(values);
  };
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <Box display="flex" flexDirection="column" p={2} gap={1}>
      <Box display={biggerThanMd ? "none" : "block"}>
        <BackButton title="اطلاعات حساب کاربری" backUrl="/profile" />
      </Box>
      <Box mb={2} display={biggerThanMd ? "flex" : "none"}>
        <Typography
          borderBottom={3}
          pb={1}
          borderColor={theme.palette.primary.main}
        >
          اطلاعات حساب کاربری
        </Typography>
      </Box>
      <Formik
        initialValues={{
          name: "",
          family: "",
          email: "",
          mobile: "09194209344",
        }}
        validationSchema={presonalInfoSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form autoComplete="off">
            <CacheProvider value={cacheRtl}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box p={1} pt={1} sx={{ direction: "rtl" }}>
                    <Field name="name">
                      {({ field }) => (
                        <TextField
                          {...field}
                          color="primary"
                          id="name"
                          label="نام"
                          padding="1rem"
                          fullWidth
                          dir="rtl"
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      )}
                    </Field>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box p={1} pt={1} sx={{ direction: "rtl" }}>
                    <Field name="family">
                      {({ field }) => (
                        <TextField
                          {...field}
                          color="primary"
                          id="family"
                          label="نام خانوادگی"
                          padding="1rem"
                          fullWidth
                          dir="rtl"
                          error={touched.family && Boolean(errors.family)}
                          helperText={touched.family && errors.family}
                        />
                      )}
                    </Field>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box p={1} pt={1} sx={{ direction: "rtl" }}>
                    <Field name="email">
                      {({ field }) => (
                        <TextField
                          {...field}
                          color="primary"
                          id="email"
                          label="ایمیل"
                          padding="1rem"
                          fullWidth
                          dir="rtl"
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      )}
                    </Field>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box p={1} pt={1} sx={{ direction: "rtl" }}>
                    <Field name="mobile">
                      {({ field }) => (
                        <TextField
                          {...field}
                          color="primary"
                          id="mobile"
                          label="موبایل"
                          padding="1rem"
                          fullWidth
                          dir="rtl"
                          disabled
                          error={touched.mobile && Boolean(errors.mobile)}
                          helperText={touched.mobile && errors.mobile}
                        />
                      )}
                    </Field>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box p={1} pt={3} textAlign="center">
                    <Button
                      variant="contained"
                      sx={{
                        width: biggerThanMd ? "50%" : "100%",
                        py: "0.7rem",
                        borderRadius: "0.6rem",
                      }}
                      type="submit"
                    >
                      ثبت
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CacheProvider>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default PersonalInfo;
