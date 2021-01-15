<template>
   
   <div class="page__communities sub flex-auto flex items-start w-full overflow-y-auto overflow-x-hidden">

      <CommunityContainer></CommunityContainer>

      <CategoryContainer></CategoryContainer>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import CommunityContainer from '../communities_page/CommunityContainer.vue';
   import CategoryContainer from '../communities_page/CategoryContainer.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'CommunitiesPage',
      components: {
         CommunityContainer,
         CategoryContainer,
      }
   })
   export default class CommunitiesPage extends Vue {

      created() {

         vxm.communities.formatFollowersNum();

      }

   } 

</script>