import React, { useState } from "react";

function usePostData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [statusRequset, setStatusRequset] = useState(0);
  const postData = async (url, postData, method = "POST") => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          // Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          // You can add other headers here if needed
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        setStatusRequset(response.status);
        throw new Error("Request failed");
      }
      setStatusRequset(response.status);
      const responseData = await response.json();
      if (responseData?.jwt) {
        localStorage.setItem("jwt", responseData.jwt);
      }
      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, isLoading, error, result: data, statusRequset };
}

export default usePostData;
