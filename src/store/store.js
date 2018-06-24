import Vue from 'vue';
import Vuex from 'vuex';

import document from './document.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    error: null,
    counter: 0,
    load: 0,
    layout: {
      height: 0,
      width: 0
    }
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    counterString: state => {
      return state.counter + ' clicks'
    },
    errorMsg: state => {
      return state.error ? state.error + '' : null
    },
    isLoading: state => {
      return state.load > 0
    },
    layoutHeight: state => {
      return state.layout.height
    },
    layoutWidth: state => {
      return state.layout.width
    }
  },
  mutations: {
    increment: state => {
      state.counter++
    },
    decrement: state => {
      state.counter--
    },
    'SET_ERROR' (state, error) {
      state.error = error;
    },
    'LOAD_START' (state) {
      state.load++;
    },
    'LOAD_FINISH' (state) {
      state.load--;
      if(state.load < 0) state.load = 0;
    },
    'LAYOUT_HEIGHT' (state, size) {
      state.layout.height = size;
    },
    'LAYOUT_WIDTH' (state, size) {
      state.layout.width = size;
    },
  },
  actions: {
    load: ({commit}, finish) => {
      commit(finish ? 'LOAD_FINISH' : 'LOAD_START');
    }
  },
  modules: {
    document,
  }
})
