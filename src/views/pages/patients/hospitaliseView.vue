<template> 
  <div class="patientsCss flex flex-col w-full   ">   
    
    <!-- tableau -->
    <div v-if="this.store.data.response.status" :class="this.store.darkMode==true?' bg-white  my-shadow ':' bg-params_ border_'" class=" mt-4 rounded-lg h-full justify-between flex flex-col" >
      <div><div class=" px-4">
          <div class=" text-stone-700 text-2xl pb-7 font-bold flex justify-end">
            <div   :class="this.$store.state.darkMode==true?' bg-indigo-500 ':' bg-indigo-600 border_'"  class="  px-4 rounded-b-2xl">
              <span class=" text-stone-300 ">Gestion des Patients </span> 
              <span class="text-white"> ></span > 
              <span class="text-white" @click="optionPatients=true" v-text="urlPatients">  </span > 
            </div>
          </div>
        </div>
      <table class=" w-full  rounded-lg "> 
        <tr  :class="this.store.darkMode==true?' bg-stone-100  ':' bg-stone-600 text-stone-100 '"  class="  border-stone-200"> 
          <th class=" px-5 py-3  text-start cursor-pointer " @click="shortOrder(item[1])"  v-for="item,i in table_col" :key="i" 
          :class="i==0?' w-16':i==2?' w-32':i==3?'w-4':i==4?'w-5':i==5?' w-32':i==6?' w-32':i==7?' w-32':i==8?' w-20':i==9?' ':i==table_col.length-1?'w-28':''"  v-text="i==table_col.length-1?'  ':item[0]"></th>
        </tr>
        <tbody> 
          <tr    v-for="item,j in this.store.data.response.data.patients" :key="j" :class="this.store.darkMode==true?' border-stone-200  hover:border-stone-300':' bg-params_ text-stone-400 border-stone-600 hover:bg-indigo-700'" class=" group border-b">
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_num"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_name_and_lastname"></td> 
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_date_naiss"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_age"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_sexe"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_dern_visite"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_date_retour"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_adresse"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_profession"></td>
            <td  :class="this.store.darkMode==true?' bg-white text-stone-600':' bg-params_ text-stone-200'" class=" px-5  py-1 " v-text="item.patient_note"></td>
            <td   :class="this.store.darkMode==true?' bg-white':' bg-params_ text-stone-200'" class="   py-1  "   >
              <div class=" group-hover:flex  flex-row hidden">
                <div @click="deleteIt(item)" class=" transform hover:scale-125 pr-1 mr-4 cursor-pointer"  :title="'Supprimer de' +j"> 
                  <svg class="w-5" viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </div>
                <div @click=" getUser(item)" class=" transform hover:scale-125 pr-1 ml-4 cursor-pointer"  :title="'Editer' +j">
                  <svg class=" w-5" viewBox="0 0 24 24"><path :class="this.store.darkMode==true?' text-indigo-700 ':'  text-indigo-400'" class="fill-current" d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2m10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z" /></svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table></div> 
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
        <div @click="addNew()" :class="this.store.darkMode==true?'bg-stone-400 ':' bg-indigo-700 my-shadow'" class=" absolute bottom-6 right-5 flex flex-row px-4 py-4 rounded-full">

          <div  class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full ">
                <svg class=" w-7" viewBox="0 0 24 24"><path  class=" fill-current text-white hover:text-blue-400"  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
              </div>
            </div> 
          </div>
           
        </div>
      </div>
    </div> 
    <div v-else class="flex w-full justify-center items-center h-full">
      <div class="flex flex-col items-center">   
        <svg class=" w-14" viewBox="0 0 24 24"><path d="M21.4 7.5c.8.8.8 2.1 0 2.8l-2.8 2.8-7.8-7.8 2.8-2.8c.8-.8 2.1-.8 2.8 0l1.8 1.8 3-3 1.4 1.4-3 3 1.8 1.8m-5.8 5.8-1.4-1.4-2.8 2.8-2.1-2.1 2.8-2.8-1.4-1.4-2.8 2.8-1.5-1.4-2.8 2.8c-.8.8-.8 2.1 0 2.8l1.8 1.8-4 4 1.4 1.4 4-4 1.8 1.8c.8.8 2.1.8 2.8 0l2.8-2.8-1.4-1.4 2.8-2.9z" /></svg>
        <span class=" text-indigo-400 text-2xl ">Erreur de connexion</span>
        <span class=" text-stone-200 text-sm ">Verifier la connexion au serveur</span>
        <span class=" text-stone-200 text-sm " v-text="this.store.data.response"> </span>
      </div>
    </div>
    <!-- formulaire Popup -->  
    <inputVue :params="formulaire" /> 
    <dialogYesNo :safe="this.store.statut"  /> 
  </div> 
</template>
 <script> 
 import dialogYesNo from '@/components/yesOrNoView.vue'
 import inputVue from '@/components/inputView.vue'
  export default { 
    components:{ 
      inputVue,dialogYesNo, 
    },
  data(){
    return {
      //Models anle patients
      shotValue:'patient_num',
      patients:{}, 
      timer:null,
      store:this.$store.state,
      formulaire:{
        dialogue:{text:'patients' }, 
        title:{text:'Fiche individuelle',size:''},  
        data:[
          [
            {
              label:'Numéro',
              placeholder:'Ex: 1234...',
              model:['patient_num',''],
              type:'text' 
            },
            {
              label:'Nom et Prénom',
              placeholder:'Ex: Rakoto...',
              model:['patient_name_and_lastname',''],
              type:'text' 
            },
            {
              label:'Date de Naissance',
              placeholder:'Ex: 1234...',
              model:['patient_date_naiss',''],
              type:'date' 
            }, 
            {
              label:'Proféssion',
              placeholder:'Ex: Mpampianatra...',
              model:['patient_profession',''],
              type:'text' 
            },
            {
              label:'Prise en charge',
              placeholder:'Ex: Rakoto...',
              model:['prise_en_charge',''],
              type:null ,
              option:['Non','Oui']
            },

          ],
          [
            [ 
                {
                  label:'Sexe',
                  placeholder:'Masculin/Fémin',
                  model:['patient_sexe',''],
                  type:null ,
                  option:['','M','F']
                },
                {
                  label:'Age',
                  placeholder:'Ex: 24',
                  model:['patient_age',''],
                  type:'number' 
                },
            ],
            {
              label:'Adresse',
              placeholder:'Ex: Ampisikinana...',
              model:['patient_adresse',''],
              type:'text' 
            },
            {
              label:'Dernière Viste',
              placeholder:'Ex: 1234...',
              model:['patient_dern_visite',''],
              type:'date' 
            },
            {
              label:'Date de Retour',
              placeholder:'Ex: 1234...',
              model:['patient_date_retour',''],
              type:'date' 
            },
            {
              label:'Note',
              placeholder:'Ex: ...',
              model:['patient_note',''],
              type:'text' 
            }, 
          ]
        ],
      }
      ,
      indexPage:1, 
      urlPatients:'Liste des Patients', 
      table_col:[
        ['N°','patient_num' ],
        ['Nom et prenom','patient_name_and_lastname' ] ,
        ['Date Naiss','patient_date_naiss' ],
        ['Age','patient_age' ],
        ['Sexe','patient_sexe' ],
        ['Date retour','patient_date_retour' ],
        ['Dern Visite','patient_dern_visite' ], 
        ['Adresse','patient_adresse' ],
        ['Profession','patient_profession' ],
        ['Note','patient_note' ],
        ''
        ], 
    }
  }, 
  methods:{
    shortOrder(val){
      this.shotValue=val
        this.$store.commit('getDataBy',{url:'/patients',data:{sort_by:this.shotValue} });   
    },
    showDialog(){
      this.store.showDialog=true
      setTimeout(() => {
        this.store.showDialog=false
      }, 2500);
    }, 
    initData(){ 
      this.timer=setInterval(() => {  
        this.$store.commit('getDataBy',{url:'/patients',data:{sort_by:this.shotValue} });   
      }, 200 ); 
      setTimeout(() => {
        clearInterval(this.timer)
      }, 400); 
    },
    getUser(patient){
      this.store.statut.url='/patient';
      this.$store.state.statut.methode='saveData'
      this.store.formulaire=true;
      this.formulaire.data[0][0].model[1]=patient.patient_num;
      this.formulaire.data[0][1].model[1]=patient.patient_name_and_lastname;
      this.formulaire.data[0][2].model[1]=patient.patient_date_naiss;
      this.formulaire.data[0][3].model[1]=patient.patient_profession;
      this.formulaire.data[0][4].model[1]=patient.patient_casier ;

      this.formulaire.data[1][0][0].model[1]=patient.patient_sexe;
      this.formulaire.data[1][0][1].model[1]=patient.patient_age;
      this.formulaire.data[1][1].model[1]=patient.patient_adresse;
      this.formulaire.data[1][2].model[1]=patient.patient_dern_visite;
      this.formulaire.data[1][3].model[1]=patient.patient_date_retour ;
      this.formulaire.data[1][4].model[1]=patient.patient_note  ; 
    },
    deleteIt(patient){ 
      this.store.statut.save=false;
      this.store.messageYesNoDialogue=true
      this.$store.state.statut.url='/patients'
      this.$store.state.statut.methode='deleteData'
      this.$store.state.dataSending={ patient_num:patient.patient_num }
       
      this.store.statut.title=patient.patient_name_and_lastname
    },
    addNew(){
      this.store.statut.save=true;
      this.$store.state.statut.url='/patient'
      this.$store.state.statut.methode='saveData'
      // this.store.statut.url='/patient';
      this.store.formulaire=true
      this.formulaire.data[0][0].model[1]='';
      this.formulaire.data[0][1].model[1]='';
      this.formulaire.data[0][2].model[1]='';
      this.formulaire.data[0][3].model[1]='';
      this.formulaire.data[0][4].model[1]='';

      this.formulaire.data[1][0][0].model[1]='';
      this.formulaire.data[1][0][1].model[1]='';
      this.formulaire.data[1][1].model[1]='';
      this.formulaire.data[1][2].model[1]='';
      this.formulaire.data[1][3].model[1]='';
      this.formulaire.data[1][4].model[1]=''; 
    }
  },
  mounted(){   
     this.initData()  
  }, 
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