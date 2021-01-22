<template>
   
   <div class="page__community sub flex-auto flex flex-col items-start w-full overflow-y-auto overflow-x-hidden">

      <CommunityHeader></CommunityHeader>
         
      <div class="page__community__main flex-auto flex items-start justify-center w-full">
         
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

      created() {

         vxm.communities.formatFollowersNum(Number(this.$route.params.id));

      }

      beforeDestroy() {

         vxm.communities.setCommunityPage(null);

      }

   } 

</script>

<style lang="scss" scoped>

   .page__community {
      padding: calc(var(--side-padding) / 2) var(--side-padding);

      &__main {
         margin: var(--container-spacing) 0 0;
      }
   }

</style>