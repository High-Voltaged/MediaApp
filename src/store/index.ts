import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component'; 
import Root from './root';
import Messages from './messages';
import Communities from './communities';

Vue.use(Vuex);


export const store = new Vuex.Store({
   strict: false,
   modules: {
      ...extractVuexModule(Root),
      ...extractVuexModule(Messages),
      ...extractVuexModule(Communities),
   }

}); 

// Create a proxy for accessing the modules from components

export const vxm = {
   root: createProxy(store, Root),
   messages: createProxy(store, Messages),
   communities: createProxy(store, Communities),
}