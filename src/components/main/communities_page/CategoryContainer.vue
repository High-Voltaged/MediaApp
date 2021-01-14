<template>
   
   <div class="category-container flex flex-col px-8 pb-8">

      <div class="flex-auto flex items-start relative w-4/5 h-full">

         <div class="category-container__content flex flex-col items-center w-full h-full pt-4 pb-8 overflow-y-auto overflow-x-hidden">
            
            <CategoryTab
               v-for="category in categories"
               :key="category.id"
               :category="category"
               @click="setCategory($event)"
            ></CategoryTab>      

            <div class="category-container__badge absolute -right-10 top-20">

               <vs-button size="small" color="#9370DB">

                  <span class="capitalize">
                     Categories
                  </span>

               </vs-button>

            </div>

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
      width: 40%;
      height: 100%;
      max-height: 100%;
      padding-top: var(--navbar-util-height);

      &__content {
         border-radius: 20px 0 0 20px;
         // background-color: rgba(var(--color-gray-2), 1);
         background: linear-gradient(135deg, rgba(var(--color-gray-light), 1), rgb(26, 27, 30));
         box-shadow: 0 0 18px 0px rgba(0, 0, 0, .3);
      }

      &__badge {
         transform: rotate(270deg);

         z-index: 20;
      }
   }

</style>