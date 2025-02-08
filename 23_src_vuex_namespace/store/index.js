import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const counterOpt = {
    // 开启命名空间
    namespaced: true,
    state: {
        sum: 0,
        name: 'Jeremy',
        age: 28,
    },
    // 用于相应组件中的动作
    actions: {
        add(ctx, value) {
            ctx.commit('add', value)
        },
        addOdd(ctx, value) {
            if (ctx.state.sum % 2) ctx.commit('add', value)
        },
        addLater(ctx, value) {
            setTimeout(() => ctx.commit('add', value), 1000)
        }
    },
    // 用于操作数据(state)
    mutations: {
        add(state, value) {
            state.sum += value
        },
        minus(state, value) {
            state.sum -= value
        }
    },
    getters: {
        bigNum(state) {
            return state.sum * 10
        }
    },
}

const personOpt = {
    // 开启命名空间
    namespaced: true,
    state: {
        persons: [
            {
                id: '001',
                name: 'Jeremy'
            },
            {
                id: '002',
                name: 'Sean'
            }
        ]
    },
    // 用于相应组件中的动作
    actions: {},
    // 用于操作数据(state)
    mutations: {
        addPerson(state, value) {
            state.persons.unshift(value)
        }
    }
}

export default new Vuex.Store({
    // 用于存储数据
    modules: {
        counterOpt,
        personOpt
    },
})