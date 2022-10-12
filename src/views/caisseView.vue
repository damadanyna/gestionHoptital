<template>
  <div class="patients flex flex-col w-full h-full pb-2 "> 
        <div class=" top-0 absolute flex flex-row w-full start-window-drag " > 
              <div  :class="this.$store.state.darkMode==true?' nav ':' manuBartopDark'" class="absolute flex text-sm z-30 text-indigo-100 py-1 rounded-br-2xl px-4 stop-window-drag ">      
                <span v-for="item,i in list_nav" :key="i" @click="setPindexOngletOfPatient(i)" :class="this.$store.state.indexOngletOfPatient[0] ==i?' bg-indigo-500 ':' border-transparent'" class=" px-3 cursor-pointer rounded-2xl " :title="item[1]" v-text="item[0]">  </span>
              </div>   
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
        <div class=" flex flex-col w-full pr-3">  
          <div class="  flex mt-3 text-sm font-semibold text-stone-500 " id="petite_menu">
            <span v-for="item,i in list_nav[this.$store.state.indexOngletOfPatient[0]][2]" :key="i" @click="setindexOngletOfPatientMenu(i)" :class="this.$store.state.indexOngletOfPatient[1] ==i?' border-indigo-500 text-indigo-500  ':' border-transparent'" class="  border-b-2 px-3 cursor-pointer mx-1" :title="item[1]" v-text="item[0]">  </span>
          </div>
        </div>
        <!-- head bar -->
        <div  class=" flex flex-row  "> 
          <div  :class="this.$store.state.darkMode==true?' bg-white my-shadow ':' bg-params_ border_'"  v-if="this.$store.state.indexOngletOfPatient[1]!=4" class="mr-5 flex  rounded-full w-96 px-2 items-center justify-center"> 
              <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
              <input :class="this.$store.state.darkMode==true?' bg-white  text-slate-600':' bg-params_ text-white'" placeholder=" Rechercher" class=" px-3 w-full outline-none " type="text" name="" id="">
          </div>
          <router-link  :class="this.$store.state.darkMode==true?' bg-white my-shadow  ':' bg-params_ border_'" to="/utilisateur" class="flex  rounded-full p-2 ">
            <svg class=" w-7" viewBox="0 0 24 24"><path :class="this.$store.state.darkMode==true?' text-stone-600 ':' text-stone-100 '"  class=" fill-current" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
          </router-link>
        </div>  
      </div>
      <!-- <div v-if="this.$store.state.indexOngletOfPatient[0]==0" class=" flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <hospitalisationViewVue v-if=" this.$store.state.indexOngletOfPatient[1]==2"></hospitalisationViewVue>
        <entrepriseViewVue v-else-if=" this.$store.state.indexOngletOfPatient[1]==0"></entrepriseViewVue> 
      </div> -->
      <div >
        <facture>  </facture>
      </div>
      <div v-if="this.$store.state.indexOngletOfPatient[0]==0" class=" flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <hospitaliseViewVue></hospitaliseViewVue> 
      </div>
      <div v-if="this.$store.state.indexOngletOfPatient[0]==1" class=" flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <statistiqueViewVue></statistiqueViewVue> 
      </div>
  </div>
</template>

<script>
  import facture from './pages/caisse/factureView.vue'
  import hospitaliseViewVue from './pages/patients/hospitaliseView.vue'  

export default {
  components:{ 
    facture,  
    hospitaliseViewVue},
  data(){
  return {  
    list_nav:[ 
      ['Facture',"Préparation d'encaissement"],
      ['Statistique hospitalisation','Fiche hospitalisation'],
      ['Plus',"Plus d'option"],
    ],  
  } 
  },
  methods:{ 
    setPindexOngletOfPatient(val){
      if(val!=0 && val!=2){ 
        this.$store.state.indexOngletOfPatient[0] =val
      }else{
        this.$store.state.indexPageCaisse=true
      }
    },
    setindexOngletOfPatientMenu(val){
        this.$store.state.indexOngletOfPatient[1] =val 
    },

  },
  mounted(){
  }
  }
</script>

<style scoped> 

#nav,.nav-bg,.nav{
    background: #282A42;
  } 
</style>  