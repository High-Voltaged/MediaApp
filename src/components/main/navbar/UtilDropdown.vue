<template>
   
   <div class="util-dropdown absolute right-0 -bottom-2 flex">

      <div class="util-dropdown__content flex items-start w-full relative">

         <div class="util-dropdown__util-note flex flex-col items-center justify-center h-full">

            <span class="select-none"> Followers </span>

            <span>
               {{ user.followers }}
            </span>

         </div>

         <div class="util-dropdown__content-main flex flex-col items-center ml-6">

            <div class="name-info flex flex-col w-full">

               <span class="inline-block w-full text-center tracking-wide">
                  {{ user.name }}
               </span>
               
               <span class="inline-block w-full text-center">
                  #{{ user.username }}
               </span>

            </div>

            <div class="avatar inline-block mt-3 -mb-8">

               <vs-avatar circle size="80">
                  <img :src="user.src" />
               </vs-avatar>

            </div>

         </div>

         <div class="util-dropdown__util-note flex flex-col items-center justify-center h-full ml-6">

            <span class="select-none"> Friends </span>

            <span>
               {{ user.friends }}
            </span>

         </div>

         <div class="util-dropdown__btn-a absolute -bottom-2">

            <vs-button size="small" block color="#FFFFFF">

               <font-awesome-icon :icon="['far', 'question-circle']" class="w-4 h-4 fill-current text-black" />

               <span class="ml-1 text-black"> FAQs </span>

            </vs-button>

         </div>

         <div class="util-dropdown__btn-b absolute -bottom-2">

            <vs-button size="small" block color="#9370DB">

               <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="w-4 h-4 fill-current text-white" />

               <span class="ml-1"> Log out </span>

            </vs-button>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'UtilDropdown',
      components: {},
   })

   export default class UtilDropdown extends Vue {

      user = {
         name: 'Adeline Stuart',
         username: 'user_name',
         src: 'https://images.unsplash.com/photo-1600062642044-b9c49d03a89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
         followers: '89K',
         friends: '2.5K',
      };

   }

</script>

<style lang="scss" scoped>

   .util-dropdown {
      min-height: 8rem;

      opacity: 1;
      transform: translateY(100%);
      background-color: rgba(var(--color-gray-2), 1);
      border-radius: 20px 5px 20px 20px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);

      &__content {
         padding: 12px 30px;

         &-main {
            min-width: 7rem;

            .name-info span:nth-of-type(1) {
               @include typography(15px, 500, var(--l-height));
               color: rgba(var(--color-white-1), 1);
            }

            .name-info span:nth-of-type(2) {
               @include typography(12px, 400, var(--l-height));
               color: rgba(255, 255, 255, .7);
            }
         }
      }

      &__util-note {
         min-width: 51px;

         span:nth-of-type(1) {
            @include typography(11px, 400, var(--l-height-sm));
            color: rgba(255, 255, 255, .8);
         }

         span:nth-of-type(2) {
            @include typography(14px, 500, var(--l-height));
            color: rgba(var(--color-white-1), 1);
         }
      }

      &__btn-a, &__btn-b {
         width: 5.25rem;
      }

      &__btn-a {
         left: 23px;
      }

      &__btn-b {
         right: 23px;
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