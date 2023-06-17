import React from "react";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../Theme";
import useClasses from "../../hooks/useClasses";
import { loginSchema } from "../../schemas/index";
import { Field, Form, Formik, useFormik } from "formik";

function SendMobile({ setReadyVerifyForm, handleMobileNumber }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const styles = (theme) => ({
    thaiTextFieldInputProps: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    root: {
      "& .MuiFormHelperText-root": {
        textAlign: "right",
        marginRight: 2,
        fontFamily: theme.typography.subtitle1.fontFamily,
      },
    },
  });
  const classes = useClasses(styles);

  const handleSubmit = (values) => {
    //send mobile number to server
    //show verify form to user
    handleMobileNumber(values.mobile);
    setReadyVerifyForm(true);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100wh"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        px={biggerThanMd ? 3 : 0}
        height="60vh"
        width={biggerThanMd ? "350px" : "100%"}
        border={biggerThanMd ? 1 : 0}
        borderRadius={2}
        borderColor={theme.palette.grey[400]}
      >
        <Box textAlign="center" py={2}>
          <Typography variant="h4" color={theme.palette.primary.main}>
            کافه ایستگاه
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" fontSize="1.2rem">
            ورود | ثبت نام
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize="0.8rem"
            variant="subtitle1"
            color={theme.palette.grey[800]}
          >
            سلام!
            <br />
            لطفا شماره موبایل خود را وارد کنید
          </Typography>
        </Box>
        <Formik
          initialValues={{ mobile: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <Box mb={1}>
                <Field
                  name="mobile"
                  validate={(value) => {
                    if (!value) {
                      return "لطفا این قسمت را خالی نگذارید";
                    } else if (!/^(\+98|0)?9\d{9}$/.test(value)) {
                      return "شماره موبایل نادرست است";
                    }
                  }}
                >
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="mobile"
                      fullWidth
                      label=""
                      variant={biggerThanMd ? "outlined" : "filled"}
                      error={touched.mobile && Boolean(errors.mobile)}
                      helperText={touched.mobile && errors.mobile}
                      className={classes.root}
                      autoFocus
                    />
                  )}
                </Field>
              </Box>
              <Box>
                <Button
                  sx={{ py: 1.2 }}
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  ورود
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box>
          <Typography fontSize="0.7rem" color={theme.palette.grey[700]}>
            ورود شما به معنای پذیرش شرایط
            <Link underline="none">کافه ایستگاه </Link>و
            <Link underline="none">قوانین حریم‌ خصوصی</Link> است
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SendMobile;
