<template> 
  <div class="patientsCss flex flex-col w-full   ">   
    <!-- tableau -->
      <div class=" mt-4 my-shadow rounded-lg bg-white  " >
        <div class=" px-4">
          <div class=" text-stone-700 text-2xl pb-7 font-bold flex justify-end">
            <div class=" bg-indigo-500 px-4 rounded-b-2xl">
              <span class=" text-stone-300 ">Gestion des Patients </span> 
              <span class="text-white"> ></span > 
              <span class="text-white" @click="optionPatients=true" v-text="urlPatients">  </span > 
            </div>
          </div>
        </div>
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100 border-stone-200">
          <th class=" px-5 py-3 text-start cursor-pointer " @click="shortOrder(item)"  v-for="item,i in table_col" :key="i" 
          :class="i==0?' w-20':i==2?' w-20':i==3?' w-32':i==4?' w-28':i==5?' w-20':i==6?' w-32':i==7?' w-32':i==8?' w-32':''"  v-text="i==8?'':item"></th>
        </tr>
        <tbody> 
          <tr v-for="j in 50" :key="j" class=" group border-b hover:border-b-2 border-stone-200 hover:border-stone-300">
            <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 8" :key="i">val{{ j}}</td>
            <td class=" px-5 bg-white py-1 text-stone-600"   >
              <div class=" group-hover:flex  flex-row hidden">
                <div @click="this.$store.state.messageYesNoDialogue.shown=true" class=" transform hover:scale-125 pr-1 mr-4 cursor-pointer"  :title="'Supprimer de' +j"> 
                  <svg class="w-5" viewBox="0 0 24 24"><path class=" fill-current text-red-600" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z" /></svg>
                </div>
                <div  class=" transform hover:scale-125 pr-1 ml-4 cursor-pointer"  :title="'Editer' +j">
                  <svg class=" w-5" viewBox="0 0 24 24"><path class="fill-current text-indigo-700" d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2m10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z" /></svg>
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
        <div class=" absolute bottom-6 right-28 bg-stone-400 flex flex-row px-3 py-2 rounded-2xl">
          <div  @click="formulaire=true" class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full border border-white">
                <svg class=" w-5" viewBox="0 0 24 24"><path  class=" fill-current text-white hover:text-blue-400"  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
              </div>
            </div>
            <span class=" font-medium text-white hover:text-stone-900">Ajouter</span>
          </div>
           
        </div>
      </div>
    </div> 
    <!-- formulaire Popup --> 
    <div v-if="formulaire==true"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
    <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
        <div class=" w-full flex text-center">
          <span  class=" text-4xl text-gray-500 w-full text-center pb-5">Fiche Individuelle </span>
          <div class=" ">
            <div @click="formulaire=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
        </div>
        <div class="flex-row flex px-12 py-3">
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Numéro</span>
              <input type="text" placeholder="Ex: 12456..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Caisier</span>
              <input type="text" placeholder="Ex: Rakoto..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Nom et Prénom</span>
              <input type="text" placeholder="Ex: Rakoto..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div> 
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Date de Naissance</span>
              <input type="date" placeholder="Prise en charge" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Dernière Viste</span>
              <input type="date" placeholder="Normal" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div> 
            <!-- Hitanla ok ok reto zavatra reto minsty no tokony atao anaty composant -->
            
          </div> 
          <div class=" flex flex-col px-7">
            <div class=" flex flex-row w-full justify-between mb-3">   
              <div class=" flex flex-col">
                <span class=" text-stone-500 text-sm">Sexe</span>
                <input v-model="patients.sexe" type="text" placeholder="Masculin/Fémin" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-32">
              </div> 
              <!-- git rem mo le gestion hôpital iny -->
              <div class=" flex flex-col">
                <span class=" text-stone-500 text-sm">Age</span>
                <input v-model="patients.age" type="number" placeholder="Ex: 24ans" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-28">
              </div>
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Proféssion</span>
              <input v-model="patients.profession" type="text" placeholder="Ex: Mpampianatra..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Adresse</span>
              <input type="text" placeholder="Ex: Ampisikinana..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Date de Retour</span>
              <input type="date" placeholder="Ex: Caissier..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Note</span>
              <input type="text" placeholder="Note..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
          </div> 
        </div>
        <div class=" w-full flex flex-center px-20">
          <button @click="showDialog()" class=" bg-stone-400 w-full py-2 rounded-xl text-white font-semibold">Enregistrer</button>
        </div>
    </div> 
    </div> 
  </div> 
</template>
 <script> 
 
  export default { 
    components:{ 
    },
  data(){
    return {
      indexPage:1,
      formulaire:false,
      urlPatients:'Liste des Patients',
      table_col:['N°','Nom et prenom','Casier','Date Naiss','Age','Sexe','Dern Visite','Retour',''],

      //Models anle patients
      patients:{}
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
    async postPatient(){ 
      try {
        const d = await this.$axios.$post('/patient',this.patients)
        console.log(d) 
      } catch (e) {
        alert('Erreur')
      }
    }
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