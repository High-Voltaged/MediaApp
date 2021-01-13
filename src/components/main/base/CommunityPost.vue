<template>
   
   <div class="posts-content__post w-full">

      <div class="posts-content__post__main flex flex-col items-start w-full relative">
         
         <div class="post__rate inline-block absolute">

            <vs-button color="#9370DB">
               
               <font-awesome-icon :icon="['fas', 'exchange-alt']" class="w-4 h-4 fill-current text-white" style="transform: rotate(90deg)" />

               <span>
                  {{ post.rate }}
               </span>

            </vs-button>

         </div>

         <div class="post__header flex items-center justify-end w-full space-x-1">

            <span class="inline-block"> Posted by </span>

            <font-awesome-icon :icon="['fas', 'user']" class="w-3 h-3 fill-current text-white" style="color: rgba(255, 255, 255, .75)" />

            <span class="inline-block">
               {{ post.author }}
            </span>

            <span class="inline-block">
               {{ post.timestamp }} ago
            </span>

         </div>
            
         <div class="post__title w-full">
            
            <span class="block text-left">
               {{ post.title }}
            </span>

         </div>

      </div>

      <div class="posts-content__post__secondary flex items-center">

         <div class="post__comments flex items-center">

            <font-awesome-icon :icon="['fas', 'comments']" class="w-4 h-4 fill-current text-purple-1" />

            <span class="ml-1">
               {{ post.comments_num }}
            </span>

         </div>

         <div 
            v-for="(btn, i) in btns"
            :key="i"
            :class="(i != 0) ? 'ml-3' : 'ml-6'"
            class="post__btn"
         >

            <vs-button size="small" transparent color="#FFFFFF">

               <font-awesome-icon :icon="['fas', btn.icon]" class="w-4 h-4 fill-current text-white" />

               <span class="ml-1">
                  {{ btn.text }}
               </span>

            </vs-button>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
   import { vxm } from '../../../store'; 

   @Component({
      name: 'CommunityPost',
      components: {},
   })

   export default class CommunityPost extends Vue {

      btns = [
         { icon: 'share-alt', text: 'Share' },
         { icon: 'eye', text: 'View post' },
      ]

      post = {
         author: 'Michael Gore',
         timestamp: '5 hours',
         title: 'PostName is here. It could be longer but will be left like this for now.',

         rate: '35k',
         comments_num: '20k',
      }

   } 

</script>