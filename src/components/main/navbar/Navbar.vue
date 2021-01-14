<template>
   
   <div class="navbar-util flex-0 flex items-center w-full px-8">

      <div class="flex items-center justify-between w-full h-full">

         <div class="navbar-util__search flex items-center h-10">

            <vs-input type="search" v-model="search" placeholder="Search" border color="#9370DB">

               <template #icon>

                  <font-awesome-icon :icon="['fas', 'search']" class="w-3 h-3 fill-current" />

               </template>

            </vs-input>

         </div>

         <div class="flex items-center space-x-4"> 

            <div class="inline-block relative">

               <vs-button @click="setDropdown" shadow class="shadow-button">

                  <font-awesome-icon :icon="['far', 'bell']" class="w-4 h-4 fill-current text-gray-300" :class="{ 'unread': unread }" />

                  <span v-if="unread" class="navbar-util__unread ml-1" :class="{ 'unread': unread }">
                     {{ unread }}
                  </span>

               </vs-button>

               <transition name="slide-fade">

                  <UnreadDropdown
                     v-if="dropdownOn"
                  ></UnreadDropdown>

               </transition>

            </div>

            <vs-avatar size="35" color="#9370DB" pointer badge badge-color="danger">
               <img :src="src" />
            </vs-avatar>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, InjectReactive } from "nuxt-property-decorator";
   import UnreadDropdown from './UnreadDropdown.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'Navbar',
      components: {
         UnreadDropdown,
      }
   })
   export default class Navbar extends Vue {

      search = '';

      src = 'https://images.unsplash.com/photo-1600062642044-b9c49d03a89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60';

      get unread() {

         return vxm.messages.getUnreadNum;

      }

      // Dropdown

      dropdownOn = false;

      setDropdown() {

         this.dropdownOn = !this.dropdownOn;

      }

   } 

</script>

<style lang="scss" scoped>

   .navbar-util {

      height: var(--navbar-util-height);

      &__search {
         width: 10rem;
         
         input {
            @include typography(13px, 500, var(--line-height));
         }
      }

      .unread {
         color: rgba(var(--color-purple-1), 1);
      }

      .vs-input__icon > svg {
         color: rgba(var(--color-white-2), .8) !important
      }

   }

</style>