import React, { useState } from "react";

function usePostData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (url, postData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          // You can add other headers here if needed
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      if (responseData) {
        console.log(responseData);
        localStorage.setItem("jwt", responseData.jwt);
      }
      console.log(responseData);
      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, isLoading, error, result: data };
}

export default usePostData;
