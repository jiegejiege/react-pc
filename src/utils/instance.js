import axios from 'axios';

const instance = axios.create({
  timeout: 5000,
  baseURL: 'https://net-music.penkuoer.com', // 默认域名,为所有的ajax请求设置默认的请求域名
  withCredentials: true,
});

//全局请求拦截
instance.interceptors.request.use(
  function(config) {

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 全局响应拦截
instance.interceptors.response.use(
  function(response) {
     
    return response;
  },
  function(error) {

    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, { params });
}

// export const post = (url, data) => axios.post(url, data);

export function post(url, data) {
  return instance.post(url, data);
}
