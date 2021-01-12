<template>
   
   <router-link 
      :to="{ path: `communities/community/${card.id}` }" 
      tag="div" 
      class="community-card flex items-center relative w-full py-4 px-6 space-x-5 cursor-pointer"
   >

      <div class="community-card__avatar flex-0">

         <vs-avatar size="45" pointer>
            <img :src="card.avatar" />
         </vs-avatar>

      </div>

      <div @click="$emit('click')" class="community-card__content flex-auto flex flex-col items-start space-y-1">

         <div 
            :class="!isCmnParent ? ['flex-col', 'items-start', 'space-y-1'] : ['items-center', 'space-x-2']" 
            class="flex w-full"
         >

            <div class="community-card__name">
               
               <span class="select-none"> 
                  {{ card.name }}
               </span>
            </div>

            <div class="community-card__tag">

               <vs-button size="mini" color="#1c1e21">

                  <span>
                     #{{ card.category.toLowerCase() }}
                  </span>

               </vs-button>

            </div>

         </div>

         <div v-if="isCmnParent" class="community-card__followers flex-0 inline-flex items-center">
            
            <div class="inline-block">
               <font-awesome-icon :icon="['fas', 'user-friends']" class="w-4 h-4 fill-current" />
            </div>

            <span class="ml-2">
               {{ card.followers }}
            </span>

            <span class="ml-1">
               followers
            </span>

         </div>
         
      </div>

      <div :class="{ 'reduced': !isCmnParent }" class="community-card__join flex-0 inline-block">

         <vs-button size="small" gradient :color="isCmnParent ? '#9370DB' : '#1c1e21'">

            <span v-if="isCmnParent" class="capitalize">
               Join
            </span>

            <span v-else>
               <font-awesome-icon :icon="['fas', 'plus']" class="w-3 h-3 fill-current" />
            </span>

         </vs-button>

      </div>

      <!-- <div v-if="!isCmnParent && card.new" class="community-card__badge absolute -bottom-2 right-8 flex items-center justify-center">
         
         <vs-button size="mini" gradient color="#9370DB">

            <span class="uppercase select-none">
               New
            </span>

         </vs-button>

      </div> -->

   </router-link>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'BaseCommunityCard',
      components: {
      }
   })
   export default class BaseCommunityCard extends Vue {

      @Prop() private card;

      // check if the child is within the CommunitiesPage component

      get isCmnParent() {

         return (this.$parent.$options.name == 'CommunityContainer');

      }

   } 

</script>