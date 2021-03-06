import Vue from 'vue';
import Vuex from 'vuex';
// import status from './modules/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations: {
        increment(state){
            state.count++;
        }
    }
});

export default store;