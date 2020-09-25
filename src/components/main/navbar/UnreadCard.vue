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

            <vs-button size="mini" color="#2f3136">

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