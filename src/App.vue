<template>
  <div class="flex flex-row h-full bg-slate-100 start-window-drag ">
         
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
import yesNoDialogueVue from './components/yesOrNo.vue'
import welvomeView from './views/welcomePage.vue'
export default {
    layout: "blog",
    components: {welvomeView ,nav_bar,dialogueVue,yesNoDialogueVue } ,
    data(){
      return{ 
      }
    },
    methods:{
      async recupData(){  
      try {
         await window.axios
        .get('/patients')
        .then(()=>{
          console.log('maty')
           })
        .catch(e=>console.log('erreur le ka: '+e)) 
      } catch (e) {
        console.log(e)
      } 
    },
    },
    mounted(){
      this.recupData();
   
    }
    /* components: { nav_bar,dialogueVue,yesNoDialogueVue } */
};
</script>
<style> 
  #nav,.nav-bg{
    background: #282A42;
  } 
  *{
    transition: 300ms;
  } 
</style>