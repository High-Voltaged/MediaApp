<template>

   <router-link :to="{ name: tab.label }" tag="div" class="block w-full">

      <button @click="$emit('click')" class="sidebar-tab inline-block relative flex items-center w-full px-2 py-1">

         <font-awesome-icon 
            :icon="['fas', tab.icon]" 
            class="sidebar-tab__icon flex-0 w-4 h-4 fill-current" 
            :class="{ 'selected': isSelected() }"
         />
      
         <span 
            class="sidebar-tab__text inline-block ml-5 capitalize"
            :class="{ 'selected': isSelected() }"
         >
            {{ tab.label }}
         </span>

         <div 
            :class="isSelected() ? 'selected-badge' : 'unselected-badge' " 
            class="sidebar-tab__selected absolute inset-y-0 -left-8"
         ></div>

      </button>

   </router-link>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import { vxm } from '../../store'; 
   
   @Component({
      name: 'SidebarTab',
   })
   export default class SidebarTab extends Vue {

      @Prop() private tab;

      // get currentPage() {

      //    return vxm.root.getCurrentTab.page;

      // }

      get currentTabId() {
         
         return vxm.root.getCurrentTab.id;
      
      }

      isSelected(): boolean {

         return (this.currentTabId == this.tab.id);

      }

   } 

</script>

<style lang="scss" scoped>

   .sidebar-util .sidebar-tab {
      
      &__text {
         color: rgba(var(--color-white-2), 1);
         @include typography(14px, 500, var(--line-height));
      }
      
      &__icon {
         color: rgba(var(--color-white-2), 1);
      }

      &__selected {
         width: 5px;
         height: 100%;

         border-radius: 0 20px 20px 0;
         background-color: rgba(var(--color-purple-1), 1);
         @extend %base_transition;
         
         &.selected_badge {
            transform: translateX(0) !important;
            opacity: 1 !important;
         }
   
         &.unselected-badge {
            transform: translateX(-6px);
            opacity: 0;
         }
      }

      .selected {
         color: rgba(var(--color-purple-1), 1);
         @extend %base_transition;
      }
   
   }

</style>