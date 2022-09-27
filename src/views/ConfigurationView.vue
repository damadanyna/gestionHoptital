<template>
  <div class="patientsCss flex flex-col w-full h-full pb-2 "> 
    <div class=" flex justify-between items-center px-3 ">
      <!-- en haut du head bar -->
      <div class=" flex uppercase text-sm font-bold text-stone-400 " id="petite_menu">
          <span @click="setPindexOnglet(0)" :class="this.$store.state.indexOngletOfConfig==0?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Edition des contenus"> Contenu</span>
          <span @click="setPindexOnglet(1)" :class="this.$store.state.indexOngletOfConfig==1?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Fiche utilisateur"> Utilisateur</span> 
        </div>
        <!-- head bar -->
        <div  class=" flex flex-row  ">  
          <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
            <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
          </router-link>
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
    }
  }
  }
</script>

<style> 
</style>