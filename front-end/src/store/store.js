import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    isLogin: false,
    origin:"http://112.74.35.49:8080/book_mng_sys_2019"
    // origin:"http://localhost:8080"
  },
  mutations: {
    userLogin (state) {
      sessionStorage.setItem('isLogin', true)
      state.isLogin = true
    },
    userLogout (state) {
      sessionStorage.setItem('isLogin', false)
      state.isLogin = false
    }
  },
  getters: {
    isLogin: (state) => {
      state.isLogin = sessionStorage.getItem('isLogin') === 'true'
      return state.isLogin
    }
  }
})
export default store
