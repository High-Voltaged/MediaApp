<template>
   
   <div class="notif-dropdown absolute right-0 -bottom-2 flex flex-col items-center px-2 py-3 overflow-hidden">

      <Tabs></Tabs>

      <div v-if="!cards.length" class="notif-dropdown__default p-3">

         <div>
            {{ tabs[currentTab].default }}
         </div>

      </div>

      <div v-else class="notif-dropdown__content flex-auto flex flex-col items-center w-full p-2 space-y-4 overflow-y-auto overflow-x-hidden">

         <NotifCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
         ></NotifCard>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";
   import Tabs from './Tabs.vue';
   import NotifCard from './NotifCard.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'NotifDropdown',
      components: {
         Tabs,
         NotifCard,
      }
   })
   export default class NotifDropdown extends Vue {

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

   .notif-dropdown {
     
      width: var(--dropdown-width);
      min-height: var(--dropdown-height);
      
      z-index: 150;
      opacity: 1;
      transform: translateY(100%);
      background-color: rgba(var(--color-gray-4), 1);
      border-radius: 20px 5px 20px 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);

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