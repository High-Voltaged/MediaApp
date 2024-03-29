<template>
   
   <div class="community-container flex flex-col items-center">

      <div class="community-container__bar flex items-center w-full">

         <Tabs 
            :tabs="tabs" 
            :current="currentTab"
            :parent="'community'"
            @click="setTab($event)"
         ></Tabs>

      </div>
      
      <div v-if="!communities.length" class="community-container__default flex auto flex items-center justify-center w-full">

         <div class="text-center select-none">
            {{ tabs[currentTab].default }}
         </div>

      </div>

      <div v-else class="community-container__main flex-auto flex flex-col items-center w-full overflow-y-auto overflow-x-hidden">

         <CommunityCard
            v-for="card in communities"
            :key="card.id"
            :card="card"
            @click="setCmnPage(card.id)"
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
               return (c.category == this.currentPage.toLowerCase());
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

      get currentCmnId() {
         return vxm.communities.getCurrentCmn;
      }

      setTab(id: number) {

         vxm.communities.setCmnTab(id);

      }

      setCmnPage(id: number) {

         if(this.currentCmnId != id) {

            vxm.communities.setCommunityPage(id);

         }

      }

   // Lifecycle Hooks 

      created() {

         vxm.communities.setCmnTab(0);

      }

   } 

</script>

<style lang="scss" scoped>

   .community-container {

      width: var(--main-util-width);
      height: 100%;
      max-height: 100%;

      &__bar {
         height: calc(var(--navbar-util-height) / 1.6);
         padding: 0 var(--side-padding);
         padding-right: calc(var(--side-padding) / 1.5);
      }

      &__default {
         padding: var(--side-padding);
         padding-right: calc(var(--side-padding) / 1.5);
         
         > div {
            color: rgba(var(--color-white-2), 1);
            @include typography(16px, 500, var(--line-height));
         }
      }

      &__main {
         padding: var(--side-padding);
         padding-right: calc(var(--side-padding) / 1.5);
      }

   }

</style>