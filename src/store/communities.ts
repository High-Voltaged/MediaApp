import { createModule, mutation, action } from 'vuex-class-component';
import ICommunity from '../../interfaces/community';
import followers_format from '../scripts/num_formatting';

const VuexModule = createModule({
   namespaced: 'communities',
   strict: false,
   target: 'nuxt',
})

type Category = 'Sports' | 'Science' | 'Nature' | 'Math'; 
export default class Communities extends VuexModule {

   // Base Community Cards Configuration

      communities: ICommunity[] = [

         {
            id: 4080932,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Big Science',
            category: 'science',
            followers: 3000000000,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: true,
            managed: true,
         },

         {
            id: 3982022,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Statistics',
            category: 'math',
            followers: 32973,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: false,
            managed: false,
            new: true,
         },

         {
            id: 2092882,
            avatar: 'https://images.unsplash.com/photo-1600156336721-0afd66a25271?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'World Nature',
            category: 'nature',
            followers: 29801,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: false,
            managed: false,
         },

         {
            id: 3983929,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Sports Group',
            category: 'sports',
            followers: 2902899,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: true,
            managed: true,
         },

         {
            id: 3832811,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Athletes',
            category: 'sports',
            followers: 287157398,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: true,
            managed: true,
         },

         {
            id: 3929001,
            avatar: 'https://images.unsplash.com/photo-1600156336721-0afd66a25271?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'World Nature',
            category: 'nature',
            followers: 20910919,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
            
            suggested: false,
            managed: false,
         },

         {
            id: 3938299,
            avatar: 'https://images.unsplash.com/photo-1595575690738-5fe411dccb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Big Science',
            category: 'science',
            followers: 30920,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',

            suggested: true,
            managed: false,
         },

         {
            id: 9090882,
            avatar: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Statistics',
            category: 'math',
            followers: 4092,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
            
            suggested: true,
            managed: true,
         },

      ];

      currentCmnId: number = null;

      get getCommunities() {
         
         return this.communities;

      }
   
      get getCurrentCmn() {
         return this.currentCmnId;
      }

      get getCurrentPage() {

         return this.communities.find(c => {

            return (c.id == this.currentCmnId);

         });

      }

      @mutation setCommunityPage(id: number) {

         this.currentCmnId = id;

      }

      @mutation formatFollowersNum(id: number = undefined) {

         if(id) {

            let cmn = this.communities.find(c => {

               return (c.id == id);

            });

            cmn.followers = followers_format(cmn.followers);
            return;

         }

         this.communities = this.communities.map(c => {

            c.followers = followers_format(c.followers);
            return c;

         });

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
         { id: 2, label: 'Sports', default: 'No such communities yet.', icon: 'volleyball-ball' },
         { id: 3, label: 'Science', default: 'No such communities yet.', icon: 'microscope' },
         { id: 4, label: 'Nature', default: 'No such communities yet.', icon: 'tree' },
         { id: 5, label: 'Math', default: 'No such communities yet.', icon: 'square-root-alt' },
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