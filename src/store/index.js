import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import bread from './bread'
import user from './user'

Vue.use(Vuex)

const store = new Store({
    modules: {
        bread,
        user
    }
})

export default store