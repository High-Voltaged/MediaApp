<template>
   
   <div class="community-container flex flex-col items-center">

      <div class="community-container__bar flex items-center w-full px-8">

         <Tabs 
            :tabs="tabs" 
            :current="currentTab"
            :parent="'community'"
            @click="setTab($event)"
         ></Tabs>


      </div>
      
      <div v-if="!communities.length" class="community-container__default flex auto flex items-center justify-center w-full p-8">

         <div class="text-center select-none">
            {{ tabs[currentTab].default }}
         </div>

      </div>


      <div v-else class="flex-auto flex flex-col items-center w-full py-8 px-6 overflow-y-auto overflow-x-hidden">

         <CommunityCard
            v-for="card in communities"
            :key="card.id"
            :card="card"
            :class="{ 'mt-6': (communities.indexOf(card) != 0) }"
         ></CommunityCard>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import CommunityCard from '../base/CommunityCard.vue';
   import Tabs from '../base/Tabs.vue';
   import { vxm } from '../../../store'; 

   @Component({
      name: 'CommunityContainer',
      components: {
         CommunityCard,
         Tabs,
      }
   })
   export default class CommunityContainer extends Vue {

   // Communities

      get communities() {

         if(this.currentTab <= 1) {
            
            switch(this.currentTab) {
   
               case 0:  
                  return vxm.communities.getCommunities;
   
               case 1: 
                  return vxm.communities.getCommunities.filter(c => {
                     return (c.managed);
                  });
            }

         } else {

            let tempCmns = vxm.communities.getCommunities;

            tempCmns = tempCmns.filter(c => {
               return (c.category == this.currentPage);
            })

            return tempCmns;

         }
         
      }


   // Tabs Configuration

      get tabs() {
         return vxm.communities.getTabs;
      }

      get currentTab() {
         return vxm.communities.currentCmnTab.id;
      }

      get currentPage() {
         return vxm.communities.currentCmnTab.page;
      }

      setTab(id: number) {

         vxm.communities.setCmnTab(id);

      }

      // setCmnPage(id: number) {

      //    vxm.communities.setCommunityPage(id);
      //    this.$router.replace({ path: `communities/community/${id}` });

      // }

   // Lifecycle Hooks 

      created() {

         vxm.communities.setCmnTab(0);

      }

   } 

</script>