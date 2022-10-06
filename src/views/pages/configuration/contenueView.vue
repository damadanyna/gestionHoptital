<template> 
    <div class="flex w-full justify-between py-3">
        <div  :class="this.$store.state.darkMode==true?' border-stone-200  my-shadow  ':' bg-stone-700 text-stone-400 border-stone-600 '" class=" mx-3 bg-white  h-full items-center w-full rounded-lg flex-col py-3 px-3">
            <div  class=" w-full break-all flex-col  flex  border-gray-400 pb-2 border-b">
                <span :class="this.$store.state.darkMode==true?'text-stone-400':' text-white'" >Etablissement</span> 
                
                <div  v-if="isEditable" class=" flex flex-col "> 
                    <input v-model="nomEtablissement"  type="text" placeholder="Etablissement" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 ">
                </div>
                <span v-else :class="this.$store.state.darkMode==true?'text-indigo-600':' text-indigo-400'"  class="  font-semibold text-xl" v-text="nomEtablissement"></span>
                
                <div class=" flex text-sm ">
                    <div @click="isEditable=true"  v-if="!isEditable" class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                        <svg class=" w-6" viewBox="0 0 24 24"><path d="M20.71 7.04c-.34.34-.67.67-.68 1-.03.32.31.65.63.96.48.5.95.95.93 1.44-.02.49-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24-.96-.96-1.42 1.41-3.75-3.75 3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57 3.75 3.75L6.75 21H3v-3.75z" /></svg>
                        <span class=" text-stone-100">Editer</span>
                    </div>
                    <div v-else class=" flex ">
                        <div @click="isEditable=false" class=" flex mr-9 items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                            <svg class=" w-6" viewBox="0 0 24 24"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                            <span class=" text-stone-100">Enregistrer</span>
                        </div>
                        <div @click="isEditable=false"   class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-gray-600">
                            <svg class=" w-6" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                             <span class=" text-stone-100">Annuler</span>
                        </div>
                    </div>
                </div>
           </div>
            <div  class=" w-full break-all flex-col flex mt-8 border-gray-400 pb-2 border-b">
                <span :class="this.$store.state.darkMode==true?'text-stone-400':' text-white'" >Adresse</span> 
                
                <div  v-if="isEditable1" class=" flex flex-col "> 
                    <input v-model="adresse"  type="text" placeholder="Etablissement" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 ">
                </div>
                <span v-else :class="this.$store.state.darkMode==true?'text-indigo-600':' text-indigo-400'"  class="  font-semibold text-xl" v-text="adresse"></span>
                
                 
                <div class=" flex  text-sm ">
                    <div @click="isEditable1=true"  v-if="!isEditable1" class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                        <svg class=" w-6" viewBox="0 0 24 24"><path d="M20.71 7.04c-.34.34-.67.67-.68 1-.03.32.31.65.63.96.48.5.95.95.93 1.44-.02.49-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24-.96-.96-1.42 1.41-3.75-3.75 3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57 3.75 3.75L6.75 21H3v-3.75z" /></svg>
                        <span class=" text-stone-100">Editer</span>
                    </div>
                    <div v-else class=" flex ">
                        <div @click="isEditable1=false" class=" flex mr-9 items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                            <svg class=" w-6" viewBox="0 0 24 24"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                            <span class=" text-stone-100">Enregistrer</span>
                        </div>
                        <div @click="isEditable1=false"   class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-gray-600">
                            <svg class=" w-6" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                             <span class=" text-stone-100">Annuler</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div  :class="this.$store.state.darkMode==true?' border-stone-200  my-shadow  ':' bg-stone-700 text-stone-400 border-stone-600 '" class=" mx-3 bg-white h-full w-full rounded-lg flex-col py-3 px-3"> 
            <div class="flex items-center justify-between">     
                <u  :class="this.$store.state.darkMode==true?'text-stone-600':' text-white'"  class=" text-xl font-bold  ">Type de Tarification</u> 
                <div @click="addNew('Nouvelle Tarification','la tarification')" class="flex items-center bg-indigo-600 px-2 rounded-full cursor-pointer transform hover:scale-125">     
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

        <div  :class="this.$store.state.darkMode==true?' border-stone-200  my-shadow  ':' bg-stone-700 text-stone-400 border-stone-600 '" class=" mx-3 bg-white   h-full w-full rounded-lg flex-col py-3 px-3"> 
            <div class="flex items-center justify-between">     
                <u  :class="this.$store.state.darkMode==true?'text-stone-600':' text-white'"  class=" text-xl font-bold   ">Type de Departements</u> 
                <div   @click="addNew('Nouvelle Departements','le departement')" class="flex items-center bg-indigo-600 px-2 rounded-full cursor-pointer transform hover:scale-125">     
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
    <!-- formulaire Popup -->  
    <inputVue  :params="formulaire" /> 
    </div>
</template>
  
<script>
import inputVue from '@/components/inputView.vue'
  export default { 
    components:{ 
      inputVue
    },data(){
        return{ 
            isEditable:false,
            isEditable1:false,
            nomEtablissement:'Etablisement teste',
            adresse:'Antsirabe Andranomadio',
            formulaire:{
                dialogue:{text:'',clee:'' }, 
                title:{text:'',size:''}, 
                data:[
                [
                    {
                    label:'Id Departement',
                    placeholder:'Ex: 1234...',
                    model:'',
                    type:'number' 
                    },
                    {
                    label:'Label',
                    placeholder:'Ex: Departement...',
                    model:'',
                    type:'text' 
                    }, 
                ], 
                ]
            }
        }
    },methods:{
        addNew(val,val2){
            this.formulaire.dialogue.text=val2; 
            this.$store.state.formulaire=true;
            this.formulaire.title.text=val; 
            this.formulaire.title.size='text-2xl';
        }
    }
  }
</script>
  
<style>
  
</style>