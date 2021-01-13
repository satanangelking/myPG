import axios from "axios";

// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = "api/Project/studentsGrade/";
// export function get(config) {
//   return new Promise(function(resolve, reject) {
//     axios
//       .get(config.url, config)
//       .then(function(response) {
//         // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
//         resolve(response.data);
//       })
//       .catch(function(error) {
//         reject(error);
//       });
//   });
// }
// export function post(config) {
//   return new Promise(function(resolve, reject) {
//     axios
//       .post(config.url, config.data)
//       .then(function(response) {
//         resolve(response.data);
//       })
//       .catch(function(error) {
//         reject(error);
//       });
//   });
// }

// const instance = axios.create({
//   baseURL: "api/Project/studentsGrade/",
//   timeout: 5000,
//   headers: {}
// });

// export function post(url, data = {}) {
//   // 1创建axios实例
//   console.log(instance());
//   return instance.post(url, data);
// }

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function require(config = { method: "get", data: {}, url: "" }) {
  // 1创建axios实例
  const instance = axios.create({
    baseURL: "api/Project/studentsGrade/",
    timeout: 5000,
    headers: {}
  });
  // 和方法3相比，因为内置有promise因此不用再新建 直接用就行
  if (config.method == "get") {
    return instance.get(config.url, config.data);
  } else {
    return instance.post(config.url, config.data);
  }
}
