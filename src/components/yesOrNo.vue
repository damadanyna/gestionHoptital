<template>
    <div class=" z-20 top-0 left-0 absolute w-full blures h-full justify-center flex items-center">   
      <div  class=" bg-white my-shadow flex flex-col px-10 py-4 py-1">
        <div  class=" flex items-center justify-center  py-1">
            <svg class=" w-14" viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
            <span class=" text-2xl text-black " v-text="this.$store.state.messageYesNoDialogue.message"></span>
        </div> 
        <div class=" flex justify-end">
            <span class=" transform cursor-pointer font-semibold text-stone-400 hover:scale-125 mr-8">Oui</span>
            <span @click="this.$store.state.messageYesNoDialogue.shown=false" class=" transform cursor-pointer font-semibold hover:scale-125 text-indigo-600">Non</span>
        </div>
        </div>  
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style > 
  
  </style>