<template>
   
   <div class="info-section flex flex-col items-start w-full p-6 space-y-4">

      <div class="info-section__header w-full">
         <span class="inline-block tracking-wide capitalize select-none">
            {{ header }}
         </span>
      </div>

     <slot name="content"></slot>

   </div> 

</template> 

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../../store'; 

   @Component({
      name: 'CommunityInfoSection',
      components: {
      }
   })
   export default class CommunityInfoSection extends Vue {

      @Prop() private header: string;

   } 

</script>