import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import casos from '@/store/modules/casos.module.js';
import usuario from '@/store/modules/usuario.module.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {
   
  },
  actions: {

  },
  modules:{
    casos,
    usuario
  }
})

