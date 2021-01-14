<template>
   
   <div 
      class="message-card-content relative" 
      :class="['mb-' + getSpacing, (collapsed ? 'w-9/10' : 'w-full')]"
   >

      <div @click="$emit('click')" class="message-card flex items-center relative w-full p-5 space-x-5 cursor-pointer">

         <div class="message-card__avatar flex-0">

            <vs-avatar size="55" pointer badge badge-color="success">
               <img :src="message.avatar" />
            </vs-avatar>

         </div>

         <div class="message-card__content flex-auto flex flex-col items-start w-0 space-y-1">

            <div class="flex items-center">

               <div class="message-card__username select-none">
                  {{ message.username }}
               </div>

            </div>

            <div class="flex flex-nowrap items-center justify-between w-full space-x-4 flex-0">

               <div class="message-card__message truncate">
                  {{ message.last }}
               </div>

               <div class="message-card__timestamp whitespace-no-wrap">
                  {{ message.timestamp }}
               </div>

            </div>

         </div>

         <div v-if="message.msg_num" class="message-card__badge flex items-center justify-center absolute -top-2 -right-2 w-8 h-8 bg-purple-1">

            <span class="leading-none select-none">
               {{ getMessageNum }}
            </span>

         </div>

      </div>

      <slot></slot>

   </div>


</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'BaseMessageCard',
      components: {
      }
   })
   export default class BaseMessageCard extends Vue {

      @Prop() private message;

      get getSpacing() {
         
         let num;

         if(this.message.msg_num) {

            if(this.message.msg_num <= 3) {
               num = (2 * this.message.msg_num - 2);
            } else {
               num = 4;
            }

         } else {
            num = 0;
         }

         return num;
      }

      get getMessageNum() {
        
         return (this.message.msg_num <= 3) ? this.message.msg_num : '3+';
      
      }

   // Sidebar Collapse 

      get collapsed() {

         return vxm.root.collapsed;

      }

   } 

</script>

<style lang="scss" scoped>

   .message-container .message-card {

      height: var(--message-card-height);

      border-radius: 15px;
      background: linear-gradient(45deg, rgba(var(--color-gray-light), 1), #1A1B1E);
      box-shadow: var(--card-shadow);
      @extend %base_transition;
      z-index: 50;

      &:hover, &:focus, &:active {
         box-shadow: var(--card-shadow-hover);
         transform: translate(0, 6px);

         ~ .background-card-1 {
            transform: translate(0, 6px);
         }
         ~ .background-card-2 {
            transform: translate(0, 6px);
         }
         
      }

      &__username {
         color: rgba(var(--color-white-2), 1);
         @include typography(14px, 500, var(--line-height));
      }

      &__message {
         color: rgba(var(--color-white-2), 1);
         @include typography(13px, 400, var(--line-height));
      }

      &__timestamp {
         color: rgba(var(--color-white-2), .4);
         @include typography(11px, 300, var(--line-height));
      }

      &__badge {
         border-radius: 12px;
         box-shadow: 0 0 7px 1px rgba(0, 0, 0, .3);
         transition: transform 0.3s ease-out;

         &:hover, &:focus {
            transform: translate(-3px, 3px);
         }

         > span {
            color: rgba(var(--color-white-2), 1);
            @include typography(13px, 500, var(--line-height));
         }
      }
   
   }

</style>