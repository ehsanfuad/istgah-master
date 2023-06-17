import React, { useState } from "react";
import { Container } from "@mui/material";
import SendMobile from "./SendMobile";
import VerifyMobile from "./VerifyMobile";

function Login() {
  const [readyVerifyForm, setReadyVerifyForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(null);
  const handleMobileNumber = (number) => {
    setMobileNumber(number);
  };
  return (
    <Container maxWidth="xl">
      {readyVerifyForm ? (
        <VerifyMobile
          setReadyVerifyForm={setReadyVerifyForm}
          mobileNumber={mobileNumber}
        />
      ) : (
        <SendMobile
          setReadyVerifyForm={setReadyVerifyForm}
          handleMobileNumber={handleMobileNumber}
        />
      )}
    </Container>
  );
}

export default Login;
