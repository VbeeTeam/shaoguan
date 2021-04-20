import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //数据状态
    title: "标题"
  },
  mutations: { //同步
    mutationsTitle(state, str){
      return state.title = str;
    }
  },
  actions: { //异步操作
    actionsTitle(context, str){
      return context.commit("mutationsTitle", str)
    }
  },
  getters: { //计算属性，用于对store中的数据进行处理形成新的数据
    showTitle(state) {
      return '当前最新的标题是' + state.title
    }
  },
  modules: { //可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。配置公共模块
  }
})
