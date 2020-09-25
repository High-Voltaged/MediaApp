<template>
   
   <div 
      class="background-card absolute"
      :class="`background-card-${id}`"   
   ></div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   
   @Component({
      name: 'BackgroundCard',
   })
   export default class BackgroundCard extends Vue {

      @Prop() private id: number;
      
   } 

</script>