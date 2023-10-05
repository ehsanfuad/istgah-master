import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import Loading from "../../components/Loading/Loading";

function Invoice() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const authority = queryParams.get("Authority");
  const status = queryParams.get("Status");
  const { postData, isLoading, error, result, statusRequset } = usePostData();
  useEffect(() => {
    const data = {
      authority,
      status,
    };
    postData(`/order/checkPeyment`, data);
  }, []);
  if (isLoading) return <Loading />;
  console.log(result);
  return (
    <div>
      <div>{authority}</div>
      <br />
      <div>{status}</div>
    </div>
  );
}

export default Invoice;
