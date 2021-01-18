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

         <div class="sidebar-section flex flex-col items-start w-full">

            <span class="sidebar-section__text inline-block tracking-wider uppercase">
               Profile
            </span>

            <SidebarTab
               v-for="tab in profile_tabs"
               :key="tab.id"
               :tab="tab"
               :class="(tab.id == 0) ? 'mt-6' : 'mt-4'"
               @click="setTab(tab.label)"
            ></SidebarTab>

         </div>

         <div class="sidebar-section flex flex-col items-start w-full">

            <span class="sidebar-section__text inline-block tracking-wider uppercase">
               Global
            </span>

            <SidebarTab
               v-for="tab in global_tabs"
               :key="tab.id"
               :tab="tab"
               :class="(tab.id == 0) ? 'mt-6' : 'mt-4'"
               @click="setTab(tab.label)"
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

   // Tabs Configuration

      get currentPage() {

         return vxm.root.getCurrentTab.page;
      
      }

      get profile_tabs() {

         return vxm.root.getTabs.filter(t => {

            return (t.g_label == 'profile');

         });

      }

      get global_tabs() {

         return vxm.root.getTabs.filter(t => {

            return (t.g_label == 'global');

         });

      }
      
      setTab(name: string): void {

         if(this.currentPage != name) {

            vxm.root.setTab(name);

         }


      }

   } 

</script>

<style lang="scss" scoped>

   .sidebar-util {
   
      width: var(--sidebar-width);
      height: 100%;

      background-color: rgba(var(--color-gray-dark), 1);
      // border-right: 1px solid rgba(var(--color-white-2), .1);

      .sidebar-logo {
         height: var(--navbar-util-height);
         
         &__text {
            color: rgba(var(--color-white-2), 1);
            @include typography(18px, 600, var(--line-height));
         }
      }


      .sidebar-section__text {
         color: rgba(var(--color-white-2), 1);
         @include typography(12px, 600, var(--line-height));
      }

   }

</style>