// import { Alert, Snackbar } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function LoginRedirect() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const providerName = params.providerName;
  const backUrl = useSelector((state) => state.urlManager.backUrl);
  const [text, setText] = useState("Loading...");
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get("access_token");
  // const [openAlert, setAlertOpen] = useState(true);
  // const handleClose = () => {
  //   setAlertOpen(false);
  // };
  // const showAlert = () => {
  //   return (
  //     <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
  //       <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
  //         This is a success message!
  //       </Alert>
  //     </Snackbar>
  //   );
  // };
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_UPLOAD_URL}/api/auth/${providerName}/callback?access_token=${accessToken}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        //show toast
        // setAlertOpen(true);
        // showAlert();
        enqueueSnackbar("This is a success message!", "success");
        navigate(backUrl);
      })
      .catch((err) => {
        console.log(err);
        //show toast
        navigate("/login");
      });
  }, []);

  return (
    <>
      <div>{text}</div>
    </>
  );
}

export default LoginRedirect;
