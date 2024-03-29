<template>
   
   <div class="page__community__info flex flex-col items-start justify-end">

      <div class="info-content flex flex-col items-start z-10">

         <div class="info-content__title flex justify-center items-center w-full">
            
            <span class="tracking-wide select-none"> Community Info </span>

         </div>

         <div class="info-content__description w-full">

            <span class="inline-block w-full">
               {{ cmn.description }}
            </span>

         </div>

         <div class="info-content__util flex items-center justify-evenly w-full space-x-2">

            <div 
               v-for="(el, i) in 2"
               :key="i"
               class="flex flex-col items-center justify-center h-full"
            >

               <span class="select-none">
                  {{ !i ? 'Followers' : 'Posts' }}
               </span>

               <span>
                  {{ !i ? cmn.followers : '50k' }}
               </span>

            </div>

         </div>

      </div>

      <div class="info-content flex flex-col items-start z-10">

         <div class="info-content__title flex justify-center items-center w-full">
            
            <span class="tracking-wide select-none"> Administration </span>

         </div>

         <div class="info-content__admins flex flex-col items-start w-full">

            <div 
               v-for="admin in admins" 
               :key="admin.id" 
               class="info-content__admin flex items-center max-w-full"
            >

               <div class="info-content__avatar flex-0">
                  <vs-avatar size="35" color="#1E2023">
                     <img :src="admin.src" />
                  </vs-avatar>
               </div>

               <div class="info-content__details flex-auto flex flex-col items-start space-y-1 ml-5">

                  <span class="username w-full truncate">
                     {{ admin.username }}
                  </span>

                  <div class="inline-block tag">
                     <vs-button size="mini" circle color="#32353b" class="mini-shadow-btn">
                        {{ admin.tag }}
                     </vs-button>
                  </div>

               </div>

            </div>

         </div>
         
      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'CommunityInfo',
      components: {
      }
   })
   export default class CommunityInfo extends Vue {

      get cmn() {

         return vxm.communities.getCurrentPage;

      }

      admins = [
         { id: 4093084, username: 'Joe Doe', tag: 'owner', src: 'https://images.unsplash.com/photo-1600800059444-e69a8af0113b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 2930932, username: 'Michael Gore Michael Gore', tag: 'administrator', src: 'https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 2982039, username: 'Mary Johnson', tag: 'moderator', src: 'https://images.unsplash.com/photo-1552334949-51934e5f2d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 3883234, username: 'Ariel Auldrin', tag: 'moderator', src: 'https://images.unsplash.com/photo-1609999962569-f0f757358cf7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
      ];

   } 

</script>

<style lang="scss" scoped>

   .page__community__info {
      width: auto;

      .info-content {
         width: 17.5rem;
         padding: 20px;
         
         @media #{$media-lg} {
            width: 15.5rem;
         }

         @media #{$media-xl} {
            width: 17.5rem;
         }
         
         border-radius: 20px;
         background: linear-gradient(45deg, rgba(var(--color-gray-3), 1), rgba(var(--color-featured), 1));
         box-shadow: 0 0 10px 0 rgba(0, 0, 0, .35);

         &:nth-of-type(2) {
            margin-top: calc(var(--container-spacing) / 2);
         }

         &__admins, &__description, &__util {
            margin-top: 0.875rem;
         }

         &__title {
            color: rgba(var(--color-white-1), 1);
            @include typography(16px, 500, var(--l-height-sm));
            text-shadow: var(--subheading-shadow);
         }

         // Community Info
         &__description {
            color: rgba(var(--color-white-1), 1);
            @include typography(14px, 300, var(--l-height-lg));
         }

         &__util div {
            span:nth-of-type(1) {
               @include typography(11px, 400, var(--l-height-sm));
               color: rgba(255, 255, 255, .8);
            }

            span:nth-of-type(2) {
               @include typography(14px, 500, var(--l-height));
               color: rgba(var(--color-white-1), 1);
            }
         }

         // Administration
         &__admin {
            &:not(:first-child) {
               margin-top: 1.125rem;
            }

            .info-content__details {
               min-width: 0;
            }

            .username {
               color: rgba(var(--color-white-1), 1);
               @include typography(14px, 500, var(--l-height));
            }

            .mini-shadow-btn {
               box-shadow: 0 0 4px 0 rgba(0, 0, 0, .2);
            }
         }
      }
   }

</style>