import pageTools from './pageTools'
import uploadExcel from './uploadExcel'

export default {
  install(Vue) {
    Vue.component('pageTools', pageTools)
    Vue.component('uploadExcel', uploadExcel)
  }
}
