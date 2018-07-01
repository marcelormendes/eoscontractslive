//import axios from 'axios';

const initialModel = {
  contract: {
    id: null,
    name: null
  },
  contractList: [],
  tableRows: [],
  tableList: [],
  tableColumns: []
}

const state = {
  model: Object.assign({}, initialModel),
};

const mutations = {
  'document/SET_MODEL'(state, model) {
    state.model = model;
  },
  'document/RESET'(state) {
    state.model = Object.assign({}, initialModel);
  },
};

const actions = {

  ['document/setContract']: ({commit, state}, model) => {

    commit('document/SET_MODEL', {
      ...state.model,
      contract: model.contract,
      contractList: model.contractList
    })

  },

};

const getters = {


  mainPage: state => {

    return {
      contractList: state.model.contractList,
      contract: state.model.contract
    }
  },

};

export default {
  state,
  mutations,
  actions,
  getters
};
