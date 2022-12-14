import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user.js'

const state = {
  token: getToken(), // 设置 token 为共享状态 初始化 vuex 时先从缓存中读取
  userInfo: {}
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 将数据设置给 vuex
    setToken(token) // vuex 和缓存数据同步
  },
  // 删除缓存
  removeToken(state) {
    state.token = null // 将 vuex 数据置空
    removeToken() // 同步到缓存
  },
  setUserInfo(state, userInfo) {
    state.userInfo = { ...userInfo }
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo })
    return result
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
