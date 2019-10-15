import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    resumeInfo: {}
};

const mutations = {
    setResumeInfo (state, val) {
        state.resumeInfo = val;
        localStorage.setItem('resumeInfo', JSON.stringify(val));
    }
};

if (JSON.stringify(state.resumeInfo) === '{}') {
    let resumeInfo = localStorage.getItem('resumeInfo');
    if (resumeInfo) {
        state.resumeInfo = JSON.parse(resumeInfo);
    }
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: {

    }
});
