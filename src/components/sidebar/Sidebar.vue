<template>
   
   <div class="sidebar-util flex-0 fixed inset-y-0 left-0 flex flex-col items-center space-y-8 p-8 overflow-hidden">

      <div class="sidebar-logo flex items-center w-full space-x-3">

         <div class="flex-0 flex items-center justify-center w-10 h-10">
            <font-awesome-icon :icon="['fas', 'certificate']" class="w-9/10 h-9/10 fill-current text-purple-1" />
         </div>

         <div class="sidebar-logo__text tracking-wider capitalize select-none">
            {{ websiteName }}
         </div>

      </div>

      <div class="sidebar-content flex flex-col items-center w-full space-y-12">

         <div
            v-for="section in sections"
            :key="section.id"
            class="sidebar-section flex flex-col items-start w-full"
         >

            <span class="sidebar-section__text inline-block tracking-wider uppercase">
               {{ section.label }}
            </span>

            <SidebarTab
               v-for="tab in section.tabs"
               :key="tab.id"
               :tab="tab"
               :class="(tab.id == 0) ? 'mt-6' : 'mt-4'"
               @click="setTab(tab.id)"
            ></SidebarTab>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import SidebarTab from './SidebarTab.vue';
   import { vxm } from '../../store'; 
   
   @Component({
      name: 'Sidebar',
      components: {
         SidebarTab,
      }
   })
   export default class Sidebar extends Vue {

      websiteName = 'website';

      get sections() {

         return vxm.root.getSections;

      }

   // Tabs Configuration

      get currentPage() {

         return vxm.root.getCurrentTab.page;
      
      }
      
      setTab(id: number): void {
         
         vxm.root.setTab(id);
         this.$router.replace({ path: `/${this.currentPage}` });

      }

   } 

</script>