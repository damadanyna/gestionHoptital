 import axios from 'axios'
 axios.defaults.baseURL = 'localhost:4044/api';

 import { createStore } from 'vuex' 
export default createStore({
  state: {
    data:{
      //donnés utilisateur
      user:{
          nom:'admin',
          pwd:'admin',
          logged:true
      },
      clients:[
          {
            nom:"Rock",
            prenom:"Lee",
            sexe:"M",
            addresse :"Talatamy",
            numTel :"0349459128",
            anne:"",
            moi:"",
            jours:"",
            heure:"",
            type_client:"",
            nombre:"",
            type_reservation:"",
            etat:true,
            num_table:null,
          },
      ],
    },
    years:[
      2016,2017,2018,2019,2020,2021,2022
    ],
    //charge l'affiche du login au début de l'application
    formLogin:false,

    indexOnglet:0,
    indexOngletOfConfig:0,
    indexOngletOfStock:[0,0],
    indexOngletOfPatient:[0,0],
    messageDialogue:{shown:false,success:true,message:'success'},
    messageYesNoDialogue:{shown:false,message:'Supprimer ?'}, 
    
    
  },
  getters: {
  },
  mutations: { 
    async recupData(){  
      try {
         await axios
        .get('/patients')
        .then(()=>{
          console.log('maty  ')
           })
        .catch(e=>console.log('erreur le ka: '+e)) 
      } catch (e) {
        console.log(e)
      } 
    },
    async recupListPatients(){
      try {
        const d = await this.$axios.$get('/patients')
        console.log(d)
        if(d.status){
        //de asio exemple na insert ko aveo
        //ok
        }else{
          //Mampiseho anle boîte de dialogue erreur
          //d.message => erreure
        }

      } catch (e) {
        alert('Erreur de récupération des données')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
