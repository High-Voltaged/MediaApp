import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
   namespaced: 'communities',
   strict: false,
   target: 'nuxt',
})

type Category = 'Sports' | 'Science' | 'Nature' | 'Math'; 

export default class Communities extends VuexModule {

   // Base Community Cards Configuration

      communities = [

         {
            id: 4080932,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Big Science',
            category: 'Science',
            followers_num: 59832,

            suggested: true,
            managed: true,
         },

         {
            id: 3982022,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Statistics',
            category: 'Math',
            followers_num: 32973,

            suggested: false,
            managed: false,
            new: true,
         },

         {
            id: 2092882,
            avatar: 'https://images.unsplash.com/photo-1600156336721-0afd66a25271?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'World Nature',
            category: 'Nature',
            followers_num: 29801,

            suggested: false,
            managed: false,
         },

         {
            id: 3983929,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Sports Group',
            category: 'Sports',
            followers_num: 2902899,

            suggested: true,
            managed: true,
         },

         {
            id: 3832811,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Athletes',
            category: 'Sports',
            followers_num: 287157398,

            suggested: true,
            managed: true,
         },

         {
            id: 3929001,
            avatar: 'https://images.unsplash.com/photo-1600156336721-0afd66a25271?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'World Nature',
            category: 'Nature',
            followers_num: 20910919,
            
            suggested: false,
            managed: false,
         },

         {
            id: 3938299,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Big Science',
            category: 'Science',
            followers_num: 30920,

            suggested: true,
            managed: false,
         },

         {
            id: 9090882,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Statistics',
            category: 'Math',
            followers_num: 4092,
            
            suggested: true,
            managed: true,
         },

      ];

      currentCmnId: number = null;
      currentCmnPage: string = null;

      get getCommunities() {
         return this.communities;
      }
   
      get getCurrentCmn() {
         return {
            id: this.currentCmnId,
            page: this.currentCmnPage,
         };
      }

      @mutation setCommunityPage(id: number) {

         this.currentCmnId = id;
         this.currentCmnPage = 'community';

      }


   // Tabs

      tabs = [
         { id: 0, label: 'My communities', default: 'You are not a part of any community yet.' },
         { id: 1, label: 'Managed communities', default: 'You are not managing any community.' },
      ];

      get getTabs() {
         return this.tabs;
      }

      currentCmnTabId: number = null;
      currentCmnTabPage: string = null;

      get currentCmnTab() {
         return {
            id: this.currentCmnTabId,
            page: this.currentCmnTabPage,
         }
      } 

      @mutation setCmnTab(id: number) {

         this.currentCmnTabId = id;
         this.currentCmnTabPage = this.tabs[id].label;

      }


   // Category Tabs

      categories = [
         { id: 2, label: 'Sports', icon: 'volleyball-ball' },
         { id: 3, label: 'Science', icon: 'microscope' },
         { id: 4, label: 'Nature', icon: 'tree' },
         { id: 5, label: 'Math', icon: 'square-root-alt' },
      ];
      
      get getCategories() {
         return this.categories;
      }

      @mutation setCategory(id: number) {

         this.currentCmnTabId = id;
         this.currentCmnTabPage = this.categories.find(c => {
            return (c.id == id);
         }).label;

      } 


   // Other

      get getSuggested() {
         
         return this.communities.filter(c => {
            return c.suggested;
         });
      
      }

}