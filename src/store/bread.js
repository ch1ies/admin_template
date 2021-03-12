export const BREAD = 'BREAD' // 以大写代替变量名

// 动态设置表头显示的标题
export default {
    state: {
        matchedRouter: []
    },
    getters: {
        bread: state => {
            let bread =[]
            for (let i = 0; i < state.matchedRouter.length; i++) {
                let obj = {
                    title: state.matchedRouter[i].meta.title,
                    path: state.matchedRouter[i].path,
                    isParent: state.matchedRouter[i].meta.isParent
                }
                bread.push(obj)
            }
            return bread
        }
    },
    mutations: {
        [BREAD](state, payload) {
            state.matchedRouter = payload.slice()
        }
    },
    actions: {
        // 副作用处理, commit 类似于reducer
        [BREAD]({ commit }, payload) {
            commit(BREAD, payload)
        }
    }
}