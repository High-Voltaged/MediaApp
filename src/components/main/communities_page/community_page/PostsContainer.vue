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

         <div class="posts-content__posts flex-auto">



         </div>

      </div>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'PostContainer',
      components: {
      }
   })
   export default class PostContainer extends Vue {

   

   } 

</script>