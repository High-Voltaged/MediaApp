<template>
   
   <div class="page__community sub flex-auto flex flex-col items-start w-full pt-6">

      <CommunityHeader></CommunityHeader>
         
      <div class="flex items-start w-full mt-7">
         
         <PostsContainer></PostsContainer>
         
         <CommunityInfo></CommunityInfo>

      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import CommunityHeader from '../communities_page/community_page/CommunityHeader.vue';
   import CommunityInfo from '../communities_page/community_page/CommunityInfo.vue';
   import PostsContainer from '../communities_page/community_page/PostsContainer.vue';
   import { vxm } from '../../../store'; 

   @Component({
      name: 'CommunityPage',
      components: {
         CommunityHeader,
         CommunityInfo,
         PostsContainer,
      }
   })
   export default class CommunityPage extends Vue {

      beforeDestroy() {

         vxm.communities.setCommunityPage(null);

      }

   } 

</script>