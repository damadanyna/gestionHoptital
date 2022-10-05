<template>
  <div class=" z-20 top-0 left-0 absolute w-full blures h-full justify-center flex items-center">   
    <div v-if="this.$store.state.messageDialogue.success" class=" rotate bg-green-400 flex items-center justify-center px-4 py-1">
      <svg class=" w-16" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
      <span class=" text-2xl text-white " v-text="this.$store.state.messageDialogue.message"></span>
    </div>  
    <div v-else class=" rotate bg-green-400 flex items-center justify-center px-4 py-1">
      <svg class=" w-16" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
      <span class=" text-2xl text-white " v-text="this.$store.state.messageDialogue.message"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
  .rotate{
      opacity: 0;
      animation: rotation 1s forwards;
  }

  @keyframes rotation {
    0%{   
      opacity: 0;
    } 
    20%{  
      opacity: 0; 
    }  
    40%{   
      transform: scale(2);
    }  
    50%{ 
      transform: initial;
    }   
    100%{ 
      opacity: 1;
    } 
  }

</style>