<template>
  <div  v-if="this.$store.state.formulaire==true" class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
    <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
        <div class=" w-full flex text-center">
          <span :class="!formulaire.title.size==''?formulaire.title.size:'text-4xl'" class=" text-gray-500 w-full text-center pb-5" v-text="formulaire.title.text"> </span>
          <div class=" ">
            <div @click="this.$store.state.formulaire=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
        </div>
        <div class="flex-row flex px-12 py-3">
          <div v-for="item,i in formulaire.data" :key="i" class=" flex flex-col"> 
            <div v-for="input, k in item" :key="k">
              <div v-if="!input.length" class=" flex flex-col mb-3  px-7">  
                <span class=" text-stone-500 text-sm" v-text="input.label"></span>
                <input v-if="input.type!=null" v-model="input.model[1]"  :type="input.type" :placeholder=" input.placeholder" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
                <select  v-model="input.model[1]"  v-else name="" id="" class=" bg-white rounded-lg py-1 px-3 focus:border-indigo-600 border border-stone-300 outline-none">
                  <option v-for="list,k in input.option" :key="k" :value="list"  v-text="list"></option> 
                </select> 
              </div>
              <div v-if="input.length==2" class=" flex flex-row w-full justify-between mb-3 px-7 ">   
                <div v-for="inputs ,j in input" :key="j" class=" flex flex-col "> 
                  <div  class=" flex flex-col">
                    <span class=" text-stone-500  text-sm" v-text="inputs.label"></span>
                    <input v-if="inputs.type!=null"  :class="j==0?'':'w-20'" v-model="inputs.model[1]"  :type="inputs.type" :placeholder=" inputs.placeholder" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-32">
                    <select  v-else v-model="inputs.model[1]" name="" id="" class=" bg-white rounded-lg py-1 px-3 focus:border-indigo-600 border border-stone-300 outline-none">
                      <option v-for="list,k in inputs.option" :key="k" :value="list" v-text="list"></option> 
                    </select> 
                  </div> 
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div class=" w-full flex flex-center px-20">
          <button @click="saveData()" class=" bg-stone-400 w-full py-2 rounded-xl text-white font-semibold">Enregistrer</button>
        </div>
      </div>
      <yesOrNoVue :safe="this.$store.state.statut"></yesOrNoVue> 
    </div> 
    <!-- <dialogCom />  -->
</template>

<script>
// import dialogCom from './dialogueView.vue'
import yesOrNoVue from './yesOrNoView.vue'
export default {
    components:{yesOrNoVue,
    // dialogCom
    },
    props:{params:{}},
    data(){
      return{   
        formulaire:this.params,
      } 
    },
    methods:{
      getInputValue(){ 
        var liste=[];
        var array=this.formulaire.data;
        if(array.length>0){ 
          for (let i = 0; i < array.length; i++) {
            const element = array[i]; 
            for (let j = 0; j < element.length; j++) {
              const element2 = element[j];
              if(element2.length>0){
                for (let l = 0; l < element2.length; l++) {
                  const element3 = element2[l]; 
                  liste.push([element3.model[0],element3.model[1]]) 
                } 
              }else{
                liste.push([element2.model[0],element2.model[1]])  
              }
            }
          } 
        } 
        this.$store.state.dataSending=Object.fromEntries(liste);  
      },
      saveData(){ 
        this.getInputValue();
        this.$store.state.messageYesNoDialogue=true;
        this.$store.state.statut.save=true; 
        this.$store.state.statut.title="";
        console.log(this.$store.state.statut)
      }
    },
    mounted(){
      this.$store.state.statut.title=this.params.dialogue.text; 
    }
    
}
</script>

<style>

</style>