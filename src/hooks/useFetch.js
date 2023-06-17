import { useState, useEffect } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setRes(res);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { res, loading, error };
};

export default useFetch;
