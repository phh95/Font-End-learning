const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 100
        }
    },
    getters: {
        doubleHomeCounter(state) {
            return state.homeCounter * 2
        }

        // 可以传入 4 个参数，可以拿到根文件 index 中的 rootState 和 rootGetters 
        // doubleHomeCounter(state, getters, rootState, rootGetters) {

        // }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        }
    },
    actions: {
        // incrementAction(context) {
        //     context.commit("increment")
        // },

        incrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
            commit("increment")
            // 第三个参数，提交的时候，也会影响根文件中的数据
            commit("increment", null, { root: true })
        }
    }
}

export default homeModule