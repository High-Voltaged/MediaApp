<template>
   
   <div class="page__community__header flex-0 flex items-start relative">

      <div class="header-content flex flex-col items-start w-full min-h-full z-10">

         <div class="flex flex-auto items-center w-full flex-wrap">

            <div class="header-content__avatar flex-0">
               <vs-avatar size="114" history color="#9370DB">
                  <img :src="cmn.avatar" />
               </vs-avatar>
            </div>

            <div class="header-content__info flex flex-col items-start space-y-3">

               <div class="flex items-center w-full space-x-5">

                  <span class="title tracking-wide truncate select-none">
                     {{ cmn.name }}
                  </span>

                  <div class="category flex-0 inline-block">
                     <vs-button color="#1E2023" size="small">
                        #{{ cmn.category }}
                     </vs-button>
                  </div>

               </div>

               <div class="followers_num flex items-center">

                  <span class="inline-block">
                     <font-awesome-icon :icon="['fas', 'user-friends']" class="w-4 h-4 fill-current text-purple-1" />
                  </span>

                  <span class="num ml-1">
                     {{ cmn.followers }}
                  </span>

                  <span class="text ml-2"> followers </span>

               </div>

               <div class="description w-full">

                  <span class="inline-block w-full tracking-tight truncate">
                     {{ cmn.description }}
                  </span>

               </div>

            </div>

            <div class="header-content__follow flex items-center space-x-2">
               
               <vs-button color="#9370DB">
                  
                  <font-awesome-icon :icon="['fas', 'users']" class="w-4 h-4 fill-current text-white" />
                  
                  <span class="ml-2 font-semibold"> 
                     Following
                  </span>
               
               </vs-button>
            
               <div class="inline-block">
                  <vs-button icon transparent color="#FFFFFF">

                     <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="w-4 h-4 fill-current text-white" />

                  </vs-button>
               </div>

            </div>

         </div>

      </div>

      <div class="page__community__header__el inline-block">
         
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50.209" height="141.911" viewBox="0 0 50.209 141.911">
            <defs>
               <filter id="a" x="0" y="0" width="50.209" height="141.911" filterUnits="userSpaceOnUse"><feOffset input="SourceAlpha"/><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-opacity="0.659"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)"><path d="M304,88,268.791,201.834,304,214.911Z" transform="translate(-261.29 -80.5)" fill="#232529"/></g>
         </svg>

      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'CommunityHeader',
      components: {
      }
   })
   export default class CommunityHeader extends Vue {

      get cmn() {

         return vxm.communities.getCurrentPage;

      }

   } 

</script>

<style lang="scss" scoped>

   .page__community__header {
      min-height: 10.625rem;
      width: calc(100% - 2.5rem);
      margin-left: 2.5rem;

      .header-content {
         padding: 20px 35px;
         
         border-radius: 0 0 40px 40px;
         background: linear-gradient(rgba(var(--color-gray-light), 1), rgba(var(--color-gray-4), 1));
         box-shadow: 0 4px 6px 0 rgba(0, 0, 0, .3);

         &__info {
            max-width: 25rem;
            margin-left: 42px;

            .title {
               color: rgba(var(--color-white-1), 1);
               @include typography(22px, 500, 1.5);
               text-shadow: var(--heading-shadow);
            }

            .category span {
               color: rgba(255, 255, 255, .7);
            }

            .followers_num > .num {
               color: rgba(var(--color-purple-1), 1);
               @include typography(16px, 500, var(--l-height));
            }

            .followers_num > .text {
               color: rgba(var(--color-white-1), 1);
               @include typography(16px, 400, var(--l-height));
            }

            .description {
               color: rgba(var(--color-white-1), 1);
               @include typography(14px, 400, var(--l-height));
            }
         }

         &__follow {
            margin-left: 42px;
         }
      }
      
      &__el {
         position: absolute;
         top: -8px;
         left: -43px;
      }
   }

</style>