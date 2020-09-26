<template>
   
   <div :class="{ 'collapsed': collapsed }" class="message-container flex flex-col items-center">

      <div class="message-container__bar flex-0 flex items-center justify-between w-full px-8">

         <Tabs 
            :tabs="msg_tabs" 
            :current="currentTab"
            :parent="'message'"
            @click="setTab($event)"
         ></Tabs>

      </div>

      <div v-if="!messages.length" class="message-container__default flex auto flex items-center justify-center w-full p-8">

         <div class="text-center select-none">
            {{ tabs[currentTab].default }}
         </div>

      </div>

      <div v-else class="flex-auto flex flex-col items-center w-full p-8 overflow-y-auto overflow-x-hidden">

         <MessageCard
            v-for="message in messages"
            :key="message.id"
            :message="message"
            :class="{ 'mt-4': (message.id != 0) }"
         >
         
            <BackgroundCard
               v-for="(card, index) in getUnread(message.msg_num)"
               :key="index"
               :id="index+1"
            ></BackgroundCard>

         </MessageCard>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch, ProvideReactive } from "nuxt-property-decorator";
   import MessageCard from '../base/MessageCard.vue';
   import Tabs from '../base/Tabs.vue';
   import BackgroundCard from '../../other/BackgroundCard.vue';
   import { vxm } from '../../../store'; 
   
   @Component({
      name: 'MessageContainer',
      components: {
         MessageCard,
         Tabs,
         BackgroundCard,
      }
   })
   export default class MessageContainer extends Vue {

   // Message Cards

      get messages() {

         switch(this.currentTab) {

            case 0: 
               return vxm.messages.getMsgs;

            case 1: {
               
               return vxm.messages.getMsgs.filter(card => {
                  return (card.msg_num > 0);
               })

            };

            case 2: 
               return 0;

            case 3: 
               return 0;

            default: 
               return 0; // --- add default here

         }
         
      }

      // the number of unread messages

      getUnread(num: number) {

         if(num != 0) {

            if((num - 1) > 2) {
               
               return 2;
            
            } else {
            
               return (num - 1);

            }

         } else {
           
           return 0;
         
         }

      }

   // Tabs 

      get tabs() {
      
         return vxm.messages.getMsgTabs;

      }

      // message tabs
      get msg_tabs() {

         return this.tabs.slice(0, 2);

      }

      // // community tabs
      // get cmn_tabs() {

      //    return this.tabs.slice(2);

      // }

      get currentTab() {

         return vxm.messages.currentMsgTab.id;

      }

      setTab(id: number) {

         vxm.messages.setMsgTab(id);

      }

      // isMsgTab(tabType: string): boolean {

      //    let tab = this[`${tabType}_tabs`].find(tab => {

      //       return (tab.id == this.currentTab);

      //    });

      //    if(tab != undefined) {
      //       return true;
      //    } else {
      //       return false;
      //    }

      // }

   // Sidebar Collapse 

      get collapsed() {

         return vxm.root.collapsed;

      }

   // Lifecycle Hooks

      created() {

         vxm.messages.setMsgTab(0);

      }

   } 

</script>