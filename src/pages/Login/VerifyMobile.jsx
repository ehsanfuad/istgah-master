import React, { useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../Theme";
import useClasses from "../../hooks/useClasses";
import { verifySchema } from "../../schemas/index";
import { Field, Form, Formik, useFormik } from "formik";
import { FaArrowRight } from "react-icons/fa";
import Counter from "./Counter";

function VerifyMobile({ setReadyVerifyForm, mobileNumber }) {
  const TIME = 180;
  const [count, setCount] = useState(TIME);
  const isRegistred = false;
  const isRegistredMessage = `حساب کاربری با شماره موبایل ${mobileNumber} وجود ندارد. برای ساخت حساب جدید،کد تایید برای این شماره ارسال گردید.`;
  const isNotRegistredMessage = `کد تایید برای شماره ${mobileNumber} پیامک شد`;

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
      },
    },
  });
  const classes = useClasses(styles);

  const handleSubmit = (values, errors) => {
    console.log(values.verifyNumber);
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <IconButton
            sx={{ color: theme.palette.grey[800], flexShrink: 0 }}
            size="small"
            onClick={() => {
              setReadyVerifyForm(false);
            }}
          >
            <FaArrowRight />
          </IconButton>
          <Typography
            display={biggerThanMd ? "initial" : "none"}
            variant="h4"
            color={theme.palette.primary.main}
            sx={{ flexShrink: 0, margin: "auto" }}
          >
            کافه ایستگاه
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" fontSize="1.2rem">
            کد تایید را وارد کنید
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize="0.8rem"
            variant="subtitle1"
            color={theme.palette.grey[800]}
          >
            {isNotRegistredMessage}
          </Typography>
        </Box>
        <Formik
          initialValues={{ verifyNumber: "" }}
          validationSchema={verifySchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <Box mb={1}>
                <Field name="verifyNumber">
                  {({ field }) => (
                    <TextField
                      {...field}
                      id="verifyNumber"
                      InputProps={{
                        inputProps: {
                          maxLength: 5,
                          style: {
                            textAlign: "center",
                            letterSpacing: "1em",
                          },
                        },
                      }}
                      fullWidth
                      label=""
                      variant={biggerThanMd ? "outlined" : "filled"}
                      error={Boolean(errors.verifyNumber)}
                      helperText={errors.verifyNumber}
                      className={classes.root}
                      autoFocus
                    />
                  )}
                </Field>
              </Box>
              <Box
                gap={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Counter count={count} setCount={setCount} TIME={TIME} />
                <Box mb={2} width="100%" display="flex" justifyContent="center">
                  <Button
                    sx={{ display: count > 0 ? "none" : "block" }}
                    variant="text"
                    color="primary"
                    onClick={() => setCount(TIME)}
                  >
                    <Typography fontSize="0.8rem">دریافت مجدد کد</Typography>
                  </Button>
                </Box>
                <Button
                  sx={{ py: 1.2 }}
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  ادامه
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default VerifyMobile;
