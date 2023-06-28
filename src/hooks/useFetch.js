import { useState, useEffect } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await makeRequest.get(url);
        const response = await fetch(process.env.REACT_APP_API_URL + url, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
        const data = await response.json();
        setRes(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { res, loading, error };
};

export default useFetch;
