<template>
    <div v-if="this.$store.state.messageYesNoDialogue " class=" z-20 top-0 left-0 absolute w-full blures h-full justify-center flex items-center">   
      <div  class=" bg-white my-shadow flex flex-col px-10 py-4  "> 
        <div v-if="safe.save"  class=" flex items-center justify-center  py-1">
          <svg viewBox="0 0 24 24"><path  class=" fill-current text-green-600" d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" /></svg>
          <span class=" text-2xl text-black " v-text="'Enregistrez '+safe.title+' ?'" ></span>
        </div> 
        <div v-else class=" flex items-center justify-center  py-1">
            <svg  viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
            <span class=" text-2xl text-black " v-text="'Supprimez '+safe.title+' ?'" ></span>
        </div> 
        <div class=" flex justify-end">
            <span :class="safe.save?' transform cursor-pointer font-semibold text-green-600 mr-8':'transform cursor-pointer font-semibold text-stone-400 mr-8'">Oui</span>
            <span @click="this.$store.state.messageYesNoDialogue=false" :class="!safe.save?' transform cursor-pointer font-semibold text-red-600 ':'transform cursor-pointer font-semibold text-stone-400  '">Non</span>
        </div>
        </div>  
    </div>
  </template>
  
  <script>
  export default {
    props:{safe:{}},
  
  }
  </script>
  
  <style scoped> 
  svg{
    width: 56px;
  }
  </style>