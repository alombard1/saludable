import axios from "axios";

export const getData = (url, params) => {
  return axios({
    method: "get",
    url: url,
  }).then((response) => response.data);
};

export const getDataBy = (url, key, value, params) => {
  return axios({
    method: "get",
    url: url,
    params: {
      ...params,
      [key]: value,
    },
  }).then((response) => response.data);
};

export const postData = (url, params) => {
  return axios.post(url, params);
};

export const deleteData = (url, params) => {
  return axios.delete(url, params);
};
