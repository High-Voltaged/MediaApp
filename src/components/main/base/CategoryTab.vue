<template>
   
   <button 
      @click="$emit('click', category.id)"
      :class="{ 'selected': checkCurrent(category.id) }" 
      class="category-tab flex items-center relative w-full my-2 py-2 px-8">

      <div 
         class="category-tab__icon inline-block"
         :class="{ 'selected': checkCurrent(category.id) }"
      >
         <font-awesome-icon :icon="['fas', category.icon]" class="w-4 h-4 fill-current" />
      </div>

      <div 
         class="category-tab__text inline-block ml-4 tracking-wide"
         :class="{ 'selected': checkCurrent(category.id) }"   
      >
         
         <span class="select-none">
            {{ category.label }}
         </span>

      </div>

      <div
         :class="checkCurrent(category.id) ? 'selected-badge' : 'unselected-badge'"
         class="category-tab__selected absolute left-0 inset-y-0"
      ></div>

   </button>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 

   type Category = { id: number; label: string; icon: string };

   @Component({
      name: 'CategoryTab',
   })
   export default class CategoryTab extends Vue {

      @Prop() private category: Category;

      get currentTab() {

         return vxm.communities.currentCmnTab.id;

      }

      checkCurrent(id: number) {

         return (this.currentTab == id);

      }
  
   } 

</script>