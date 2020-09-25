import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
   namespaced: 'root',
   strict: false,
   target: 'nuxt',
})

type Section = {
   id: number;
   label: string;
   tabs: {
      id: number;
      label: string;
      icon: string;
   }[];
} 

export default class Root extends VuexModule {

   // Tab Management

   sections: Section[] = [

      {
         id: 0,
         label: 'Profile',
         tabs: [

            { id: 0, label: 'profile', icon: 'user' },
            { id: 1, label: 'settings', icon: 'user-cog' },

         ],
      },

      {
         id: 1,
         label: 'Global',
         tabs: [
            
            { id: 2, label: 'messages', icon: 'envelope' },
            { id: 3, label: 'communities', icon: 'users' },
            { id: 4, label: 'news', icon: 'newspaper' },

         ]
      }


   ];

   currentTabId: number = null;
   currentTabPage: string = null;
   
   get getSections() {
      return this.sections;
   }
   
   get getCurrentTab() {
      return {
         id: this.currentTabId,
         page: this.currentTabPage,
      }
   }

   @mutation setTab(id: number) {

      this.currentTabId = id;
      
      let tempPage: string = null;

      for(let section in this.sections) {

         let tabs = this.sections[section].tabs;

         for(let tab in tabs) {

            if(tabs[tab].id == id) {
            
               tempPage = tabs[tab].label;
            
            } else {
            
               continue;
            
            }
         }

         if(tempPage) {
            
            break;
         
         } 

      }

      this.currentTabPage = tempPage;

   } 

   // Sidebar Collapse 

      sidebar_collapse = false;

      get collapsed() {
         return this.sidebar_collapse;
      }

      @mutation collapseSidebar() {

         this.sidebar_collapse = !this.sidebar_collapse;

      }

}