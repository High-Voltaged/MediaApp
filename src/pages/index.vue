<template>
   
   <div class="main-util w-screen h-screen flex overflow-hidden">

      <Sidebar />

      <MainContainer />

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import MainContainer from '../components/main/MainContainer.vue';
   import Sidebar from '../components/sidebar/Sidebar.vue';
   import { vxm } from '../store'; 
   
   @Component({
      name: 'index',
      components: {
         MainContainer,
         Sidebar,
      }
   })
   export default class index extends Vue {

      // created() {

      //    vxm.root.setTab(2);
      //    this.$router.push({ name: 'messages' });
      //    console.log('created');

      // }

   } 

</script>