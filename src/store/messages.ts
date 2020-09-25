import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
   namespaced: 'messages',
   strict: false,
   target: 'nuxt',
})

export default class Messages extends VuexModule {

   // Base Message Cards Configuration

      messages = [

         { 
            id: 0,
            avatar: 'https://images.unsplash.com/photo-1600045002033-acbbe0681353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            username: 'John Doe',
            last: 'Hello there, nice to see you on this platform. Hello there, nice to see you on this platform', 
            msg_num: 4,
            timestamp: '12:32 AM',
         
         },

         { 
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1557274426-7a739b45d09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            username: 'Michael Gore',
            last: 'Nice to see you here! Let\'s chat.', 
            msg_num: 2,
            timestamp: '8:39 PM',
         
         },

         { 
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1557274426-7a739b45d09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            username: 'Michael Gore',
            last: 'Nice to see you here! Let\'s chat.', 
            msg_num: 3,
            timestamp: '8:39 PM',
         
         },

         { 
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1557274426-7a739b45d09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            username: 'Michael Gore',
            last: 'Nice to see you here! Let\'s chat.', 
            msg_num: 0,
            timestamp: '8:39 PM',
         
         },

         { 
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1557274426-7a739b45d09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            username: 'Michael Gore',
            last: 'Nice to see you here! Let\'s chat.', 
            msg_num: 0,
            timestamp: '8:39 PM',
         
         },

      ];

      get getMsgs() {
         return this.messages;
      }

      // get the number of unread messages 

      get getUnreadNum() {
            
         let num: number = null;
      
         for(let msg in this.messages) {
      
            num += this.messages[msg].msg_num;

         }
      
         return num;
      
      } 

   
      
      
   // Tabs (filtered messages)
   
      msgTabs = [
         { id: 0, label: 'All messages', default: 'You don\'t have any messages yet.' },
         { id: 1, label: 'Unread', default: 'There are no unread messages.' },
      ];
      
      currentMsgTabId: number = null;
      currentMsgTabPage: string = null;

      get getMsgTabs() {
         return this.msgTabs;
      }

      get currentMsgTab() {
         return {
            id: this.currentMsgTabId,
            page: this.currentMsgTabPage,
         }
      }

      @mutation setMsgTab(id: number) {

         this.currentMsgTabId = id;
         this.currentMsgTabPage = this.msgTabs[id].label;
         
      }



   // Base Unreads Configuration

      comments = [
         {
            id: 30829202,
            user: {
               id: 20930,
               username: 'John Doe',
               avatar: 'https://images.unsplash.com/photo-1600045002033-acbbe0681353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            community: {
               id: 83982,
               name: 'Big Science',
               avatar: 'https://images.unsplash.com/photo-1581319266831-d40929c204ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            content: 'A short message here.',
            timestamp: '2:42 AM',
         },

         {
            id: 9842092,
            user: {
               id: 29873,
               username: 'Michael Shaun',
               avatar: 'https://images.unsplash.com/photo-1600624688988-7522806e3d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            community: {
               id: 2983974,
               name: 'Nature',
               avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            content: 'This message won\'t be too long.',
            timestamp: '8:39 PM',
         },

         {
            id: 2092086,
            user: {
               id: 20930,
               username: 'Ellen Gore',
               avatar: 'https://images.unsplash.com/photo-1600631816858-fd6cc029a5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            },
            community: {
               id: 48092,
               name: 'Athletes',
               avatar: 'https://images.unsplash.com/photo-1600557745794-8a4dcb2071a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            content: 'Other stuff in this container.',
            timestamp: '5:20 PM',
         },

         {
            id: 8983724,
            user: {
               id: 20930,
               username: 'Ellen Gore',
               avatar: 'https://images.unsplash.com/photo-1600631816858-fd6cc029a5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            },
            community: {
               id: 48092,
               name: 'Athletes',
               avatar: 'https://images.unsplash.com/photo-1600557745794-8a4dcb2071a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            },
            content: 'Other stuff in this container.',
            timestamp: '5:20 PM',
         },
      ];

      mentions = [];

      get getComments() {
         return this.comments;
      }

      get getMentions() {
         return this.mentions;
      }

   // Tabs

      unreadTabs = [
         { id: 0, label: 'Comments', default: 'There\'re no comments here.' },
         { id: 1, label: 'Mentions', default: 'There\'re no mentions here.' },
      ];

      currentUnreadTabId: number = null;

      get getUnreadTabs() {
         return this.unreadTabs;
      }

      get getCurrUnreadTab() {
         return this.currentUnreadTabId;
      }

      @mutation setUnreadTab(id: number): void {
        
         this.currentUnreadTabId = id;
      
      }


}