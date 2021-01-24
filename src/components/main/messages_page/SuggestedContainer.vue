<template>
   
   <div :class="{ 'collapsed': collapsed }" class="suggested-container flex flex-col items-start relative">

      <div :class="{ 'collapsed-bar': collapsed }" class="suggested-container__bar flex-0 flex items-center justify-between w-full space-x-2">

         <transition name="fade">

            <div v-if="!collapsed" class="suggested-container__bar-text capitalize select-none">
               Suggested communities
            </div>

         </transition>


         <!-- <div class="suggested-container__collapse-btn flex items-center">

            <vs-button icon shadow @click="setSidebar" class="shadow-button inline-block">
               
               <font-awesome-icon :icon="['fas', 'indent']" class="w-4 h-4 fill-current" />

            </vs-button>

            -- work on the transitioning

         </div> -->

      </div>

      <transition name="slide-collapse">

         <div v-if="!collapsed" class="suggested-container__main flex-auto flex flex-col items-center w-full overflow-y-auto overflow-x-hidden space-y-4">

            <CommunityCard
               v-for="card in communities"
               :key="card.id"
               :card="card"
            ></CommunityCard>

         </div>

      </transition>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import CommunityCard from '../base/CommunityCard.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'SuggestedContainer',
      components: {
         CommunityCard,
      }
   })
   export default class SuggestedContainer extends Vue {

      get communities() {

         return vxm.communities.getSuggested;

      }

      get collapsed() {

         return vxm.root.collapsed;

      }

      setSidebar() {

         vxm.root.collapseSidebar();

      }

   } 

</script>

<style lang="scss" scoped>

   .suggested-container {

      width: var(--secondary-util-width);
      height: 100%;
      max-height: 100%;

      &.collapsed {
         width: var(--navbar-util-height) !important;
         margin-left: 2rem;
         @extend %base_transition;
      }

      &__bar {
         height: calc(var(--navbar-util-height) / 1.6);
         padding: 0 calc(var(--side-padding) / 1.5) 0;

         &.collapsed-bar {
            padding: 0;
         }

         &-text {
            color: rgba(var(--color-white-2), 1);
            @include typography(14px, 500, var(--l-height));
         }
      }

      &__main {
         padding: var(--side-padding) calc(var(--side-padding) / 1.5);
      }

      &__collapse-btn {
         svg {
            color: rgba(var(--color-white-2), 1);
         }
      }

   }

</style>