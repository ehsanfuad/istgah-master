import { useState, useEffect } from "react";
import { makeRequest } from "./makeRequest";
import { useDispatch } from "react-redux";
import { colorUpdate, grindUpdate, weightUpdate } from "../store/cartReducer";

const useProduct = (url) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const product = await makeRequest.get(url);
        const response = await fetch(process.env.REACT_APP_API_URL + url, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
        const data = await response.json();
        setProduct(data);
        dispatch(colorUpdate(data?.colors[0] ? data?.colors[0] : null));
        dispatch(weightUpdate(data?.weights[0] ? data?.weights[0] : null));
        dispatch(grindUpdate(data?.grinds[0] ? data?.grinds[0] : null));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { product, loading, error };
};

export default useProduct;
