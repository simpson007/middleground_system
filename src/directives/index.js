export const imageerror = {
  inserted(dom, options) {
    // options是 指令中的变量的解释  其中有一个属性叫做 value
    // dom 表示当前指令作用的dom对象
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}
