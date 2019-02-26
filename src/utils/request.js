import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken, getLocalStoragePcode, setLocalStoragePcode, getLocalStorageTcode, setLocalStorageTcode } from '@/utils/auth'

// 创建axios实例

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // baseURL: 'http://192.168.5.172:8081/', // api的base_url
  timeout: 400000 // 请求超时时间
  // headers: 'saas-proappcode'
})
// 设置header传值模式
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// request拦截器
service.interceptors.request.use(config => {
  config.headers = config.headers
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }

  if (getLocalStoragePcode()) {
    config.headers['saas-proappcode'] = getLocalStoragePcode()
  }

  if (getLocalStorageTcode() && getLocalStorageTcode() !== 'undefined') {
    config.headers['saas-tenantcode'] = getLocalStorageTcode()
  }

  // console.log(config.headers) // for debug
  // console.log(getLocalStoragePcode()) // for debug
  // console.log(getLocalStorageTcode()) // for debug

  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    const res = response

    // console.log(response) // for debug
    // todo 修改.现在未有token

    if (response.status !== 200) {
      Message({
        message: res.data,
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(response.status)
    } else {
      // 获取头部信息
      var pcode = response.headers['saas-proappcode']
      var tcode = response.headers['saas-tenantcode']

      setLocalStoragePcode(pcode)
      setLocalStorageTcode(tcode)

      // console.log('saas-proappcode=' + pcode) // for debug
      // console.log('saas-tenantcode=' + tcode) // for debug
      // console.log(response.data) // for debug

      return response.data
    }
  },
  error => {
    // console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
