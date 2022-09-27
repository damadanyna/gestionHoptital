<template> 
    <div class="flex w-full justify-between py-3">
        <div class=" mx-3 bg-white my-shadow h-full items-center w-full rounded-lg flex-col py-3 px-3">
            <div  class=" w-full break-all flex-col  flex">
                <span class=" text-stone-400">Etablissement</span> 
                <span class=" text-indigo-600 font-semibold text-xl">Etablissement Teste</span>
            </div>
            <div  class=" w-full break-all flex-col flex mt-8">
                <span class=" text-stone-400">Adresse</span> 
                <span class=" text-indigo-600 font-semibold text-xl">Antsirabe Andranomadio</span>
            </div>
        </div>

        <div class=" mx-3 bg-white my-shadow h-full w-full rounded-lg flex-col py-3 px-3"> 
            <div class="flex items-center justify-between">     
                <u class=" text-xl font-bold text-stone-600 ">Type de Tarification</u> 
                <div class="flex items-center bg-indigo-600 px-2 rounded-full cursor-pointer transform hover:scale-125">     
                    <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    <span class=" text-white">Ajouter</span>
                </div>
            </div>
            <div class="flex mt-4"> </div>
            <div v-for="i in 12" :key="i" class=" border-b border-stone-200">
                <span>{{i+'- '}} </span>
                <span>liste </span>
            </div>
        </div> 

        <div class=" mx-3 bg-white my-shadow h-full w-full rounded-lg flex-col py-3 px-3"> 
            <div class="flex items-center justify-between">     
                <u class=" text-xl font-bold text-stone-600 ">Type de Departements</u> 
                <div class="flex items-center bg-indigo-600 px-2 rounded-full cursor-pointer transform hover:scale-125">     
                    <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    <span class=" text-white">Ajouter</span>
                </div>
            </div>
            <div class="flex mt-4"> </div>
            <div v-for="i in 12" :key="i" class=" border-b border-stone-200">
                <span>{{i+'- '}} </span>
                <span>liste </span>
            </div>
        </div> 
    </div>
</template>
  
<script>
  export default {
  
  }
</script>
  
<style>
  
</style>