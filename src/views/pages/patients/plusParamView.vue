<template>
  <div v-if=" this.$store.state.plusOption" class="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-custom">
      <div class="flex flex-row rounded-lg my-shadow2">
          <div class=" flex flex-col w-52 px-1 pb-6 bg-params rounded-l-lg" >
              <span class=" text-3xl text-white pb-10"> Plus d'option</span>
              <div class=" mt-2  py-1 flex flex-row cursor-pointer items-center rounded-r-lg px-2 border-l-4 border-indigo-600 " title="Option du table"  style="background:#2f2f2f;">
                <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-300" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6z" /></svg>
                <span class=" ml-1 text-stone-300 ">Sauvegarde</span> 
              </div> 
              <div class=" mt-4  py-1 flex flex-row cursor-pointer items-center px-2" title="Imprimer le tableau">
                <svg  class=" w-5"  viewBox="0 0 24 24"><path class=" fill-current text-stone-300"  d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3z" /></svg>
                <span class=" ml-1 text-stone-300 ">Imprimer</span> 
              </div> 
              <div class=" mt-4  py-1 flex flex-row cursor-pointer items-center px-2" title="exporter le tableau"> 
                <svg class=" w-5"  viewBox="0 0 24 24"><path class=" fill-current text-stone-300" d="m23 12-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" /></svg>
                <span class=" ml-1 text-stone-300 ">Exporter</span> 
              </div> 
          </div>
          <div class=" flex flex-col w-96 px-2 rounded-r-lg " style="background:#2f2f2f;height:70vh">
            <div class=" w-full justify-end flex items-center">
              <span class=" font-bold text-indigo-400 mr-4"> Liste des sauvegardes</span>
              <div @click=" this.$store.state.plusOption=false" class="  cursor-pointer transform hover:scale-125 group">
                  <svg class=" w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500 text-stone-300" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
              </div>
            </div>
            <div class=" w-full  h-full flex justify-between flex-col ">
                <div class=" text-white flex items-center justify-center w-full h-full">
                    <div>Liste vide</div>
                </div>
                <div class=" justify-center flex">
                    <button class=" bg-indigo-600 rounded-t-xl px-3 text-white">
                        Créez un sauvegarde
                    </button>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
</style> 