import { useState, useEffect } from "react";
import { makeRequest } from "./makeRequest";
import { getAddressId, setAddress } from "../store/addressReducer";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
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

        if (data?.addresses) {
          dispatch(setAddress(data?.addresses));
        }
        if (data?.selectedAddress) {
          dispatch(getAddressId(data.selectedAddress));
        }

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
