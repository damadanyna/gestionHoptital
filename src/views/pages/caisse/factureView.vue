<template>
  <div v-if=" this.$store.state.indexPageCaisse" class="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-custom">
      <div class="flex flex-row rounded-lg my-shadow2">
          <div class=" flex flex-col px-1  bg-params rounded-l-lg" >
              <span class=" text-3xl px-9 text-white pb-10" style="padding:7vh 12vh;">Encaissement</span>
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Numéro du mouvement" >
                <div class=" flex flex-row items-center"> 
                    <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M5 5h2v6H5V5m5 0H8v6h2V5M5 19h2v-6H5v6m5-6H8v6h2v-2h5v-2h-5v-2m-8 8h2V3H2v18M20 3v4h-7V5h-2v6h2V9h7v6h-2v-2h-2v6h2v-2h2v4h2V3h-2z" /></svg>
                    <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">N° du mouvement</span> 
                </div>
                <span class=" text-xl text-indigo-400"> 7233</span>
              </div>  
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Date d'aujourd'hui" >
                <div class=" flex flex-row items-center"> 
                    <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5z" /></svg> 
                    <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">Aujour d'hui</span> 
                </div>
                <span class=" text-xl text-indigo-400"> 11/09/2022 à 16:46</span>
              </div>  
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Liste des opérateur" >
                <div class=" flex flex-row items-center"> 
                    <svg  class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
                    <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">Opérateur</span> 
                </div>
                <span class=" text-xl text-indigo-400"> Médecin chef</span>
              </div>  
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Code patient" >
                <div class=" flex flex-row items-center"> 
                    <svg  class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-400"  d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z" /></svg>
                    <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">Patient</span> 
                </div>
                <input type="text" placeholder="Ex: M0204" maxlength="8" class=" text-indigo-400 bg-transparent border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
             
              </div>  
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Option du payement" >
                <div class=" flex flex-row items-center"> 
                  <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-400"  d="M20 22h-2v-5h2M6 22H4v-5h2M23 4v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2m-2 0H3v9h18m-1-7h-5v2h5m-2 1h-3v2h3m-4 0H4l2.73-3.64 2 2.73.73-.54L8.2 7.82l1.71-2.27z" /></svg>
                  <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">Payement</span> 
                </div>
                <select name="" id="" class=" bg-transparent outline-none text-indigo-400 text-xl"> 
                  <option class=" bg-stone-900" value="Au comptoire">Au comptoire</option>
                  <option class=" bg-stone-900" value="Prise en charge">Prise en charge</option>
                </select>
              </div>  
              <div class=" mt-2  py-1 flex flex-col px-2 border-b border-stone-700 " title="Option du tarification" >
                <div class=" flex flex-row items-center"> 
                  <svg viewBox="0 0 24 24" class=" w-5"  ><path class=" fill-current text-stone-400"   d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1-.5.15-1 .23-1.5.23-.88 0-1.76-.27-2.5-.79-.53.16-1.07.23-1.62.22-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7 1.6-1.5 4.05-1.66 5.83-.37.42-.11.86-.17 1.3-.17 1.36-.03 2.65.57 3.5 1.64 2.04.53 3.5 2.35 3.58 4.47.05 1.11-.25 2.2-.86 3.13.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29.25.09.51.14.77.21 5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 0 0-2.69-2.49 1 1 0 0 1-1-1 1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3.05-.29.08-.59.08-.89-.06-1.24-.62-2.32-2.87-2.53-1.25-2.96-4.4-1.32-4.4-.4-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1-.53-.02-1.03-.22-1.43-.56-.48.31-1.03.5-1.6.56-.57.05-1.04-.35-1.07-.9a.968.968 0 0 1 .88-1.1c.16-.02.94-.14.94-.77 0-.66.25-1.29.68-1.79-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2 4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25.5.19.78.75.59 1.29-.19.52-.77.78-1.29.59-.73-.32-1.55-.34-2.3-.06-.32.27-.32.83-.32 1.27 0 .74.37 1.43 1 1.83.53.27 1.12.41 1.71.4-.15-.26-.28-.53-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05 1.37-.07 2.59-.88 3.19-2.13.23-1.38 1.34-1.5 2.56-1.5m2 7.47-.62-1.3-.71.16 1 1.25.33-.11m-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1 0-.27.07-.54.23-.76.12-.1.27-.15.43-.15.55.03 1.02-.38 1.02-.92z" /></svg>
                  <span class=" ml-1 text-stone-400 font-bold uppercase text-xs">Tarif</span> 
                </div>
                <select name="" id="" class=" bg-transparent outline-none text-indigo-400 text-xl"> 
                  <option class=" bg-stone-900" value="Au comptoire">Normal</option>
                  <option class=" bg-stone-900" value="Prise en charge">Entreprise</option> 
                </select>
              </div>  
          </div>
          <div class=" flex flex-col  px-2 rounded-r-lg " style="background:#2f2f2f;height:85vh;width:50vw">
            <div class=" w-full justify-end flex items-center"> 
              <div @click="this.$store.state.indexPageCaisse=false" class="  cursor-pointer transform hover:scale-125 group">
                  <svg class=" w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500 text-stone-300" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
              </div>
            </div>
            <div class=" w-full  h-full flex justify-between flex-col ">
                <div class=" rounded-xl  text-white w-full h-full flex flex-col mt-8 ">
                  <div class=" py-1 ">
                    <span class=" font-bold text-stone-500" >Ex: 0000 0000 00032 4342</span>
                  </div>
                  <div class=" pb-4">
                    <span class=" text-stone-500">Razafindrakoto jean mark</span>
                  </div> 

                   <div class=" mt-2 text-2xl flex flex-row bg-stone-800 px-6 rounded-t-xl font-bold">
                     <div style=" width:45vw;">
                       <span >Désignation des actes</span>
                     </div>
                     <div style=" width:12vw;">
                       <span>Montant</span>
                     </div>
                   </div>
                   <div class=" overflow-y-auto" style="height:50vh">
                      <div v-for="item, i in data_" :key="i" class=" cursor-pointer text-stone-400 flex flex-row px-6 rounded-t-xl py-1 border-b border-stone-700">
                        <div style=" width:45vw;">
                          <span v-text="item.designation"> </span>
                        </div>
                        <div style=" width:11vw;">
                          <span v-text=" item.montant"> </span>
                        </div>
                      </div>
                   </div>
                   <div class=" flex flex-row bg-stone-800 px-6 rounded-b-xl  ">
                     <div style=" width:45vw;">
                       <span>Total</span>
                     </div>
                     <div style=" width:12vw;">
                       <span class=" text-indigo-300 font-bold items-center">0 ar</span>
                     </div>
                   </div>
                </div>
                <div class=" justify-end flex">
                    <button class=" bg-indigo-600 rounded-full absolute -mt-14 p-3 text-white"> 
                      <svg class=" w-6"  viewBox="0 0 24 24"><path class=" fill-current text-white" d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" /></svg>
                    </button>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{ 
    },
    data(){
      return {
        indexPage:1, 
        formulaire:false, 
        urlPatients:'Département', 
        data_: [
          {designation:'Consultation',montant:'100 ar'},
          {designation:'Medicament & fourniture',montant:'100 ar'},
          {designation:'Analyse Labolatoire',montant:'100 ar'},
          {designation:"Frais d'hospitalisation",montant:'100 ar'},
          {designation:'Petite chirurgie',montant:'100 ar'},
          {designation:'Radiographie',montant:'100 ar'},
          {designation:'Echologie',montant:'100 ar'},
          {designation:'Accouchement',montant:'100 ar'},
          {designation:'Sérum',montant:'100 ar'},
          {designation:'Fiche',montant:'100 ar'},
          {designation:'Certificat',montant:'100 ar'},
          {designation:'Diver',montant:'100 ar'}, 
        ],
      }
    },
    mounted(){ 
    }
}
</script>

<style scoped> 
</style> 