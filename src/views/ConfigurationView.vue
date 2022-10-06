<template>
  <div class="patients flex flex-col w-full h-full pb-2 "> 
        <div class=" top-0 absolute flex flex-row w-full start-window-drag " >  
           <div class="flex flex-col  w-full z-0 h-7"> 
           </div>       
            <div class="flex fixed -right-2  px-3 flex-row w-36 justify-center z-50 h-7 stop-window-drag" >  
              <svg  class=" w-7 transform hover:scale-150 cursor-pointer mr-5 -mt-2" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path :class="this.$store.state.darkMode==true?' text-stone-600':' text-white'" class=" fill-current  " d="M10 25.5v-3h28v3Z"/></svg>
              <svg class=" w-4 transform hover:scale-150 cursor-pointer mr-5" viewBox="0 0 24 24"><path :class="this.$store.state.darkMode==true?' text-stone-600':' text-white'" class=" fill-current  " d="M19 19V5H5v14h14m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-8  " /></svg>
              <svg class=" w-5 transform hover:scale-150 cursor-pointer group "  viewBox="0 0 24 24"><path :class="this.$store.state.darkMode==true?' text-stone-600':' text-white'" class=" group-hover:text-red-600 fill-current  " d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div> 
        </div>
    <div class=" flex justify-between w-full items-center px-3 mt-5 ">
      <!-- en haut du head bar -->
      <div class=" flex uppercase text-sm font-bold text-stone-400 " id="petite_menu">
          <span @click="setPindexOnglet(0)" :class="this.$store.state.indexOngletOfConfig==0?'border-indigo-500 text-indigo-500':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Edition des contenus"> Contenu</span>
          <span @click="setPindexOnglet(1)" :class="this.$store.state.indexOngletOfConfig==1?'border-indigo-500 text-indigo-500':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Fiche utilisateur"> Utilisateur</span> 
        </div>
        <div class="flex" @click="this.$store.state.darkMode=setTheme(this.$store.state.darkMode)">
          <div class=" mr-5">
            <span class=" mr-2" :class=" this.$store.state.darkMode?'text-stone-600':'text-stone-300'">Thème:</span>
            <span :class=" this.$store.state.darkMode?'text-stone-600':'text-stone-300'" v-text="this.$store.state.darkMode?'Claire':'Sombre'"></span>
          </div>
          <!-- head bar -->
          <div  class=" flex flex-row  ">  
            <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
              <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
            </router-link>
          </div>  
        </div>
      </div>
      <div class="flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <contenue v-if=" this.$store.state.indexOngletOfConfig==0"></contenue>
        <utilisateur v-else-if=" this.$store.state.indexOngletOfConfig==1"></utilisateur> 
      </div>
  </div>
</template>

<script>
import contenue from './pages/configuration/contenueView.vue'
import utilisateur from './pages/configuration/utilisateurView.vue' 

export default {
  components:{  contenue,utilisateur},
  data(){
  return {
    
  } 
  },
  methods:{ 
    setPindexOnglet(val){
      this.$store.state.indexOngletOfConfig=val
    },
    setTheme(val){
      return !val;
    }
  }
  }
</script>

<style> 
</style>