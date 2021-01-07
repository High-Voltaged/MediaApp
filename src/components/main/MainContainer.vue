<template>
   
   <div class="container-util flex-auto flex flex-col items-start relative px-8 pt-4">

      <Navbar />

      <router-view :key="tab.id" :name="tab.page"></router-view>
   
   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { Route } from 'vue-router';
   import Navbar from './navbar/Navbar.vue';
   import { vxm } from '../../store'; 
   
   @Component({
      name: 'MainContainer',
      components: {
         Navbar,
      }
   })
   export default class MainContainer extends Vue {

      get tab() {

         if(this.currentCmnId) {

            return { 
               id: this.currentCmnId, 
               page: 'community' 
            };

         } else {

            return vxm.root.getCurrentTab;;

         }

      }

      get currentCmnId() {

         return vxm.communities.getCurrentCmn; 

      }

      get tabs() {

         return vxm.root.getTabs;

      }

      get currentTab() {

         return vxm.root.getCurrentTab.id;

      }

   } 

</script>