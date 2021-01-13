import axios from "axios";

export default function require(config = { method: "get", data: {}, url: "" }) {
  // 1创建axios实例
  const instance = axios.create({
    baseURL: "api/Project/studentsGrade/",
    timeout: 5000,
    headers: {}
  });
  if (config.method == "get") {
    return instance.get(config.url, config.data);
  } else {
    return instance.post(config.url, config.data);
  }
}
