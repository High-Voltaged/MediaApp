import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index.vue'
import ProfilePage from '~/components/main/pages/ProfilePage.vue';
import SettingsPage from '~/components/main/pages/SettingsPage.vue';
import MessagesPage from '~/components/main/pages/MessagesPage.vue';
import CommunitiesPage from '~/components/main/pages/CommunitiesPage.vue';
import CommunityPage from '~/components/main/pages/CommunityPage.vue';
import NewsPage from '~/components/main/pages/NewsPage.vue';
import { vxm } from './store';

Vue.use(Router);


export function createRouter() {

   return new Router({
      mode: 'history',
      routes: [
         {
            path: '/',
            name: 'home',
            component: index,
            children: [

               {
                  name: 'profile',
                  path: 'profile',
                  components: {
                     profile: ProfilePage
                  },
               },

               {
                  name: 'settings',
                  path: 'settings',
                  components: {
                     settings: SettingsPage
                  },
               },

               {
                  name: 'messages',
                  path: 'messages',
                  components: {
                     messages: MessagesPage
                  },
               },

               {
                  name: 'communities',
                  path: 'communities',
                  components: {
                     communities: CommunitiesPage
                  },
               },

               {
                  name: 'community',
                  path: 'communities/community/:id',
                  components: {
                     community: CommunityPage,
                  },
               },

               {
                  name: 'news',
                  path: 'news',
                  components: {
                     news: NewsPage
                  },
               },

            ]
         },
      ],
   
   })
}