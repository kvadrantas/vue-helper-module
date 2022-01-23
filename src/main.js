import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            multiplicationResult: 0,
            divideResult: 0,
            subtractResult: 0,
            multipleHistory: [],
            divideHistory: [],
            subtractHistory: [],
        }
    },
    getters: {
        mRez(state) {
            return state.multiplicationResult
        },
        dRez(state) {
            return state.divideResult
        },
        sRez(state) {
            return state.subtractResult
        },
        mHistory(state) {
            return state.multipleHistory;
        },
        dHistory(state) {
            return state.divideHistory;
        },
        sHistory(state) {
            return state.subtractHistory;
        }
    },
    mutations: {
        multiple(state, payload) {
            console.log('clicked', 'sk1: ', payload.sk1, ' sk2: ', payload.sk2);
            state.multiplicationResult = payload.sk1 * payload.sk2;
            state.multipleHistory.push(state.multiplicationResult)
        },
        divide(state, payload) {
            console.log('clicked', 'sk1: ', payload.sk1, ' sk2: ', payload.sk2);
            state.divideResult = payload.sk1 / payload.sk2;
            state.divideHistory.push(state.divideResult);
        },
        subtract(state, payload) {
            console.log('clicked', 'sk1: ', payload.sk1, ' sk2: ', payload.sk2);
            state.subtractResult = payload.sk1 - payload.sk2;
            state.subtractHistory.push(state.subtractResult);
        },
    },
    actions: {
        multiple(context, payload) {
            context.commit('multiple', payload);
        },
        divide(context, payload) {
            context.commit('divide', payload);
        },
        subtract(context, payload) {
            context.commit('subtract', payload);
        },
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app')
