<template>
  <div class="patientsCss flex flex-col w-full h-full pb-2"> 
        <div class="  absolute top-0 flex text-sm text-indigo-100 font-bold  py-1 rounded-br-2xl px-4 " id="nav" >
          <span v-for="item,i in list_nav" :key="i" @click="setPindexOngletOfStock(i)" :class="this.$store.state.indexOngletOfStock[0] ==i?' bg-indigo-500 ':' border-transparent'" class=" px-3 cursor-pointer rounded-t-2xl " :title="item[1]" v-text="item[0]">  </span>
        </div>
    <div class=" flex justify-between w-full items-center px-3 ">
        <!-- en haut du head bar -->
        <div class=" flex flex-col w-full pr-3">  
          <div class="  flex mt-8 text-sm font-semibold text-stone-500 " id="petite_menu">
            <span v-for="item,i in list_nav[this.$store.state.indexOngletOfStock[0]][2]" :key="i" @click="setindexOngletOfStockMenu(i)" :class="this.$store.state.indexOngletOfStock[1] ==i?' border-indigo-500 text-indigo-500  ':' border-transparent'" class="  border-b-2 px-3 cursor-pointer mx-1" :title="item[1]" v-text="item[0]">  </span>
          </div>
        </div>
        <!-- head bar -->
        <div  class=" flex flex-row  "> 
          <div v-if="this.$store.state.indexOngletOfStock[1]!=4" class=" my-shadow mr-5 flex bg-white rounded-full w-96 px-2 items-center justify-center"> 
              <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
              <input placeholder=" Rechercher" class=" px-3 w-full outline-none" type="text" name="" id="">
          </div>
          <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
            <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
          </router-link>
        </div>  
      </div>
      <div v-if="this.$store.state.indexOngletOfStock[0]==0" class="flex  h-full overflow-y-auto mt-6 overflow-x-hidden  px-7 mb-4">   
        <articles v-if=" this.$store.state.indexOngletOfStock[1]==0"></articles>
        <departement v-else-if=" this.$store.state.indexOngletOfStock[1]==1"></departement>
        <famille v-else-if=" this.$store.state.indexOngletOfStock[1]==2"></famille>
        <fournisseur v-else-if=" this.$store.state.indexOngletOfStock[1]==3"></fournisseur>
        <statistique v-else ></statistique>
      </div>
  </div>
</template>

<script>
import articles from './pages/stocks/articleView.vue'
import departement from './pages/stocks/departementView.vue'
import famille from './pages/stocks/familleView.vue'
import fournisseur from './pages/stocks/fournisseurView.vue' 

export default {
  components:{ articles,departement,famille,fournisseur },
  data(){
  return {
    list_nav:[
      ['Genérale','Genérale ',  
        [
          ['Article','Liste des articles '],
          ['Departement','Fiche département'],
          ['Famille','Liste Famille (Catégorie)'],
          ['Fournisseur','Liste des fournisseurs']
        ]
      ],
      ['Mouvement des Stocks','Mouvement des stocks', 
        [
          ['Saisie',' Saisie des entrées / sorties'],
          ['Montage Transformation','Montage et transformation'],
          ['Tableau des Mouvements','Tableau des Mouvements'],
          ['Mouvement Journaliers','Mouvement Journaliers']
        ]
      ],
      ['Utilitaire','Utilitaire'], 
    ],  
  } 
  },
  methods:{ 
    setPindexOngletOfStock(val){
      this.$store.state.indexOngletOfStock[0] =val 

    },
    setindexOngletOfStockMenu(val){
      this.$store.state.indexOngletOfStock[1] =val 
    }
  }
  }
</script>

<style> 
</style>