// 储存用户信息
import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'

export default {
    state: JSON.parse(localStorage.getItem('user')) || {},
    getters: {
        user: state => {
            return state.user || {}
        }
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            localStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)  // 浅拷贝
        },
        [USER_SIGNOUT](state) {
            localStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}, user) {
            commit(USER_SIGNOUT,user)
        }
    }
}
