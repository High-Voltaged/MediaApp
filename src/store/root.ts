import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
   namespaced: 'root',
   strict: false,
   target: 'nuxt',
})

type Tab = {
   id: number;
   label: string;
   g_label: 'profile' | 'global',
   icon: string;
} 

export default class Root extends VuexModule {

   // Tab Management

   tabs: Tab[] = [

      { id: 0, label: 'profile', g_label: 'profile', icon: 'user' },
      { id: 1, label: 'settings', g_label: 'profile', icon: 'user-cog' },
      
      { id: 2, label: 'messages', g_label: 'global', icon: 'envelope' },
      { id: 3, label: 'communities', g_label: 'global', icon: 'users' },
      { id: 4, label: 'news', g_label: 'global', icon: 'newspaper' },

   ];

   currentTabId: number = null;
   currentTabPage: string = null;
   
   get getTabs() {
      return this.tabs;
   }
   
   get getCurrentTab() {
      return {
         id: this.currentTabId,
         page: this.currentTabPage,
      }
   }

   @mutation setTab(page_name: string) {

      this.currentTabPage = page_name;
      
      this.currentTabId = this.tabs.find(t => {

         return (t.label == page_name);

      }).id;

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