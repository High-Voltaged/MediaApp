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

<style lang="scss" scoped>

   .background-card {
   
      height: 50%;

      border-radius: 15px;
      background-color: rgba(var(--color-gray-light), 1);
      @extend %base_transition;
      
      &.background-card-1 {
         @include background-card(1, 1rem, .7);
         transition-delay: .1s;
      }
      &.background-card-2 {
         @include background-card(2, 2rem, .5);
         transition-delay: .2s;
      }
      
   }

</style>