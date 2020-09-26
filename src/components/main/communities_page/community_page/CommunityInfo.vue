<template>
   
   <div class="page__community__info h-full">

      <div class="info-content w-full h-full space-y-6 py-6 px-4 overflow-y-auto overflow-x-hidden">

         <InfoSection :header="sections[0].header">

            <template #content>

               <div class="info-section__info w-full">
                  <p class="inline-block text-left">
                     {{ sections[0].info }}
                  </p>
               </div>

               <div class="info-section__followers flex items-center justify-between space-x-2 w-full">

                  <div class="followers-number flex-0 flex flex-col items-center">
                     
                     <span class="inline-block uppercase">
                        {{ sections[0].followers.num }}
                     </span>
                     
                     <span class="inline-block lowercase">
                        followers
                     </span>
                  
                  </div>

                  <div class="followers-users flex-auto flex justify-end">

                     <vs-avatar-group max="6">
                        <vs-avatar
                           size="35"
                           v-for="(a, i) in sections[0].followers.users"
                           :key="i"
                        >
                           <img :src="a"/>
                        </vs-avatar>
                     </vs-avatar-group>

                  </div>

               </div>

            </template>

         </InfoSection>

         <InfoSection :header="sections[1].header">

            <template #content>

               <div class="flex flex-col items-center w-full space-y-2">

                  <div
                     v-for="admin in sections[1].admins"
                     :key="admin.id"
                     class="flex items-center w-full space-x-3 py-1"
                  >

                     <div class="info-section__avatar flex-0">

                        <vs-avatar size="30">
                           <img :src="admin.src">
                        </vs-avatar>

                     </div>

                     <div class="info-section__username flex items-center">

                        <span class="inline-block">
                           {{ admin.username }}
                        </span>

                     </div>

                  </div>

               </div>

            </template>

         </InfoSection>

      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import InfoSection from './CommunityInfoSection.vue';
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'CommunityInfo',
      components: {
         InfoSection,
      }
   })
   export default class CommunityInfo extends Vue {

      sections = [
         {
            header: 'About community',
            info: 'This community presents a lot of nice features. Join and see for yourself.',
            followers: {
               num: '250k',
               users: [
                  'https://images.unsplash.com/photo-1600800059444-e69a8af0113b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  'https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                  'https://images.unsplash.com/photo-1552334949-51934e5f2d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
               ]
            },
         },
         {
            header: 'Administration',
            admins: [
               { id: 2930932, username: 'Michael Gore', src: 'https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
               { id: 4093084, username: 'Joe Doe', src: 'https://images.unsplash.com/photo-1600800059444-e69a8af0113b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
               { id: 2982039, username: 'Mary Johnson', src: 'https://images.unsplash.com/photo-1552334949-51934e5f2d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
            ],
         }
      ]

   } 

</script>