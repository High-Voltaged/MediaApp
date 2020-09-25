<template>
   
   <div 
      :class="`${parent}-container__tabs`" 
      class="flex items-center h-full">

      <button
         v-for="tab in tabs"
         :key="tab.id"
         @click="$emit('click', tab.id)"
         :class="[{ 'tab-selected': checkTab(tab.id) }, `${parent}-container__tab`]"
         class="tab-util block flex-0 relative px-2"
      >
      
         <span 
            class="inline-block select-none"
            :class="{ 'selected': checkTab(tab.id) }"
         >
            {{ tab.label }}
         </span>

         <div
            v-if="parent == 'message' || parent == 'community'"
            :class="checkTab(tab.id) ? 'selected' : 'unselected'"
            class="selected-badge absolute -bottom-2 inset-x-0 mx-auto"
         ></div>

      </button>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 

   type Tab = { id: number; label: string; default: string };

   @Component({
      name: 'Tabs',
   })
   export default class Tabs extends Vue {

   // Tabs

      @Prop() private tabs: Tab[];

      @Prop() private current;

      @Prop() private parent; // for a class name

      checkTab(id: number) {
         
         return (id == this.current);

      }

   } 

</script>