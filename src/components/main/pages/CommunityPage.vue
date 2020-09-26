<template>
   
   <div class="page__community sub flex-auto flex items-start w-full relative pt-4 overflow-x-hidden overflow-y-auto">

      <div class="sub flex flex-col items-start h-full">
         
         <CommunityHeader></CommunityHeader>

         <PostsContainer></PostsContainer>
         
      </div>      

      <CommunityInfo></CommunityInfo>

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

   

   } 

</script>