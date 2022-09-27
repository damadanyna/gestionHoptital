<template>
  <div class="patientsCss flex flex-col w-full h-full pb-2 "> 
    <div class=" flex justify-between items-center px-3 ">
      <!-- en haut du head bar -->
      <div class=" flex uppercase text-sm font-bold text-stone-400 " id="petite_menu">
          <span @click="setPindexOnglet(0)" :class="this.$store.state.indexOnglet==0?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Fiche Entreprise"> Entreprise</span>
          <span @click="setPindexOnglet(1)" :class="this.$store.state.indexOnglet==1?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Fiche Hospitalisation"> Hospitalisation</span>
          <span @click="setPindexOnglet(2)" :class="this.$store.state.indexOnglet==2?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Fiche Individuel"> Individuel</span>
          <span @click="setPindexOnglet(3)" :class="this.$store.state.indexOnglet==3?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title="Liste des patients Hospitalisés"> Hospitalisés</span>
          <span @click="setPindexOnglet(4)" :class="this.$store.state.indexOnglet==4?'border-blue-600 text-blue-600':' border-transparent'" class="cursor-pointer border-b-2  mx-3" title=" Statistique d'hospitalisation">Statistique</span>
        </div>
        <!-- head bar -->
        <div  class=" flex flex-row  "> 
          <div v-if="this.$store.state.indexOnglet!=4" class=" my-shadow mr-5 flex bg-white rounded-full w-96 px-2 items-center justify-center"> 
              <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
              <input placeholder=" Rechercher" class=" px-3 w-full outline-none" type="text" name="" id="">
          </div>
          <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
            <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
          </router-link>
        </div>  
      </div>
      <div class="flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <entrepise v-if=" this.$store.state.indexOnglet==0"></entrepise>
        <hospitalisation v-else-if=" this.$store.state.indexOnglet==1"></hospitalisation>
        <hospitalise v-else-if=" this.$store.state.indexOnglet==2"></hospitalise>
        <individuel v-else-if=" this.$store.state.indexOnglet==3"></individuel>
        <statistique v-else ></statistique>
      </div>
  </div>
</template>

<script>
import entrepise from './pages/patients/entrepriseView.vue'
import hospitalisation from './pages/patients/hospitalisationView.vue'
import hospitalise from './pages/patients/hospitaliseView.vue'
import individuel from './pages/patients/individuelView.vue'
import statistique from './pages/patients/statistiqueView.vue'

export default {
  components:{  entrepise,hospitalisation,hospitalise,individuel,statistique
  },
  data(){
  return {
    
  } 
  },
  methods:{ 
    setPindexOnglet(val){
      this.$store.state.indexOnglet=val
    }
  }
  }
</script>

<style> 
</style>