<template>
   
   <div class="navbar-util__dropdown absolute right-0 -bottom-2 flex flex-col items-center px-2 py-3 oveflow-hidden">

      <Tabs></Tabs>

      <div v-if="!cards.length" class="navbar-util__dropdown__default p-3">

         <div>
            {{ tabs[currentTab].default }}
         </div>

      </div>

      <div v-else class="navbar-util__dropdown__content flex-auto flex flex-col items-center w-full p-2 space-y-4 overflow-y-auto overflow-x-hidden">

         <UnreadCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
         ></UnreadCard>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, InjectReactive } from "nuxt-property-decorator";
   import Tabs from './Tabs.vue';
   import UnreadCard from './UnreadCard.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'UnreadDropdown',
      components: {
         Tabs,
         UnreadCard,
      }
   })
   export default class UnreadDropdown extends Vue {

      get cards() {

         switch(this.currentTab) {

            case 0: 
               return this.comments;
               break;
            
            case 1: 
               return this.mentions;
               break;
            
            default:
               return this.comments;
               break;

         }

      }

      get comments() {
         return vxm.messages.getComments;
      }

      get mentions() {
         return vxm.messages.getMentions;
      }

      get currentTab() {
         return vxm.messages.getCurrUnreadTab;
      }

      get tabs() {
         return vxm.messages.getUnreadTabs;
      }

   } 

</script>

<style lang="scss" scoped>

   .navbar-util__dropdown {
     
      width: var(--dropdown-width);
      min-height: var(--dropdown-height);
      
      opacity: 1;
      transform: translateY(100%);
      background-color: rgba(var(--color-gray-4), 1);
      border-radius: 20px 5px 20px 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
      z-index: 100;

      &__content {
         min-height: var(--dropdown-content-height);
         max-height: calc(var(--dropdown-content-height) * 3);
      }

      &__default > div {
         color: rgba(var(--color-white-2), 1);
         @include typography(16px, 500, var(--line-height));
      }
  
   }

   // make the following accessed globally

   .slide-fade-enter-active, .slide-fade-leave-active {
      transition: all .3s ease;
   }

   .slide-fade-enter, .slide-fade-leave-to {
      transform: translateY(95%);
      opacity: 0;
   }

</style>