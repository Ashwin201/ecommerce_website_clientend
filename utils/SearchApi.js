"use client";
import { useEffect, useState } from "react";
import { apiKey, apiUrl } from "./URLs";

const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  };

  try {
    const res = await fetch(`${apiUrl}${endpoint}`, options);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// ===================================================

const SearchApi = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return { data };
};
export default SearchApi;
