<template>
   
   <div class="unread-card flex flex-col items-start w-full">

      <div class="unread-card__at-card flex items-center w-full space-x-2 px-2 py-1">

         <div class="inline-block flex-0">

            <vs-avatar size="25">
               <img :src="card.community.avatar" />
            </vs-avatar>

         </div>

         <div class="unread-card__at-card__name flex items-center">
            
            <span class="capitalize select-none">
               @{{ card.community.name }}
            </span>

         </div>

      </div>

      <div class="unread-card__content flex items-start w-full p-2">

         <div class="flex-auto flex items-center">

            <div class="unread-card__avatar inline-block flex-0">

               <vs-avatar size="40" pointer>
                  <img :src="card.user.avatar" />
               </vs-avatar>

            </div>

            <div class="flex-auto flex flex-col items-start w-0 ml-4">

               <div class="flex items-center w-full space-x-2">

                  <div class="unread-card__username flex items-center">

                     <span class="select-none">
                        {{ card.user.username }}
                     </span>

                  </div>

                  <div class="unread-card__timestamp flex items-center">

                     <span>
                        {{ card.timestamp }}
                     </span>

                  </div>

               </div>

               <div class="unread-card__text">

                  <span>
                     {{ card.content }}
                  </span>

               </div>

            </div>

         </div>

         <div class="unread-card__button inline-block flex-0">

            <vs-button icon size="mini" color="#2f3136">

               <font-awesome-icon :icon="['fas', 'times']" class="w-2 h-2 fill-current" />

            </vs-button>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, InjectReactive } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'UnreadCard',
      components: {
      }
   })
   export default class UnreadCard extends Vue {

      @Prop() private card;

   } 

</script>

<style lang="scss" scoped>

   .unread-card {

      &__content {
         min-height: var(--unread-card-lg-height);
   
         background-color: rgba(var(--color-gray-3), 1);
         border-radius: 10px;
      }

      &__at-card {
         min-height: var(--unread-card-sm-height);

         border-radius: 15px 0 0 15px;
         &__name {
            color: rgba(var(--color-white-2), 1);
            @include typography(11px, 400, var(--line-height));
         }
      }

      &__username > span {
         color: rgba(var(--color-white-2), 1);
         @include typography(14px, 500, var(--line-height));
      }

      &__text > span {
         color: rgba(var(--color-white-2), .8);
         @include typography(13px, 400, var(--line-height));
      }

      &__timestamp > span {
         color: rgba(var(--color-white-2), .5);
         @include typography(11px, 300, var(--line-height));
      }

   }

</style>