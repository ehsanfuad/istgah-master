import {
  Alert,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { theme } from "../../../Theme";
import { Field, Form, Formik } from "formik";
import jwt_decode from "jwt-decode";
import useFetch from "../../../hooks/useFetch";
//rtl
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { presonalInfoSchema } from "../../../schemas";
import usePostData from "../../../hooks/usePostData";
import { useSnackbar } from "notistack";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../../hooks/useAuth";

function PersonalInfo() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const backUrl = useSelector((state) => state.urlManager.backUrl);
  const { enqueueSnackbar } = useSnackbar();

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
  const { res, loading, error } = useFetch(
    `/users/${userId}?fields[0]=firstName&fields[1]=lastName&fields[2]=username&fields[3]=email`
  );

  const {
    postData,
    isLoading,
    error: postError,
    result,
    statusRequset,
  } = usePostData();
  useEffect(() => {
    if (statusRequset >= 200 && statusRequset < 300) {
      //show toast
      enqueueSnackbar(
        <Alert variant="filled" severity="success">
          <Typography>تغییرات با موفقیت اعمال شد</Typography>
        </Alert>
      );
      navigate(backUrl);
    } else if (statusRequset == 400) {
      //show toast
      enqueueSnackbar(
        <Alert variant="filled" severity="error">
          <Typography>این ایمیل قبلا ثبت شده است</Typography>
        </Alert>
      );
    }
  }, [statusRequset]);

  const checkEmailisValid = (email, username) => {
    let emailId;
    try {
      emailId = email.substring(0, email.indexOf("@"));
    } catch (error) {
      console.log(error);
    }

    if (emailId === username) {
      return false;
    } else {
      return true;
    }
  };
  if (loading || isLoading) return <Loading />;
  if ((!loading && res?.error?.status > 400) || jwtErrorMessage) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  if (res.data === null) return "";
  const user = res;
  const onSubmit = (values, errors) => {
    let updatedUser;
    if (values.email) {
      updatedUser = {
        firstName: values.name,
        lastName: values.family,
        email: values.email,
      };
    } else {
      updatedUser = {
        firstName: values.name,
        lastName: values.family,
      };
    }
    postData(`/users/${user.id}`, updatedUser, "PUT");
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
          name: user.firstName ? user.firstName : "",
          family: user.lastName ? user.lastName : "",
          email: checkEmailisValid(user.email, user.username) ? user.email : "",
          mobile: user.username,
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
