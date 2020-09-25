<template>
   
   <div class="page__messages sub flex-auto flex items-start justify-between w-full overflow-y-auto overflow-x-hidden">

      <MessageContainer />

      <SuggestedContainer />

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import MessageContainer from '../messages_page/MessageContainer.vue';
   import SuggestedContainer from '../messages_page/SuggestedContainer.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'MessagesPage',
      components: {
         MessageContainer,
         SuggestedContainer,
      }
   })
   export default class MessagesPage extends Vue {} 

</script>