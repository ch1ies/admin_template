import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import bread from './bread'

Vue.use(Vuex)

const store = new Store({
    modules: {
        bread
    }
})

export default store