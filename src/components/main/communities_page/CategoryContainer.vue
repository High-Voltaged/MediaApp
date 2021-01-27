<template>
   
   <div class="category-container flex flex-col">

      <div class="flex flex-col items-start relative w-full h-full space-y-4">

         <div class="category-container__title flex-0 capitalize select-none">
            Community categories
         </div>

         <div class="category-container__main flex flex-col items-start w-auto py-4 space-y-4">

            <CategoryTab
               v-for="category in categories"
               :key="category.id"
               :category="category"
               @click="setCategory($event)"
            ></CategoryTab>      

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import CategoryTab from '../base/CategoryTab.vue';
   import { vxm } from '../../../store'; 

   @Component({
      name: 'CategoryContainer',
      components: {
         CategoryTab,
      }
   })
   export default class CategoryContainer extends Vue {

      get categories() {

         return vxm.communities.getCategories;

      }

      setCategory(id: number) {

         vxm.communities.setCategory(id);

      }

   } 

</script>

<style lang="scss" scoped>

   .category-container {
      width: var(--secondary-util-width);
      height: 100%;
      max-height: 100%;
      padding: var(--side-padding) calc(var(--side-padding) / 1.5);
      padding-top: calc(var(--navbar-util-height) / 1.6);

      &__main {
         min-width: 16rem;
         
         border-radius: 20px;
         background: linear-gradient(135deg, rgba(var(--color-gray-light), 1), rgb(26, 27, 30));
         box-shadow: 0 0 18px 0px rgba(0, 0, 0, .3);
      }

      &__title {
         color: rgba(var(--color-white-1), 1);
         @include typography(16px, 500, var(--l-height-sm));
         text-shadow: var(--subheading-shadow);
      }
   }

</style>