<template>
   
   <div class="container-util flex-auto flex flex-col items-start relative px-8 pt-4">

      <Navbar />

      <router-view :key="tab.id" :name="tab.page"></router-view>
   
   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
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

         let tab = vxm.root.getCurrentTab;

         if(this.cmnPage.id) {

            tab = this.cmnPage;
            return tab;

         } else {

            return tab;;

         }

      }

      get cmnPage() {

         return vxm.communities.getCurrentCmn; 

      }

      get tabs() {

         let tabs = [...vxm.root.getSections[0].tabs, ...vxm.root.getSections[1].tabs]; 

         return tabs;

      }

      get currentTab() {

         return vxm.root.getCurrentTab.id;

      }

      @Watch('$route')
      routeConfig() {

         type Path = 'communities' | 'messages' | 'profile' | 'settings';

         let path: string = this.$route.path;
         let tab: Path = path.slice(1) as Path;
         
         if(path.includes(tab)) {

            if(path.includes('communities') && (path != '/communities')) {

               tab = 'communities';

            }

            let id: number = this.tabs.find(t => {

               return (tab == t.label);

            }).id;

            if(this.currentTab != id) {

               vxm.root.setTab(id);

            }

         }

      }

   } 

</script>