<template>
   
   <div class="page__community__posts h-full">

      <div class="posts-content flex flex-col w-full h-full">

         <div class="posts-content__header flex items-center justify-between">

            <span class="title tracking-wide select-none"> Community Posts </span>

            <div>

               <vs-button icon transparent color="#FFFFFF">
                  <font-awesome-icon :icon="['fas', 'search']" class="w-4 h-4 fill-current text-white" />
               </vs-button>

            </div>

         </div>

         <div class="posts-content__posts flex-auto space-y-10">

            <CommunityPost
               v-for="post in 5"
               :key="post"
            ></CommunityPost>

         </div>

      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import CommunityPost from '../../base/CommunityPost.vue';
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'PostContainer',
      components: {
         CommunityPost,
      }
   })
   export default class PostContainer extends Vue {

   

   } 

</script>

<style lang="scss" scoped>

   .page__community__posts {
      width: 600px;
      margin-right: 70px;

      .posts-content {
         &__header {
            padding: 6px 30px;

            border-radius: 20px 20px 0 0;
            background-color: #24262A; // ----
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
            
            .title {
               color: rgba(var(--color-white-1), 1);
               @include typography(16px, 500, var(--l-height-sm));
               text-shadow: var(--subheading-shadow);
            }
         } 
         
         &__posts {
            margin-top: 0.75rem;
            padding: 30px 24px;

            background-color: #24262A; // ----
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
         }
         
      }
   }

</style>