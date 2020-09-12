import { useState } from "react";
import axios from "axios";

export const useAxios = (setUrl) => {
  const data = axios
    .get(setUrl)
    .then((res) => setUrl(res.data))
    .catch((err) => console.log(err.data));

  return data;
};
