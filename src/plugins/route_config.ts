import { Context } from '@nuxt/types';
import { vxm } from '../store';

export default ({ app: { router } }: Context) => {

   router.beforeEach((to, from, next) => {

      switch(to.name) {

         case 'home': {

            console.log('/ path called')
            if(vxm.root.getCurrentTab.page != 'messages') {
      
               vxm.root.setTab('messages');
               
            }
            next({ name: 'messages' });
            break;

         } 

         case 'community': {

            console.log('community path called');
            if(vxm.communities.getCurrentCmn != Number(to.params.id)) {
      
               vxm.communities.setCommunityPage(Number(to.params.id));
      
            }
            next();
            break;

         }

         default: {

            console.log('default path called');
            if(vxm.root.getCurrentTab.page != to.name) {
               
               vxm.root.setTab(to.name);
      
            }
            next();

         }

      }

   })

}