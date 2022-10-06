<template> 
  <div class="patientsCss flex flex-col w-full   ">   
    
    <!-- tableau -->
      <div :class="this.$store.state.darkMode==true?' bg-white  my-shadow ':' bg-stone-700'" class=" mt-4 rounded-lg   " >
        <div class=" px-4">
          <div class=" text-stone-700 text-2xl pb-7 font-bold flex justify-end">
            <div class=" bg-indigo-500 px-4 rounded-b-2xl"> 
              <span class="text-white" @click="optionPatients=true" v-text="urlPatients">  </span > 
            </div>
          </div>
        </div>
      <table class=" w-full  rounded-lg "> 
        <tr  :class="this.$store.state.darkMode==true?' bg-stone-100 ':' bg-stone-600 text-stone-100 '"  class="  border-stone-200">
          <th class=" px-5 py-3 text-start cursor-pointer " @click="shortOrder(item)"  v-for="item,i in table_col" :key="i" 
          :class="i==0?' w-20':i==2?' w-20':i==3?' w-32':i==4?' w-28':i==5?' w-20':i==6?' w-32':i==7?' w-32':i==8?' w-32':''"  v-text="i==8?'':item"></th>
        </tr>
        <tbody> 
          <tr v-for="j in 13" :key="j" :class="this.$store.state.darkMode==true?' border-stone-200  hover:border-stone-300':' bg-stone-700 text-stone-400 border-stone-600 hover:bg-indigo-700'" class=" group border-b ">
            <td  :class="this.$store.state.darkMode==true?' bg-white text-stone-600':' bg-stone-700 text-stone-200'" class=" px-5  py-1 "  v-for="i in 8" :key="i">val{{ j}}</td>
            <td   :class="this.$store.state.darkMode==true?' bg-white':' bg-stone-700 text-stone-200'" class=" px-5  py-1  "   >
              <div class=" group-hover:flex  flex-row hidden">
                <div @click="this.$store.state.messageYesNoDialogue.shown=true" class=" transform hover:scale-125 pr-1 mr-4 cursor-pointer"  :title="'Supprimer de' +j"> 
                  <svg class="w-5" viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </div>
                <div  class=" transform hover:scale-125 pr-1 ml-4 cursor-pointer"  :title="'Editer' +j">
                  <svg class=" w-5" viewBox="0 0 24 24"><path :class="this.$store.state.darkMode==true?' text-indigo-700 ':'  text-indigo-400'" class="fill-current" d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2m10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z" /></svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table> 
      <div class=" px-4 py-9 justify-between flex border-t border-stone-300 pt-3"> 
        <div class=" flex flex-col ">
          <div class=" flex flex-row">
            <div v-for="i in 4" :key="i" @click="indexPage=i" :class="i==indexPage?' border-indigo-700 bg-indigo-700 ':' border-stone-800'" class=" transform hover:scale-125  font-bold rounded-lg cursor-pointer border px-3 mx-1">
              <span :class="i==indexPage?' text-white':'text-stone-600'" class=" " v-text="i"></span>
            </div>
            <span>...</span>
            <div   @click="indexPage=i"  class="border-stone-400 font-bold rounded-lg border px-3 mx-1  transform hover:scale-125 cursor-pointer"> 
                <svg   v-on:click="wrapMenu = true" viewBox="0 0 24 24" class="w-6" >
                  <path  class="fill-current text-stone-600"  d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
                </svg> 
            </div>
          </div>
        </div> 
        <div :class="this.$store.state.darkMode==true?'bg-stone-400 ':' bg-indigo-700 my-shadow'" class=" absolute bottom-6 right-5 flex flex-row px-4 py-3 rounded-full">

          <div  @click="this.$store.state.formulaire=true" class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full border border-white">
                <svg class=" w-7" viewBox="0 0 24 24"><path  class=" fill-current text-white hover:text-blue-400"  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
              </div>
            </div>
            <span class=" font-medium text-xs text-white hover:text-stone-900">Ajouter</span>
          </div>
           
        </div>
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
    },
  data(){
    return {
      //Models anle patients
      patients:{},
      formulaire:{
        dialogue:{text:'patients' }, 
        title:{text:'Fiche individuelle',size:''},  
        data:[
          [
            {
              label:'Numéro',
              placeholder:'Ex: 1234...',
              model:'',
              type:'number' 
            },
            {
              label:'Nom et Prénom',
              placeholder:'Ex: Rakoto...',
              model:'',
              type:'text' 
            },
            {
              label:'Date de Naissance',
              placeholder:'Ex: 1234...',
              model:'',
              type:'date' 
            }, 
            {
              label:'Proféssion',
              placeholder:'Ex: Mpampianatra...',
              model:'',
              type:'text' 
            },
            {
              label:'Caisier',
              placeholder:'Ex: Rakoto...',
              model:'',
              type:'text' 
            },

          ],
          [
            [ 
                {
                  label:'Sexe',
                  placeholder:'Masculin/Fémin',
                  model:'',
                  type:'text' 
                },
                {
                  label:'Age',
                  placeholder:'Ex: 24',
                  model:'',
                  type:'number' 
                },
            ],
            {
              label:'Adresse',
              placeholder:'Ex: Ampisikinana...',
              model:'',
              type:'text' 
            },
            {
              label:'Dernière Viste',
              placeholder:'Ex: 1234...',
              model:'',
              type:'date' 
            },
            {
              label:'Date de Retour',
              placeholder:'Ex: 1234...',
              model:'',
              type:'date' 
            },
            {
              label:'Note',
              placeholder:'Ex: ...',
              model:'',
              type:'text' 
            }, 
          ]
        ]
      }
      ,
      indexPage:1, 
      urlPatients:'Liste des Utilisateur',
      table_col:['N°','Nom et prenom','Casier','Date Naiss','Age','Sexe','Dern Visite','Retour',''], 
      
    }
  },
  methods:{
    shortOrder(val){
      alert(val)
    },showDialog(){
      this.$store.state.showDialog=true
      setTimeout(() => {
        this.$store.state.showDialog=false
      }, 2500);
    }, 
  },
  mounted(){
  }
  }
  /*
  elidiot trosan levaly
  ljo za maka anao
  Gig mj ft mad max
  kapepeky tia mofo
  rojovola mpamarky
  rojovola zakaty
  soamangna managera
  soamangna mapijaly tsy fanagna vola
  khaleba sitrany tsy manambaly
  mamada RN9
  tambatambaziko
  samota soman ny menabe
  moros zazan'i menabe kilalaky
  betofy mikarama
  nahita ny tiako
  rebona tananao tsapiky
  betofy agny anao zay cherie
  rebona motombe
  tsito tapiky
  mamehe

  */
  </script>
  
  <style>
  
  </style>