 
 import { createStore } from 'vuex' 
export default createStore({
  state: {
    darkMode:false,
    data:{
      //donnés utilisateur
      user:{
          nom:'admin',
          pwd:'admin',
          logged:true
      },
      clients:[  ],
    }, 
    //charge l'affiche du login au début de l'application
    formLogin:false,
    formulaireAjout:false, 
    messageYesNoDialogue:false, 
    
    indexOnglet:0,
    indexOngletOfConfig:0,
    indexOngletOfStock:[0,0],
    indexOngletOfPatient:[0,0],
    messageDialogue:{shown:false,success:true,message:'success'},
    
    
  },
  getters: {
  },
  mutations: { 
    async getDataBy(){  
    try {
       await window.axios
      .get('/patients')
      .then(()=>{
        console.log('maty')
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
          //d.message => erreure 3996038
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
