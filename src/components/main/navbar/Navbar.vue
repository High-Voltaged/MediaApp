<template>
   
   <div class="navbar-util flex-0 flex items-center w-full">

      <div class="flex items-center justify-between w-full h-full">

         <transition name="fade-out">

            <div class="navbar-util__search flex items-center h-10">

               <vs-input type="search" v-model="search" placeholder="Search" autocomplete="off">

                  <!-- <template #icon>

                     <font-awesome-icon :icon="['fas', 'search']" class="w-3 h-3 fill-current" />

                  </template> -->

               </vs-input>

            </div>

         </transition>

         <div class="flex flex-auto items-center justify-end space-x-4"> 

            <div class="flex items-center relative">

               <div class="navbar-util__notif-btn ml-2">

                  <vs-button @click="setNotifDropdown" shadow class="shadow-button">

                     <font-awesome-icon :icon="['far', 'bell']" class="w-4 h-4 fill-current text-gray-300" :class="{ 'unread': unread }" />

                     <span v-if="unread" class="navbar-util__unread ml-1" :class="{ 'unread': unread }">
                        {{ unread }}
                     </span>

                  </vs-button>

               </div>

               <transition name="slide-fade">

                  <NotifDropdown
                     v-if="notifDropdownOn"
                  ></NotifDropdown>

               </transition>

            </div>

            <div class="navbar-util__avatar block relative">

               <vs-avatar @click="setUtilDropdown" size="35" color="#9370DB" pointer badge badge-color="danger">
                  <img :src="src" />
               </vs-avatar>

               <transition name="slide-fade">

                  <UtilDropdown
                     v-if="utilDropdownOn"
                  ></UtilDropdown>

               </transition>

            </div>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import NotifDropdown from './NotifDropdown.vue';
   import UtilDropdown from './UtilDropdown.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'Navbar',
      components: {
         NotifDropdown,
         UtilDropdown,
      }
   })

   export default class Navbar extends Vue {
      
      src = 'https://images.unsplash.com/photo-1600062642044-b9c49d03a89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60';
      search = '';

      search_collapse = false;

      setSearchInput() { this.search_collapse = !this.search_collapse; }

      get unread() {

         return vxm.messages.getUnreadNum;

      }

      // Dropdowns

      notifDropdownOn = false;

      setNotifDropdown() { this.notifDropdownOn = !this.notifDropdownOn; }

      utilDropdownOn = false;

      setUtilDropdown() { this.utilDropdownOn = !this.utilDropdownOn; }

   } 

</script>

<style lang="scss" scoped>

   .navbar-util {

      height: var(--navbar-util-height);
      padding: 8px var(--side-padding);
      // background-color: rgba(var(--color-gray-dark), 1);
      // border-bottom: 1px solid rgba(var(--color-white-2), .1);
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .4);
      z-index: 100;

      &__search {
         width: 20rem;

         opacity: 1;
         transform: translateX(0);
         @include typography(14px, 500, var(--line-height));
         
         .vs-input__icon > svg {
            color: rgba(var(--color-white-1), 1) !important
         }
      }

      .unread {
         color: rgba(var(--color-purple-1), 1);
      }
      
   }

   .fade-out-enter-active, .fade-out-leave-active {
      @extend %base_transition;
   }

   .fade-out-enter, .fade-out-leave-to {
      transform: translateX(30%);
      opacity: 0;
   }

</style>