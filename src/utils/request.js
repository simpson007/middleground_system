import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
import router from '@/router'

const TimeOut = 3600

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建axios实例
// 请求拦截器
service.interceptors.request.use(config => {
  // 统一的去注入token
  if (store.getters.token) {
    if (IsCheckTimeOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token已超时'))
    }
    // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config // 必须返回配置
}, error => {
  return Promise.reject(error)
})
service.interceptors.response.use(response => {
  // axios默认加了一层data
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    Message.error(message) // 提示错误消息
    return Promise.reject(new Error(message))
  }
}, error => {
  Message.error(error.message) // 提示错误信息
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
}) // 响应拦截器

function IsCheckTimeOut() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > TimeOut
}

export default service // 导出axios实例
