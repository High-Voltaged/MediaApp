<template>
   
   <div class="unread-tabs flex items-center justify-center w-full p-1 space-x-1">

      <button
         v-for="tab in tabs"
         :key="tab.id"
         @click="setTab(tab.id)"
         :class="{ 'selected': checkTab(tab.id) }"
         class="unread-tab relative px-2 py-1"
      >

         <span>
            {{ tab.label }}
         </span>      

         <div
            :class="checkTab(tab.id) ? 'selected' : 'unselected'"
            class="selected-badge absolute bottom-0 inset-x-0 mx-auto"
         ></div>

      </button>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, InjectReactive } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'Tabs',
      components: {
      }
   })
   export default class Tabs extends Vue {

      get tabs() {

         return vxm.messages.getUnreadTabs;

      }

      get currentTab() {

         return vxm.messages.getCurrUnreadTab;

      }

      setTab(id: number) {

         vxm.messages.setUnreadTab(id);

      }

      checkTab(id: number): boolean {
        
        return (this.currentTab == id);
      
      }

   // Lifecycle Hooks 

      created() {

         this.setTab(0);

      }

   } 

</script>