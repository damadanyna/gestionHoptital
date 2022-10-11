<template>
  <div :class="this.$store.state.darkMode==true?' bg-stone-100':' bg-params'" class=" flex flex-row h-full  start-window-drag ">
         
    <welvomeView v-if="!this.$store.state.data.user.logged " class=" w-full"></welvomeView>
    <div v-else class="stop-window-drag w-full flex flex-row h-full">
      <dialogueVue v-if="this.$store.state.messageDialogue.shown"></dialogueVue>
      <yesNoDialogueVue v-if="this.$store.state.messageYesNoDialogue.shown"></yesNoDialogueVue>
      <nav_bar id="corps"></nav_bar>
      <router-view  class=" h-full w-full pt-4 overflow-x-hidden " />
    </div>
  </div>
</template>
<script>

import nav_bar from './components/nav_bar.vue';
import dialogueVue from './components/dialogueView.vue'
import yesNoDialogueVue from './components/yesOrNoView.vue'
import welvomeView from './views/welcomePage.vue'
export default {
    layout: "blog",
    components: {welvomeView ,nav_bar,dialogueVue,yesNoDialogueVue } ,
    data(){
      return{ 
      }
    },
    methods:{
    },
    mounted(){ 
   
    }
    /* components: { nav_bar,dialogueVue,yesNoDialogueVue } */
};
</script>
<style> 
  #nav,.nav-bg,.nav{
    background: #282A42;
  } 
  *{
    transition: 300ms;
  } 
  .bg-params{
    background:#242327
    } 
  .bg-params_{
    background:#2b2a2e;
    } 
  .border_{
    border:#1d1d1d solid 1px;
    } 
  .manuBartopDark{
    background:#161616;
    } 
</style>