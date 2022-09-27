<template>
  <div class="patientsCss flex flex-col w-full h-full py-3"> 
    <div class=" flex justify-between items-center px-3 ">
      <!-- en haut du head bar -->
      <div class=" flex uppercase text-sm font-bold text-stone-400 " id="petite_menu"> </div>
        <!-- head bar -->
        <div class=" flex flex-row  "> 
          <div class=" my-shadow mr-5 flex bg-white rounded-full w-96 px-2 items-center justify-center"> 
              <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
              <input placeholder=" Rechercher" class=" px-3 w-full outline-none" type="text" name="" id="">
          </div>
          <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
            <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
          </router-link>
        </div>  
      </div>
      <div class="flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">    
        <individuel ></individuel> 
      </div>
  </div>
</template>

<script> 
import individuel from './pages/utilisateur/utilisatuerView.vue' 

export default {
  components:{individuel
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