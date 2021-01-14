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

<style lang="scss" scoped>

   .unread-tab {
      
      > span {
         color: rgba(var(--color-white-2), .8);
         @include typography(13px, 500, var(--line-height));
      }

      &.selected > span {
         color: rgba(var(--color-white-2), 1);
      }

      .selected-badge {
         height: 3px;
         width: 40px;
         border-radius: 10px 10px 0 0;
         background-color: rgba(var(--color-purple-1), 1);
         @extend %base_transition;

         &.selected {
            transform: translateY(0);
            opacity: 1;
         }
         &.unselected {
            transform: translateY(3px);
            opacity: 0;
         }
      }
      
   }

</style>