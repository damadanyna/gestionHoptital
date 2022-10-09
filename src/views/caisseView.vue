<template>
  <div :class="chartPage==true?'flex':'hidden'" class="  px-7 pt-4 flex-col w-full pb-8 "> 
    
    <div class=" px-4 py-4 flex justify-between">
        <div class=" text-stone-700 text-2xl font-bold flex">
          <span class=" ">Gestion des Caisse</span>  
        </div>
        <div class=" text-2xl font-bold flex">
          <span  @click="chartPage=false" class=" cursor-pointer text-stone-700">Tableau /</span>  
          <span  class=" text-stone-300">Tableau de bord</span>  
        </div>
      </div>
    <!-- Foure box -->
    <div class=" flex w-full justify-between mt-8"> 
      <div v-for="boxItem,i in boxItems" :key="i" :class="i<3?' mr-8':' mr-0'" class="  flex px-6 my-shadow bg-white w-2/5 py-2 rounded-md"> 
        <div class="flex" v-html="boxItem.ico"></div>
        <div class=" ml-2 mt-1 flex flex-col">
          <span v-text="boxItem.text"></span>
          <span class=" text-indigo-600 font-bold " v-text=" boxItem.value"></span>
        </div>
      </div>
    </div>
    <!-- chart view -->
    <div class=" flex w-full justify-center mt-12">  
      <canvas id="suiviPatients" class="  my-shadow rounded-lg bg-white " />
    </div> 
    <!-- chart view2 --> 
    <div class="flex w-full  flex-row   justify-center mt-9">  
      <div class=" flex w-full mr-2 h-auto"> 
        <canvas id="hebdomadaire" class=" my-shadow rounded-lg bg-white " />
      </div>
      <div class=" flex w-full ml-2 h-auto"> 
        <canvas id="journalier" class=" my-shadow rounded-lg bg-white " />
      </div>
    </div> 
  </div>
  <div :class="chartPage==false?'flex':'hidden'" class=" px-7 pt-4 flex flex-col w-full pb-8"> 
    <!-- head bar -->
    <div class=" flex justify-between"> 
      <div class=" my-shadow flex bg-white rounded-full w-96 px-2 items-center justify-center"> 
          <svg class=" w-9 mb-2"  viewBox="0 0 24 24"><path class=" fill-current text-stone-400" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m-5.91.2L3  " /></svg>
          <input placeholder=" Rechercher" class=" px-3 w-full outline-none" type="text" name="" id="">
      </div>
      <router-link to="/utilisateur" class=" my-shadow flex bg-white rounded-full p-2 ">
        <svg class=" w-7" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
      </router-link>
    </div>
    <!-- tableau -->
    <div class=" mt-11 my-shadow rounded-lg bg-white py-2" >
      <div class=" px-4 py-4 flex justify-between">
        <div class=" text-stone-700 text-2xl font-bold flex">
          <span class="  ">Gestion des Caisse</span>  
        </div>
        <div class="  text-2xl font-bold flex">
          <span class=" text-stone-300">Tableau /</span>  
          <span @click="setVisibleChart()" class="  only: text-stone-700 cursor-pointer">Tableau de bord</span>  
        </div>
      </div>
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" v-for="i in 5" :key="i" :class="i==5?' w-32':''" v-text="i==5?'':'title ' +i"></th>
        </tr>
        <tbody> 
          <tr v-for="j in 10" :key="j" class=" group border-t border-stone-200  ">
            <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 4" :key="i">val{{i +' de' +j}}</td>
            <td class=" px-5 bg-white py-1 text-stone-600"   >
              <div class=" group-hover:flex  flex-row hidden">
                <div class=" transform hover:scale-125 pr-1 mr-4 cursor-pointer"  :title="'Supprimer de' +j"> 
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
      <div class=" px-4 py-1 justify-between flex border-t border-stone-300 pt-3"> 
        <div class=" flex flex-col ">
          <div class=" flex flex-row">
            <div v-for="i in 4" :key="i" @click="indexPage=i" :class="i==indexPage?' border-indigo-700 bg-indigo-400 ':' border-stone-800'" class=" transform hover:scale-125  font-bold rounded-lg cursor-pointer border px-3 mx-1">
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
        <div class=" flex flex-row">
          <div  @click="formulaire=true" class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full border border-stone-700">
                <svg class=" w-5" viewBox="0 0 24 24"><path  class=" fill-current text-stone-600 hover:text-indigo-700"  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
              </div>
            </div>
            <span class=" font-medium text-stone-500 hover:text-indigo-700">Ajouter</span>
          </div>
          <span class="   bg-stone-400 mx-3" style="width:1px"></span>
          <div  @click="recapitulatif=true"  class=" group flex flex-col cursor-pointer" title="Ajouter une nouvelle patients ">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-row rounded-full border border-stone-700">
                 <svg class=" w-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-600 hover:text-indigo-700" d="M18 6v11h4V6M2 17h4V6H2m5 13h10V4H7v15z" /></svg>
              </div>
            </div>
            <span class=" font-medium text-stone-500 hover:text-indigo-700">Récap</span>
          </div>
          <span class="   bg-stone-400 mx-3" style="width:1px"></span>
          <div @click="dateSelector=true" class=" group flex flex-col cursor-pointer" title="Séléctionner l'année">
            <div class=" group-hover:scale-125 flex flex-row justify-center">
              <div class="flex flex-col ">
                <div class="flex flex-row justify-between"> 
                  <span v-for="i in 5" :key="i" class=" bg-stone-600" style=" height:2px;width:2px" ></span>
                </div>
                <div class="flex flex-row px-1 border-t-4 rounded-b-sm border border-stone-700">
                  <span class=" text-xs font-bold text-indigo-700">22</span>
                </div> 
              </div>
            </div>
            <span  class=" font-medium text-stone-500 hover:text-indigo-700">Année</span>
          </div>
        </div>
      </div>
    </div>
    <!-- patient's option -->
    <div v-if="optionPatients==true" @click="optionPatients=false" class="absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" w-full h-full flex justify-center items-center  "> 
        <div @click="setUrlPatients('Hospitalisé')"  class="flex items-center justify-center text-center"> 
          <span class=" px-4 mr-3 bg-white rounded-lg my-shadow py-1 font-semibold transform cursor-pointer ">
            <svg class=" w-24" viewBox="0 0 24 24"><path class="fill-current text-stone-600" d="M16.5 12A2.5 2.5 0 0 0 19 9.5 2.5 2.5 0 0 0 16.5 7 2.5 2.5 0 0 0 14 9.5a2.5 2.5 0 0 0 2.5 2.5M9 11a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" /></svg>
            Hospitalisé
          </span> 
        </div> 
        <div  @click="setUrlPatients('Patients')"  class="flex items-center justify-center text-center">
          <span class=" px-4 ml-3 bg-white rounded-lg my-shadow py-1 font-semibold transform cursor-pointer "> 
            <svg class=" w-24" viewBox="0 0 24 24"> 
              <path class="fill-current text-stone-600" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z" />  
            </svg>
            Patients
          </span> 
        </div>
     </div> 
    </div>
    <!-- formulaire Popup --> 
    <div v-if="formulaire==true"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
         <div class=" w-full flex text-center">
          <span  class=" text-4xl text-gray-500 w-full text-center pb-5">Preparation d'encaissement </span>
          <div class=" ">
            <div @click="formulaire=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
         </div>
         <div class="flex-row flex px-12 py-3">
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">N° Mouvement</span>
              <input type="text" placeholder="12456..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Nom et Prénom</span>
              <input type="text" placeholder="Rakoto..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Date et Heure d'encaissement</span>
              <div class=" flex flex-row"> 
                <input type="date" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-36">
                <input type="time" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-24 ml-3">
              </div>
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Méthode d'encaissement</span>
              <input type="text" placeholder="Prise en charge" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
          </div> 
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Tarif</span>
              <input type="number" placeholder="Normal" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Montant Total</span>
              <input type="number" placeholder="00.000 MGA" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Matricule du Patient</span>
              <input type="number" placeholder="12456..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Département</span>
              <input type="text" placeholder="Caissier..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
          </div>
         </div>
         <div class=" w-full flex flex-center px-20">
          <button class=" bg-stone-400 w-full py-2 rounded-xl text-white font-semibold">Enregistrer</button>
         </div>
     </div> 
    </div>
    <!-- tableau de recapitulatif --> 
    <div v-if="recapitulatif==true" @click="recapitulatif=false"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
          
      <table class=" w-full  rounded-lg "> 
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" >RECAPITULATIF</th>
          <th class="  px-5 py-3 text-start" >AVANCES PERCUES</th>
        </tr>
        <tr class=" bg-stone-100   border-stone-200">
          <th class="  px-5 py-3 text-start" >Designation des actes</th>
          <th class="  px-5 py-3 text-start" >Montant</th>
        </tr>
        <tbody> 
          <tr v-for="item,j in arrayRecapitulatif" :key="j" class=" group border-t border-stone-200  ">
            <td class=" px-5 bg-white py-1 text-stone-600"  v-for="i in 2" :key="i" v-text="i-1==1?item[i-1]+' MGA':item[i-1]"> </td> 
          </tr>
        </tbody>
      </table> 
         <div class=" w-full flex flex-center px-5">
          <div class="  w-full py-2 bg-green-400 flex justify-center rounded-xl text-white font-semibold">
            <span class=" text-white">Iprimer</span>
            <svg class=" ml-4 w-6" viewBox="0 0 24 24"><path class=" fill-current text-white" d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3z" /></svg>
          </div>
         </div>
     </div> 
    </div>
    <!-- Canlendar Popup --> 
    <div v-if="dateSelector==true"  class="  justify-center items-center absolute blures w-full flex h-screen top-0 left-0"> 
     <div class=" flex flex-col py-5"> 
         <div class=" w-full flex text-center ">
          <span  class=" text-4xl text-indigo-600 w-full text-center pb-5">Séléctionner une date</span>
          <div class=" ">
            <div @click="dateSelector=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
         </div> 
         <div class=" grid grid-cols-5 py-3"> 
          <div v-for="year,i in this.$store.state.years" :key="i" class=" bg-stone-400 py-6 my-3 mx-2 cursor-pointer my-shadow rounded-lg">
                <span v-text=" year" class=" text-4xl  px-5 text-white"> </span>
            </div>
         </div>
     </div> 
    </div>
  </div>
</template>

<script> 
import Chart from 'chart.js'
export default {
    components: {   },
    data() {
        return {
            boxItems: [ 
                {
                    text: "Sortie",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 213
                },
                {
                    text: "Entrée",
                    ico: `
          <svg class=" w-16 " viewBox="0 0 24 24"><path class=" fill-current text-indigo-600" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1 1 1 0 0 0 1-1h2a3 3 0 0 1-3 3 3 3 0 0 1-3-3V9h-3v8H8V9H6" /></svg>
          `,
                    value: 104
                } 
            ],            
            suiviPatients: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "Patients 2020",
                    data: [0, 400, 1, 2, 79, 82, 27, 14],
                    backgroundColor: "rgba(54,73,93,.5)",
                    borderColor: "#36495d",
                    borderWidth: 3
                  },
                  {
                    label: "Patients 2021",
                    data: [300.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                    backgroundColor: "rgba(71, 183,132,.5)",
                    borderColor: "#47b784",
                    borderWidth: 3
                  }
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Suivis des patients',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },          
            journalier: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "100.000.000 MGA",
                    data: [0, 400, 1, 2, 79, 82, 27, 14],
                    backgroundColor: "rgba(54,73,93,.5)",
                    borderColor: "#36495d",
                    borderWidth: 3
                  }, 
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Cette samaine',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },         
            hebdomadaire: {
              type: "line",
              data: {
                labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                datasets: [
                  {
                    label: "400.000.000 MGA",
                    data: [300.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                    backgroundColor: "rgba(71, 183,132,.5)",
                    borderColor: "#47b784",
                    borderWidth: 3
                  }
                ]
              },
              options: {
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                title:{
                  display:true,
                  text:'Ce mois ci',
                  fontSize:26,
                  fontColor:'#6b7280'
                }
              }
            },
            indexPage:1,
            optionPatients:false,
            formulaire:false,
            recapitulatif:false,
            urlPatients:'Patients',
            chartPage:true,
            dateSelector:false, 
            
            arrayRecapitulatif:[
              [`Consultation`,3000],
              [`Traitement Divers`,3000],
              [`Médicaments & Fournitures`,3000],
              [`Analyse & Labo`,3000],
              [`Frais d'hospitalisation`,3000],
              [`Petite Chirurgie`,3000],
              [`Radiographie`,3000],
              [`Ecographie`,3000],
              [`Chirurgie`,3000],
              [`Accouchement`,3000],
              [`Sérum`,3000],
              [`Fiche`,3000],
              [`Certificat`,3000],
              [`Divers`,3000],
            ]
        };
    },
    methods:{
      initChart(id,dataset){ 
        const ctx = document.getElementById(id);
        new Chart(ctx, dataset);
      }, 
      setUrlPatients(val){
        this.urlPatients=val;
      },
      setVisibleChart(){
        this.chartPage=true; 
      }
    },
    mounted(){ 
        this.initChart('suiviPatients',this.suiviPatients)
        this.initChart('hebdomadaire',this.hebdomadaire)
        this.initChart('journalier',this.journalier) 
    }
};
</script>
<style scoped> 
</style>
