import axios from "axios";
const baseurl =
  "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd";
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL: baseurl,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
