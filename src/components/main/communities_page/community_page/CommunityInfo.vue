<template>
   
   <div class="page__community__info flex items-start justify-end">

      <div class="page__community__info-btn inline-block">

         <vs-button @click="collapseInfo" icon color="#232529">

            <font-awesome-icon :icon="['fas', (collapse_info ? 'plus' : 'minus')]" class="w-4 h-4 fill-current text-white" />

         </vs-button>

      </div>

      <div v-if="!collapse_info" class="info-content flex flex-col items-start z-10" style="padding-bottom: 10px">

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

               <span class="username ml-5 truncate">
                  {{ admin.username }}
               </span>

               <div class="tag ml-4">
                  <vs-button size="mini" circle color="#2F3136" class="mini-shadow-btn">
                     {{ admin.tag }}
                  </vs-button>
               </div>

            </div>

            <div class="flex items-center justify-end w-full">
               <vs-button transparent icon color="#000000">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" class="w-3 h-3 fill-current text-white" />
               </vs-button>
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

      admins = [
         { id: 4093084, username: 'Joe Doe', tag: 'owner', src: 'https://images.unsplash.com/photo-1600800059444-e69a8af0113b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 2930932, username: 'Michael Gore', tag: 'administrator', src: 'https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 2982039, username: 'Mary Johnson', tag: 'moderator', src: 'https://images.unsplash.com/photo-1552334949-51934e5f2d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
         { id: 3883234, username: 'Ariel Auldrin', tag: 'moderator', src: 'https://images.unsplash.com/photo-1609999962569-f0f757358cf7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
      ];
      
      collapse_info = false;

      collapseInfo(): void {

         this.collapse_info = !this.collapse_info;

      }

   } 

</script>