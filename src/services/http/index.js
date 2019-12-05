import axios from 'axios'
import qs from 'qs'

// axios.defaults.headers.common['accessToken'] = sessionStorage.accessToken;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const http = {}
/**
 * @author j_bleach
 * @date 2018-09-20
 * @Description: 统一数据格式化
 * @param res:返回数据
 * @param succ:成功回调
 * @param err:失败回调
 */
http.format = (res, succ = () => {
}, err = () => {
}) => {
  if (res.data && (res.data.code === 0 || res.data.code === 200)) {
    succ(res.data.data)
    return new Promise(resolve => resolve(res.data.data))
  } else {
    err(res.data)
    return new Promise((resolve, reject) => reject(res.data))
  }
}
// 未启用
http.init = (token) => {
  axios.defaults.headers.common['Authorization'] = token
}
const checkFn = (fn) => Object.prototype.toString.call(fn) === '[object Function]'
http.get = (url, data, succ, err) => {
  // eslint-disable-next-line no-unused-expressions
  checkFn(data) && (err = succ, succ = data, data = null)
  return axios.get(url, { params: data })
    .then((res) => http.format(res, succ))
    .catch((error) => {
      checkFn(err) && err(error)
    })
}

http.post = (url, data, succ, err, set) => {
  return axios.post(url, qs.stringify(data), set)
    .then((res) => http.format(res, succ, err))
    .catch((error) => {
      checkFn(err) && err(error)
    })
}

http.put = (url, data, succ, err) => {
  return axios.put(url, data)
    .then((res) => http.format(res, succ))
    .catch((error) => {
      checkFn(err) && err(error)
    })
}

http.delete = (url, data, succ, err) => {
  return axios.delete(url, { data })
    .then((res) => http.format(res, succ))
    .catch((error) => {
      checkFn(err) && err(error)
    })
}

export default http
